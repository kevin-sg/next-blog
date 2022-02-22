import { useState } from "react";
import { LightTheme } from "./LightTheme";

function loadLightMode() {
	if (typeof localStorage === "undefined") return false;

	const value = localStorage.getItem("lightMode");
	return value === null ? false : JSON.parse(value);
}

const ThemeSwitch = () => {
	const [lightMode, setLightMode] = useState(loadLightMode);

	console.log("[ThemeSwitch] Light Mode", lightMode);

	const handleClick = () => {
		localStorage.setItem("lightMode", JSON.stringify(!lightMode));
		setLightMode(!lightMode);
	};

	return (
		<>
			<button onClick={handleClick} suppressHydrationWarning>
				{lightMode ? "Dark Mode" : "Light Mode"}
			</button>
			<style jsx>{`
				button {
					border-radius: 0.2rem;
					border: none;
					cursor: pointer;
					font-size: 1rem;
					padding: 0.2rem;
				}
			`}</style>

			{lightMode && <LightTheme />}
		</>
	);
};

export default ThemeSwitch;
