import { useState } from "react";

export default function Player({ name, symbol, isActivePlayer }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(name);

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	return (
		<li className={isActivePlayer ? "active" : undefined}>
			<span className="player">
				{isEditing ? (
					<input
						type="text"
						placeholder={name}
						required
						value={playerName}
						onChange={handleChange}
					/>
				) : (
					<span className="player-name">{playerName}</span>
				)}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={() => setIsEditing((edit) => !edit)}>
				{isEditing ? "Save" : "Edit"}
			</button>
		</li>
	);
}
