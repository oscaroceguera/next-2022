import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function index({ posts }) {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) return <div>Failed to load.</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h2>Posts API</h2>
      <ul>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const posts = await res.json();

//   return { props: { posts } };
// }

// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const posts = await res.json();

//   return { props: { posts } };
// }
