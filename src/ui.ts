import { Utils } from './utils';

export namespace UI {
	export function initialize(): void {
		// Set up controls
		const tabs = Array.from(document.querySelectorAll('.tab-button')) as HTMLElement[];
		const contents = Array.from(document.querySelectorAll('.tab-content')) as HTMLElement[];

		tabs.forEach(tab => {
			tab.addEventListener('click', () => {
				const targetId = tab.dataset.target;

				tabs.forEach(tab => tab.classList.remove('active'));
				contents.forEach(content => content.classList.remove('active'));

				tab.classList.add('active');
				const targetContent = document.getElementById(targetId as string) as HTMLElement;
				targetContent.classList.add('active');
			});
		});
	}

	export function reloadStats(health: number, maxHealth: number, stamina: number, maxStamina: number, level: number, exp: number): void {
		document.getElementById('stat-health')!.innerText = `${health}`;
		document.getElementById('stat-maxHealth')!.innerText = `${maxHealth}`;
		document.getElementById('stat-stamina')!.innerText = `${stamina}`;
		document.getElementById('stat-maxStamina')!.innerText = `${maxStamina}`;
		document.getElementById('stat-level')!.innerText = `${level}`;
		document.getElementById('stat-exp')!.innerText = `${exp}`;
	}

	export function reloadInventory(money: number): void {
		document.getElementById('stat-money')!.innerText = `${money.toFixed(2)}`;
	}

	export function sendNotification(text: string, log: boolean): void {
		let ul = document.getElementById('notifications');
		let li = document.createElement('li');

		li.appendChild(document.createTextNode(text));
		ul?.prepend(li);

		li.addEventListener('click', () => {
			li.remove();
		});

		setTimeout(() => {
			li.remove();
		}, 3000);

		if (log) writeToLog(text);
	}

	export function writeToLog(logEntry: string): void {
		let ul = document.getElementById('log-list');
		let li = document.createElement('li');

		li.appendChild(document.createTextNode(`${Utils.getTime()} - ${logEntry}`));
		ul?.prepend(li);
	}
}