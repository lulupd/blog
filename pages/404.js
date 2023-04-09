import { getAllPosts } from "@/lib/posts";

export default function Custom404() {
  return (
    <div className="card">
      <h1>404</h1>
      <p> This page could not be found.</p>
    </div>
  )
}

export async function getStaticProps(){
  const posts = getAllPosts();
  return {
      props: {
        posts,
      },
  };
}