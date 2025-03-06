import { useState } from "react";

export default function Player() {
	const [playerName, setPlayerName] = useState("unknown entity");

	function handlePlayerNameChange(name) {
		setPlayerName(name);
	}

	return (
		<section id="player">
			<h2>Welcome {playerName}</h2>
			<p>
				<input
					type="text"
					value={playerName}
					onChange={(event) =>
						handlePlayerNameChange(event.target.value)
					}
				/>
				<button>Set Name</button>
			</p>
		</section>
	);
}
