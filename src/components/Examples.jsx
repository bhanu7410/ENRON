import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples({ examples }) {
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
		<Section id="examples" title={"Examples"}>
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
		</Section>
	);
}
