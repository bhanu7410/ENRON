import PropTypes from "prop-types"; // Import PropTypes
import { CORE_CONCEPTS, EXAMPLES } from "../assets/data-with-examples";

function Concept(props) {
	return (
		<li>
			<img src={props.imgSrc} alt={props.title} />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
}

// Define prop-types for the Concept component
Concept.propTypes = {
	imgSrc: PropTypes.string.isRequired, // imgSrc should be a string and is required
	title: PropTypes.string.isRequired, // title should be a string and is required
	description: PropTypes.string.isRequired, // description should be a string and is required
};

function CoreConcept() {
	console.log("core concepts from the data", CORE_CONCEPTS);
	console.log("examples from data", EXAMPLES);
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
