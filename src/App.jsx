import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function deriveActivePlayer(gamelogs) {
	let currPlayer = "X";
	if (gamelogs.length > 0 && gamelogs[0].player == "X") {
		currPlayer = "O";
	}
	return currPlayer;
}

function App() {
	const [gameLogs, setGameLogs] = useState([]);
	const currPlayer = deriveActivePlayer(gameLogs);
	let gameBoard = initialGameBoard;

	for (let turn of gameLogs) {
		gameBoard[turn.square.row][turn.square.col] = turn.player;
	}

	for (let combinations of WINNING_COMBINATIONS) {
	}

	function handleSelectPlayer(rowIndex, colIndex) {
		// setActivePlayer((currPlayer) => (currPlayer == "X" ? "O" : "X"));
		setGameLogs((prevturns) => {
			let currPlayer = deriveActivePlayer(prevturns);

			const updatedGameLogs = [
				{
					square: { row: rowIndex, col: colIndex },
					player: currPlayer,
				},
				...prevturns,
			];
			return updatedGameLogs;
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						name="Player 1"
						symbol="X"
						isActivePlayer={"X" == currPlayer}
					/>
					<Player
						name="Player 2"
						symbol="O"
						isActivePlayer={"O" == currPlayer}
					/>
				</ol>
				<GameBoard onSelect={handleSelectPlayer} board={gameBoard} />
			</div>
			<Log logs={gameLogs} />
		</main>
	);
}

export default App;
