import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
	let timer = useRef();
	let dialogRef = useRef();

	const [timerStatus, setTimerStatus] = useState(targetTime * 1000);
	const timerIsActive = timerStatus > 0 && timerStatus < targetTime * 1000;

	function handleChallengeStart() {
		if (!timerIsActive) {
			timer.current = setInterval(() => {
				setTimerStatus((prev) => {
					if (prev <= 0) {
						clearInterval(timer.current);
						dialogRef.current.showModal();
						return 0;
					}
					return prev - 10;
				});
			}, 10);
		} else {
			if (timerStatus) {
				dialogRef.current.showModal();
			}
			clearInterval(timer.current);
		}
	}
	return (
		<>
			<ResultModal
				ref={dialogRef}
				result={timerStatus === 0 ? false : true}
				targetTime={targetTime}
				remainingTime={(timerStatus / 1000).toFixed(2)}
				resetTimer={() => {
					setTimerStatus(targetTime * 1000);
				}}
			/>
			<section className="challenge">
				<h2> {title} </h2>
				<p className="challenge-time">
					{targetTime} second{targetTime > 1 ? "s" : ""}
				</p>
				<p>
					<button onClick={handleChallengeStart}>
						{!timerIsActive ? "Start Challenge" : "Stop Timer"}
					</button>
				</p>
				<p className={timerIsActive ? "active" : undefined}>
					{timerIsActive ? "Time is running" : "Timer Inactive"}
				</p>
			</section>
		</>
	);
}
