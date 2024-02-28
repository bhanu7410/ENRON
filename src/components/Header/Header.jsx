// Importing Assets
import reactImg from "./../../assets/react-core-concepts.png";

//Importing Styles
import "./Header.css";

import { memo } from "react";

const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function Header() {
	const description = reactDescription[genRandomInt(reactDescription.length)];

	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app
				you are going to build!
			</p>
		</header>
	);
}

export default memo(Header);
