import { useState } from "react";

// Importing Assets
import reactImg from "./assets/react-core-concepts.png";

// Importing CSS
import "./ressen.css";

// Importing Components
import { conseptsData, examples } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

	let tabContent = (
		<div id="tab-content">
			<h3>Please select a Topic</h3>
		</div>
	);

	if (selectedTopic) {
		tabContent = (
			<div id="tab-content">
				<h3>{examples[selectedTopic].title}</h3>
				<p>{examples[selectedTopic].description}</p>
				<code>{examples[selectedTopic].code}</code>
			</div>
		);
	}

	return (
		<>
			<Header />
			<main>
				<section id="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{conseptsData.map((conceptItem) => (
							<CoreConcept
								key={conceptItem.title}
								{...conceptItem}
							/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === "components"}
							onSelect={() => setSelectedTopic("components")}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "jsx"}
							onSelect={() => setSelectedTopic("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "props"}
							onSelect={() => setSelectedTopic("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === "state"}
							onSelect={() => setSelectedTopic("state")}
						>
							State
						</TabButton>
					</menu>
					{tabContent}
				</section>
			</main>
		</>
	);
}

export default App;
