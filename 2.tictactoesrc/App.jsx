import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./assets/winning-combinations";
import { isElement } from "react-dom/test-utils";

const initialPlayers = {
	O: "Player2",
	X: "Player1",
};

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

function deriveWinner(gameBoard, players) {
	let winner;

	for (let combinations of WINNING_COMBINATIONS) {
		const firstSymbol =
			gameBoard[combinations[0].row][combinations[0].column];
		const secondSymbol =
			gameBoard[combinations[1].row][combinations[1].column];
		const thirdSymbol =
			gameBoard[combinations[2].row][combinations[2].column];

		if (
			firstSymbol &&
			firstSymbol == secondSymbol &&
			secondSymbol == thirdSymbol
		) {
			winner = players[firstSymbol];
		}
	}
	return winner;
}

function App() {
	const [gameLogs, setGameLogs] = useState([]);
	const currPlayer = deriveActivePlayer(gameLogs);
	const [players, setPlayers] = useState(initialPlayers);
	let gameBoard = [...initialGameBoard.map((innerGB) => [...innerGB])];
	let hasDraw = gameLogs.length === 9 && !winner;

	for (let turn of gameLogs) {
		gameBoard[turn.square.row][turn.square.col] = turn.player;
	}
	const winner = deriveWinner(gameBoard, players);

	function handleSelectPlayer(rowIndex, colIndex) {
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

	function reMatch() {
		setGameLogs([]);
	}

	function handlePlayerChange(symbol, playerName) {
		setPlayers((prevPlayers) => {
			return { ...prevPlayers, [symbol]: playerName };
		});
	}
	return (
		<main>
			<div id="game-container">
				{winner || hasDraw ? (
					<GameOver handleReMatch={reMatch} winningPlayer={winner} />
				) : null}
				<ol id="players" className="highlight-player">
					<Player
						name={players.X}
						symbol="X"
						isActivePlayer={"X" == currPlayer}
						hangleChange={handlePlayerChange}
					/>
					<Player
						name={players.O}
						symbol="O"
						isActivePlayer={"O" == currPlayer}
						hangleChange={handlePlayerChange}
					/>
				</ol>
				{winner ? <p>{winner} is the Winner</p> : null}
				<GameBoard onSelect={handleSelectPlayer} board={gameBoard} />
			</div>
			<Log logs={gameLogs} />
		</main>
	);
}

export default App;
