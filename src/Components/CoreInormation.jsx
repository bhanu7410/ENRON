import { EXAMPLES } from "../assets/data-with-examples";
import { useState } from "react";

function ExampleInformation(props) {}

function TabButton({ children, onSelect, isSelected }) {
	return (
		<li>
			<button
				className={isSelected ? "active" : undefined}
				onClick={onSelect}
			>
				{EXAMPLES[children].title}
			</button>
		</li>
	);
}

export default function CoreInformation() {
	const [selectedTab, setSelectedTab] = useState("components");

	function handleSelect(comp) {
		setSelectedTab(comp);
		console.log(comp);
	}

	return (
		<>
			<menu>
				<TabButton
					isSelected={selectedTab == "components"}
					onSelect={() => handleSelect("components")}
				>
					components
				</TabButton>
				<TabButton
					isSelected={selectedTab == "jsx"}
					onSelect={() => handleSelect("jsx")}
				>
					jsx
				</TabButton>
				<TabButton
					isSelected={selectedTab == "props"}
					onSelect={() => handleSelect("props")}
				>
					props
				</TabButton>
				<TabButton
					isSelected={selectedTab == "state"}
					onSelect={() => handleSelect("state")}
				>
					state
				</TabButton>
			</menu>
			<div id="tab-content">
				<h3>
					{EXAMPLES[selectedTab]
						? EXAMPLES[selectedTab].title
						: "Please select a tab"}
				</h3>
				<p> {EXAMPLES[selectedTab].description} </p>
				<pre>
					<code>{EXAMPLES[selectedTab].code}</code>
				</pre>
			</div>
		</>
	);
}
