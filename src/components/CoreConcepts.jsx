import CoreConcept from "./CoreConcept";

export default function CoreConcepts({ data }) {
	return (
		<section id="core-concepts">
			<h2>Core Concepts</h2>
			<ul>
				{data.map((conceptItem) => (
					<CoreConcept key={conceptItem.title} {...conceptItem} />
				))}
			</ul>
		</section>
	);
}
