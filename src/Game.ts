import { UI } from './views/ui';
import { PlayerData, Player } from './models/Player';
import { InventoryData, Inventory } from './models/Inventory';
import { LocationData, Location } from './models/Location';

interface GameData {
	player: PlayerData,
	inventory: InventoryData,
	location: LocationData
}

export class Game {
	public player: Player;
	public inventory: Inventory;
	public location: Location;

	constructor() {
		this.player = new Player();
		this.inventory = new Inventory();
		this.location = new Location();
	}

	getData(): GameData {
		return {
			player: this.player.getData(),
			inventory: this.inventory.getData(),
			location: this.location.getData()
		}
	}

	save(): void {
		this.player.save();
		this.inventory.save();
		this.location.save();
		UI.sendNotification("Game saved.", true);
	}

	load(): void {
		this.player.load();
		this.inventory.load();
		this.location.load();
		UI.sendNotification("Game loaded.", true);
	}

	delete(): void {
		this.player.delete();
		this.inventory.delete();
		this.location.delete();
		location.reload();
	}
}
