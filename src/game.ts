import { UI } from './views/ui';
import { PlayerData, Player } from './models/Player';
import { InventoryData, Inventory } from './models/Inventory';

interface GameData {
	player: PlayerData,
	inventory: InventoryData
}

export class Game {
	public player: Player;
	public inventory: Inventory;

	constructor() {
		this.player = new Player();
		this.inventory = new Inventory();
	}

	getData(): GameData {
		return {
			player: this.player.getData(),
			inventory: this.inventory.getData()
		}
	}

	save(): void {
		this.player.save();
		this.inventory.save();
		UI.sendNotification("Game saved.", true);
	}

	load(): void {
		this.player.load();
		this.inventory.load();
		UI.sendNotification("Game loaded.", true);
	}

	delete(): void {
		this.player.delete();
		this.inventory.delete();
		location.reload();
	}
}
