import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
	return (
		<>
			<Player />
			<div id="challenges">
				<TimerChallenge title="Very Easy" targetTime={15} />
				<TimerChallenge title="Easy" targetTime={10} />
				<TimerChallenge title="Medium" targetTime={5} />
				<TimerChallenge title="Hard" targetTime={1} />
			</div>
		</>
	);
}

export default App;
