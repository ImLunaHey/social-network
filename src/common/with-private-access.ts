import { getServerAuthSession } from '@app/server/auth';
import type { Dict } from '@trpc/server';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next'
import type { Session } from 'next-auth';

type Callback = (context: Parameters<GetServerSideProps>[0] & { session: Session }) => ReturnType<GetServerSideProps> | Awaited<ReturnType<GetServerSideProps>>;

export const withPrivateAccess = <Props extends Dict<string | string[]>, T extends Callback = Callback>(fn?: T) => {
    return async (context: GetServerSidePropsContext<Props>) => {
        const session = await getServerAuthSession(context);

        // If the user isn't signed in redirect them to the signin page
        if (!session) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            };
        }

        // If the user is signed in but doesn't have a user page redirect them to the page creation page
        if (!session.user.page && context.resolvedUrl !== '/page/create') {
            return {
                redirect: {
                    destination: '/page/create',
                    permanent: false,
                },
            };
        }
        return (fn?.({ ...context, session }) ?? { props: { session } }) as ReturnType<T>;
    };
};
