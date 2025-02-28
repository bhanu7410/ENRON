export default function GameOver({ winningPlayer, handleReMatch }) {
	return (
		<div id="game-over">
			<h2>Game Over !</h2>
			<p>
				{" "}
				{winningPlayer ? (
					<>{winningPlayer} Won</>
				) : (
					<>It is a Draw</>
				)}{" "}
			</p>
			<p>
				<button onClick={handleReMatch}>Rematch</button>
			</p>
		</div>
	);
}
