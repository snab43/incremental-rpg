export interface SettingsData {
	selectedTab: string,
	militaryTime: boolean,
	crtFilter: boolean
}

export class Settings {
	selectedTab: string = "actions";
	militaryTime: boolean = false;
	crtFilter: boolean = false;

	constructor() {
		if (localStorage.getItem('settings')) {
			this.load();
		} else {
			console.log("settings created.");
		}
	}

	getData(): SettingsData {
		return {
			selectedTab: this.selectedTab,
			militaryTime: this.militaryTime,
			crtFilter: this.crtFilter
		}
	}

	save(): void {
		localStorage.setItem('settings', JSON.stringify(this.getData()));
		console.log("settings saved.");
	}

	load(): void {
		if (localStorage.getItem('settings')) {
			let settings: SettingsData = JSON.parse(<string>localStorage.getItem('settings'));

			this.selectedTab = settings.selectedTab;
			this.militaryTime = settings.militaryTime;
			this.crtFilter = settings.crtFilter;

			console.log("settings loaded.");
		} else {
			console.log("No settings found.");
		}
	}

	delete(): void {
		localStorage.removeItem('settings');
		console.log("settings deleted.");
	}
}