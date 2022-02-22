import Head from "next/head";
import { getPost, getSlugs } from "../../lib/post";

export async function getStaticPaths() {
	const slugs = await getSlugs();
	return {
		paths: slugs.map((slug) => ({ params: { slug } })),
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	console.log("[PostPage] getStaticProps()");
	return { props: { post: await getPost(slug) } };
}

const PostPage = ({ post }) => {
	console.log("[PostPage] render");
	return (
		<>
			<Head>
				<title>{post.title} - My Blog</title>
			</Head>
			<main className="container">
				<p>{post.date}</p>
				<h1>{post.title}</h1>
				<article dangerouslySetInnerHTML={{ __html: post.body }} />
			</main>
		</>
	);
};

export default PostPage;
