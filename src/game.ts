export class Game {
    health: number = 10;
	maxHealth: number = 10;
	level: number = 1;
	exp: number = 0;

    constructor() {
        if (localStorage.getItem('gameData')) {
			this.loadGame();
		} else {
			console.log("New game started.");
		}
    }

	getData(): object {
		return {
			health: this.health,
			maxHealth: this.maxHealth,
			level: this.level,
			exp: this.exp
		}
	} 

    saveGame(): void {
        localStorage.setItem('gameData', JSON.stringify(this.getData()));
    }

    loadGame(): void {
        if (localStorage.getItem('gameData')) {
			let save: any = JSON.parse(<string>localStorage.getItem('gameData'));

			this.health = save.health;
			this.maxHealth = save.maxHealth;
			this.level = save.level;
			this.exp = save.exp;
		} else {
            console.log("No saved game data found.");
        }
    }
}