// Importing Assets
import reactImg from "./assets/react-core-concepts.png";

// Importing CSS
import "./ressen.css";

// Importing Components
import { conseptsData } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";

function App() {
	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept {...conseptsData[0]} />
						<CoreConcept {...conseptsData[1]} />
						<CoreConcept {...conseptsData[2]} />
						<CoreConcept {...conseptsData[3]} />
					</ul>
				</section>
				<h2>Time to get started!</h2>
			</main>
		</div>
	);
}

export default App;
