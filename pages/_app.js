import Head from "next/head";
import NavBar from "../components/NavBar";
import favicon from "../public/favicon.ico";
import "../styles/global.css";

const App = ({ Component, pageProps }) => {
	console.log("[App] render");
	return (
		<>
			<Head>
				<link rel="shortcut icon" href={favicon.src} />
			</Head>
			<header>
				<NavBar />
			</header>
			<Component {...pageProps} />
		</>
	);
};

export default App;
