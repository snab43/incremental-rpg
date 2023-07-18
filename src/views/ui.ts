import { Game } from '../Game';
import { PlayerData } from '../models/Player';
import { InventoryData } from '../models/Inventory';
import { Utils } from '../utils';
import { Location } from '../models/Location';

export namespace UI {
	export function initialize(game: Game): void {
		// Set up controls tabs
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

		// Set up save, load, delete buttons
		document.getElementById('save-game-button')?.addEventListener('click', () => {
			game.save();
		});
		document.getElementById('load-game-button')?.addEventListener('click', () => {
			game.load();
		});
		document.getElementById('delete-game-button')?.addEventListener('click', () => {
			game.delete();
		});

		// Run UI update
		reloadStats(game.getData().player);
		//reloadLocation(game.getData().player);
		reloadInventory(game.getData().inventory);
	}

	export function reloadStats(player: PlayerData): void {
		document.getElementById('stat-health')!.innerText = `${player.health}`;
		document.getElementById('stat-maxHealth')!.innerText = `${player.maxHealth}`;
		document.getElementById('stat-stamina')!.innerText = `${player.stamina}`;
		document.getElementById('stat-maxStamina')!.innerText = `${player.maxStamina}`;
		document.getElementById('stat-level')!.innerText = `${player.level}`;
		document.getElementById('stat-exp')!.innerText = `${player.exp}`;
	}

	export function reloadLocation(location: Location): void {
		document.getElementById('location')!.innerText = location.name;
	}

	export function reloadActions(): void {
		//let doActions = document.getElementById('do-actions');
		//let goActions = document.getElementById('go-actions');
	}

	export function reloadInventory(inventory: InventoryData): void {
		document.getElementById('wallet-money')!.innerText = `${inventory.money.toFixed(2)}`;
		document.getElementById('inventory-wood')!.innerText = `${inventory.wood}`;
		document.getElementById('inventory-stone')!.innerText = `${inventory.stone}`;
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

		li.appendChild(document.createTextNode(`(${Utils.getTime()}) ${logEntry}`));
		ul?.prepend(li);
	}
}