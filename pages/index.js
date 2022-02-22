import Head from "next/head";
import Link from "next/link";
import { getPosts } from "../lib/post";

export async function getStaticProps() {
	return { props: { posts: await getPosts() } };
}

const HomePage = ({ posts }) => {
	console.log("[HomePage] render");

	return (
		<>
			<Head>
				<title>My Blog</title>
			</Head>
			<main className="container">
				<h1>My Blog</h1>

				<ul>
					{posts.map(({ slug, title }) => (
						<li key={slug}>
							<Link href={`/posts/${slug}`}>
								<a>{title}</a>
							</Link>
						</li>
					))}
				</ul>
			</main>
		</>
	);
};

export default HomePage;
