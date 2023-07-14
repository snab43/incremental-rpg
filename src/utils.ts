export namespace Utils {
	export function getTime(): string {
		let now = new Date();
		let timeString = now.toLocaleTimeString('en-US', { hour12: true });

		return timeString;
	}
}