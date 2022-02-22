import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
	return (
		<nav className="container">
			<ul>
				<li>
					<Link href="/">
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<a>About</a>
					</Link>
				</li>
			</ul>
			<ThemeSwitch />
			<style jsx>{`
				nav {
					display: flex;
					justify-content: space-between;
					margin: 1rem auto;
				}
				nav ul {
					display: flex;
					justify-content: center;
					align-items: center;
					list-style-type: none;
				}
				nav ul li {
					margin: 0 1rem;
				}
			`}</style>
		</nav>
	);
};

export default NavBar;
