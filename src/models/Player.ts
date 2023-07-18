export interface PlayerData {
	health: number,
	maxHealth: number,
	stamina: number,
	maxStamina: number,
	level: number,
	exp: number
}

export class Player {
	health: number = 10;
	maxHealth: number = 10;
	stamina: number = 5;
	maxStamina: number = 5;
	level: number = 1;
	exp: number = 0;

	constructor() {
		if (localStorage.getItem('playerData')) {
			this.load();
		} else {
			console.log("playerData created.");
		}
	}

	getData(): PlayerData {
		return {
			health: this.health,
			maxHealth: this.maxHealth,
			stamina: this.stamina,
			maxStamina: this.maxStamina,
			level: this.level,
			exp: this.exp
		}
	} 

	save(): void {
		localStorage.setItem('playerData', JSON.stringify(this.getData()));
		console.log("playerData saved.");
	}

	load(): void {
		if (localStorage.getItem('playerData')) {
			let playerData: PlayerData = JSON.parse(<string>localStorage.getItem('playerData'));

			this.health = playerData.health;
			this.maxHealth = playerData.maxHealth;
			this.stamina = playerData.stamina;
			this.maxStamina = playerData.maxStamina;
			this.level = playerData.level;
			this.exp = playerData.exp;

			console.log("playerData loaded.");
		} else {
			console.log("No playerData found.");
		}
	}

	delete(): void {
		localStorage.removeItem('playerData');
		console.log("playerData deleted.");
	}
}