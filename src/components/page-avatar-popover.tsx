import { FollowButton } from '@app/components/follow-button';
import { User, Text, Spacer, Grid } from '@nextui-org/react';
import { type FC } from 'react';

export const PageAvatarPopover: FC<{
  src: string;
  name: string;
  handle: string;
  description: string;
  official: boolean;
  followerCount: number;
  followingCount: number;
}> = ({ src, name, official, description, handle, followerCount, followingCount }) => {
  return (
    <Grid.Container
      css={{
        mw: '300px',
        borderRadius: '$lg',
        padding: '$sm',
      }}
    >
      <Grid.Container justify="space-between" alignItems="center">
        <Grid>
          <User
            color={official ? 'secondary' : 'primary'}
            altText={`Avatar for ${name}`}
            src={src}
            name={name}
            description={official ? '✅ Official' : ''}
            css={{ px: 0 }}
          />
        </Grid>
        <Grid>
          <FollowButton handle={handle} />
        </Grid>
      </Grid.Container>
      <Grid.Container>
        <Grid xs={12}>
          <Text size={14} css={{ mt: '$1' }} color="#888888">
            {description.trim() || 'This user is a mystery'}
          </Text>
        </Grid>
      </Grid.Container>

      <Grid.Container justify="flex-start" alignContent="center">
        <Text size={14} color="#888888">
          <Text b color="foreground" size={14}>
            {followingCount}
          </Text>{' '}
          Following
        </Text>
        <Spacer inline x={0.5} />
        <Text size={14} color="#888888">
          <Text b color="foreground" size={14}>
            {followerCount}
          </Text>{' '}
          Followers
        </Text>
      </Grid.Container>
    </Grid.Container>
  );
};
