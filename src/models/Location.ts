//import actionContent from '../content/actions.json';
//import locationContent from '../content/locations.json';

export enum LOCATION_TYPE {
	Town = "Town",
	Store = "Store",
	Nature = "Nature",
	Dungeon = "Dungeon"
}

export interface LocationData {
	name: string,
	type: LOCATION_TYPE,
	reqLevel: number,
	actionList: Array<string>
}

export class Location {
	name: string = "Town";
	type: LOCATION_TYPE = LOCATION_TYPE.Town;
	reqLevel: number = 0;
	actionList: Array<string> = [];

	constructor() {
		if (localStorage.getItem('locationData')) {
			this.load();
		} else {
			console.log("locationData created.");
		}
	}

	getData(): LocationData {
		return {
			name: this.name,
			type: this.type,
			reqLevel: this.reqLevel,
			actionList: this.actionList
		}
	}

	save(): void {
		localStorage.setItem('locationData', JSON.stringify(this.getData()));
		console.log("locationData saved.");
	}

	load(): void {
		if (localStorage.getItem('locationData')) {
			let locationData: LocationData = JSON.parse(<string>localStorage.getItem('locationData'));

			this.name = locationData.name;
			this.type = locationData.type;
			this.reqLevel = locationData.reqLevel;
			this.actionList = locationData.actionList;

			console.log("locationData loaded.");
		} else {
			console.log("No locationData found.");
		}
	}

	delete(): void {
		localStorage.removeItem('locationData');
		console.log("locationData deleted.");
	}
}