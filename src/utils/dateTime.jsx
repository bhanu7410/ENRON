export function getCurrentDateTime() {
	return new Date().toISOString().slice(0, 10);
}
