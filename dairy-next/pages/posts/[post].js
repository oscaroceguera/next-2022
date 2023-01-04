export default function post({ post }) {
  return (
    <div>
      <h1>Post ID: {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  if (!Object.keys(post).length) {
    return {
      notFound: true,
    };
  }
  return { props: { post } };
}

// export async function getStaticProps({ params }) {
//   const id = params.post;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const post = await res.json();
//   if (!Object.keys(post).length) {
//     return {
//       notFound: true,
//     };
//   }
//   return { props: { post } };
// }
