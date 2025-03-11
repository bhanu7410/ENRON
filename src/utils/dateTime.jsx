export function getCurrentDateTime() {
	return new Date().toLocaleString("en-US", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
}

export const getTimeDifference = (date1, date2, unit = "seconds") => {
	// Convert dates to timestamps (milliseconds)
	const diffInMs = new Date(date1).getTime() - new Date(date2).getTime();

	// Convert milliseconds to desired unit
	const conversions = {
		seconds: diffInMs / 1000,
		minutes: diffInMs / (1000 * 60),
		hours: diffInMs / (1000 * 60 * 60),
		days: diffInMs / (1000 * 60 * 60 * 24),
		months: diffInMs / (1000 * 60 * 60 * 24 * 30.44), // Approximate
		years: diffInMs / (1000 * 60 * 60 * 24 * 365.25), // Accounts for leap years
	};

	// Get the absolute value and round it
	const value = Math.abs(conversions[unit]);

	// Singular or plural unit formatting
	const unitLabel = value === 1 ? unit.slice(0, -1) : unit; // Remove 's' for singular

	return `${Math.floor(value)} ${unitLabel}`;
};
