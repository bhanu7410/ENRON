import CoreConsept from "./Components/CoreConsept.jsx";
import reactImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
	return Math.floor(Math.random() * (max + 1));
}

function Header() {
	let primaryDiscription =
		reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
	return (
		<header>
			<img src={reactImg} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{primaryDiscription} React concepts you will need for almost any
				app you are going to build!
			</p>
		</header>
	);
}

function App() {
	return (
		<div>
			<Header />

			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<CoreConsept />
				</section>
			</main>
		</div>
	);
}

export default App;
