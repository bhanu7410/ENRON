export default function tailwindRandomColorGen() {
	const bgColors = [
		"bg-gray-300",
		"bg-amber-300",
		"bg-rose-300",
		"bg-teal-300",
		"bg-indigo-300",
		"bg-emerald-300",
		"bg-sky-300",
		"bg-orange-300",
		"bg-lime-300",
		"bg-cyan-300",
		"bg-yellow-300",
		"bg-stone-300",
	];
	// select one random color from the array
	return bgColors[Math.floor(Math.random() * bgColors.length)];
}
