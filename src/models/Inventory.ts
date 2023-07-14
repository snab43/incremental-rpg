export interface InventoryData {
	money: number,
	wood: number,
	stone: number
}

export class Inventory {
	money: number = 0;
	wood: number = 0;
	stone: number = 0;

	constructor() {
		if (localStorage.getItem('inventoryData')) {
			this.load();
		} else {
			console.log("inventoryData created.");
		}
	}

	getData(): InventoryData {
		return {
			money: this.money,
			wood: this.wood,
			stone: this.stone
		}
	} 

	save(): void {
		localStorage.setItem('inventoryData', JSON.stringify(this.getData()));
		console.log("inventoryData saved.");
	}

	load(): void {
		if (localStorage.getItem('inventoryData')) {
			let inventoryData: any = JSON.parse(<string>localStorage.getItem('inventoryData'));

			this.money = inventoryData.health;
			this.wood = inventoryData.maxHealth;
			this.stone = inventoryData.stamina;

			console.log("inventoryData loaded.");
		} else {
			console.log("No inventoryData found.");
		}
	}

	delete(): void {
		localStorage.removeItem('inventoryData');
	}
}