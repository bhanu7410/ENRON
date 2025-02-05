import { CORE_CONCEPTS, EXAMPLES } from "../assets/data-with-examples";

function Concept(props) {
	return (
		<li>
			<img src={props.imgSrc} alt="image_does not exist" />
			<h3>{props.title}</h3>
			<p>{props.description}</p>
		</li>
	);
}

function CoreConsept() {
	console.log("core consepts from the data", CORE_CONCEPTS);
	console.log("examples from data", EXAMPLES);
	return (
		<ul>
			{CORE_CONCEPTS.map((concept) => (
				<Concept
					title={concept["title"]}
					description={concept["description"]}
					imgSrc={concept["image"]}
				/>
			))}
		</ul>
	);
}

export default CoreConsept;
