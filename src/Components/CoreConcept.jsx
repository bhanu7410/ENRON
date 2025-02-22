import { CORE_CONCEPTS } from "../assets/data-with-examples";

function Concept(props) {
	return (
		<li>
			<img src={props.imgSrc} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
}

function CoreConcept() {
	return (
		<ul>
			{CORE_CONCEPTS.map((concept) => (
				<Concept
					key={concept.title} // Assuming title is unique
					title={concept.title}
					description={concept.description}
					imgSrc={concept.image}
				/>
			))}
		</ul>
	);
}

export default CoreConcept;
