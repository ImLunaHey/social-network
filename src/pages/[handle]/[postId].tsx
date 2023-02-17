import type { NextPage } from 'next';
import { SinglePost } from '@app/components/single-post';
import { api } from '@app/utils/api';
import Error from 'next/error';
import { withPublicAccess } from '@app/common/with-public-access';
import { LoadingSpinner } from '@app/components/loading-spinner';

// Return the postId from the url
export const getServerSideProps = withPublicAccess((context) => {
  return {
    props: {
      postId: context.query.postId,
    },
  };
});

const Post: NextPage<{ postId: string }> = ({ postId }) => {
  const post = api.post.getPostDetails.useQuery({ postId });
  if (post.isLoading) return <LoadingSpinner />;
  if (!post.data) return <Error statusCode={404} title="No post exists with this ID"></Error>;
  return <SinglePost post={post.data} />;
};

export default Post;
