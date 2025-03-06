export default function ResultModal({
	ref,
	result,
	targetTime,
	remainingTime,
	resetTimer,
}) {
	const score = Math.round(((1 - remainingTime) / targetTime) * 100);
	return (
		<dialog ref={ref} className="result-modal">
			<h2>You {result ? "Won" : "Lost"}</h2>
			{result ? <h2>Your score is {score}%</h2> : null}
			<p>
				The target time was{" "}
				<strong>
					{targetTime} second{targetTime > 1 ? "s" : null}
				</strong>
				<br />
				You stopped the Timer with {remainingTime} seconds left
			</p>
			<form method="dialog" onSubmit={resetTimer}>
				<button>Close</button>
			</form>
		</dialog>
	);
}
