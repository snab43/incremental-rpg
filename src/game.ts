import { UI } from './ui';

export class Game {
	health: number = 10;
	maxHealth: number = 10;
	stamina: number = 5;
	maxStamina: number = 5;
	level: number = 1;
	exp: number = 0;
	money: number = 0;

	constructor() {
		document.getElementById('save-game-button')?.addEventListener('click', () => {
			this.saveGame();
		});
		document.getElementById('load-game-button')?.addEventListener('click', () => {
			this.loadGame();
		});
		document.getElementById('delete-game-button')?.addEventListener('click', () => {
			this.deleteGame();
		});

		if (localStorage.getItem('gameData')) {
			this.loadGame();
		} else {
			UI.sendNotification("New game started.", true);
			console.log("New game started.");
		}
	}

	getData(): object {
		return {
			health: this.health,
			maxHealth: this.maxHealth,
			stamina: this.stamina,
			maxStamina: this.maxStamina,
			level: this.level,
			exp: this.exp,
			money: this.money
		}
	} 

	saveGame(): void {
		localStorage.setItem('gameData', JSON.stringify(this.getData()));
		UI.sendNotification("Game saved.", true);
		console.log("Game saved.");
	}

	loadGame(): void {
		if (localStorage.getItem('gameData')) {
			let save: any = JSON.parse(<string>localStorage.getItem('gameData'));

			this.health = save.health;
			this.maxHealth = save.maxHealth;
			this.stamina = save.stamina;
			this.maxStamina = save.maxStamina;
			this.level = save.level;
			this.exp = save.exp;
			this.money = save.money;

			UI.sendNotification("Game loaded.", true);
			console.log("Game loaded.");
		} else {
			UI.sendNotification("No save game data found.", true);
			console.log("No saved game data found.");
		}
	}

	deleteGame(): void {
		localStorage.removeItem('gameData');
		location.reload();
	}
}
