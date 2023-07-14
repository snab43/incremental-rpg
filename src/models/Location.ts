import { Action } from './Action';

enum LOCATION_TYPE {
	Town = "Town",
	Store = "Store",
	Nature = "Nature",
	Dungeon = "Dungeon"
}

export class Location {
	name: string;
	type: LOCATION_TYPE;
	actionList: Array<Action>;

	constructor(name: string, type: LOCATION_TYPE, actionList: Array<Action>) {
		this.name = name;
		this.type = type;
		this.actionList = actionList;
	}
}