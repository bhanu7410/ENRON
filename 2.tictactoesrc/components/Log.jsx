export default function Log({ logs }) {
	const gameLogs = [...logs];
	return (
		<ol id="log">
			{gameLogs.map((log) => (
				<li key={`${log.square.row}${log.square.col}`}>
					{log.player == "X" ? "Player1" : "Player2"} Selected :{" "}
					{log.square.row},{log.square.col}
				</li>
			))}
		</ol>
	);
}
