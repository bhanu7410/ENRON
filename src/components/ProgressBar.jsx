import { useState, useEffect } from "react";

export default function ProgressBar({ TIMER }) {
	const [remainingTime, setRemainingTime] = useState(TIMER);

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prevTime) => prevTime - 10);
		}, 10);

		return () => {
			clearInterval(interval);
		};
	}, []);
	return <progress value={remainingTime} max={TIMER} />;
}
