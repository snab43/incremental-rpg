export enum ACTION_TYPE {
	Effort = "Effort",
	Buy = "Buy",
	Sell = "Sell",
	Go = "Go"
}

export interface ActionData {
	name: string,
	type: ACTION_TYPE,
	spCost: number,
	moneyCost: number,
	itemGained: string,
	amountGained: number,
	locationName: string
}

export class Action {
	name: string;
	type: ACTION_TYPE;
	spCost: number;
	moneyCost: number;
	itemGained: string;
	amountGained: number;
	locationName: string;

	constructor(
		name: string,
		type: ACTION_TYPE,
		spCost: number,
		moneyCost: number,
		itemGained: string,
		amountGained: number,
		locationName: string
	) {
		this.name = name;
		this.type = type;
		this.spCost = spCost;
		this.moneyCost = moneyCost;
		this.itemGained = itemGained;
		this.amountGained = amountGained;
		this.locationName = locationName;
	}
}