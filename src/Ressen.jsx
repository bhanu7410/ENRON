// Importing Assets

// Importing CSS
import "./ressen.css";

// Importing Components
import { conseptsData, examples } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
	return (
		<>
			<Header />
			<main>
				<CoreConcepts data={conseptsData} />
				<Examples examples={examples} />
			</main>
		</>
	);
}

export default App;
