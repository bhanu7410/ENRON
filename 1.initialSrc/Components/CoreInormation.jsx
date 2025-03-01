import { EXAMPLES } from "../assets/data-with-examples";
import { useState } from "react";
import Tabs from "./Tabs";

function TabButton({ children, isSelected, ...props }) {
	return (
		<li>
			<button className={isSelected ? "active" : undefined} {...props}>
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
		<Tabs
			ButtonsContainer="menu"
			tabs={
				<>
					<TabButton
						isSelected={selectedTab == "components"}
						onClick={() => handleSelect("components")}
					>
						components
					</TabButton>
					<TabButton
						isSelected={selectedTab == "jsx"}
						onClick={() => handleSelect("jsx")}
					>
						jsx
					</TabButton>
					<TabButton
						isSelected={selectedTab == "props"}
						onClick={() => handleSelect("props")}
					>
						props
					</TabButton>
					<TabButton
						isSelected={selectedTab == "state"}
						onClick={() => handleSelect("state")}
					>
						state
					</TabButton>
				</>
			}
		>
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
		</Tabs>
	);
}
