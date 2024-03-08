export interface PostProps {
  user?: string;
}

const Post: React.FC<PostProps> = ({ user }) => {
  return (
    <article>
      <h3>Post title</h3>
      <p>Post content</p>
    </article>
  );
};

export default Post;
