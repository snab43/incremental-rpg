import { UI } from './ui';

export class Game {
    health: number = 10;
	maxHealth: number = 10;
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
}
