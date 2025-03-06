import { useRef, useState } from "react";

export default function Player() {
	const playerInput = useRef();

	const [playerName, setPlayerName] = useState();

	function handlePlayerNameChange(name) {
		setPlayerName(playerInput.current.value);
		playerInput.current.value = "";
	}

	return (
		<section id="player">
			<h2>Welcome {playerName ? playerName : "UnknowEntity"}</h2>
			<p>
				<input ref={playerInput} type="text" />
				<button onClick={handlePlayerNameChange}>Set Name</button>
			</p>
		</section>
	);
}
