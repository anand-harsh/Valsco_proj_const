import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkMode";
import './index.css';

export default function Switcher() {
	const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<div className="switch-container">
			<DarkModeSwitch
				style={{ marginBottom: "2rem" }}
				checked={darkSide}
				onChange={toggleDarkMode}
				size={30}
			/>
		</div>
	);
}
