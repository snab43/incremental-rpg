enum ACTION_TYPE {
	"Effort",
	"Buy",
	"Sell",
	"Go"
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