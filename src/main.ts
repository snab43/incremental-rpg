import { Game } from './game';
import { UI } from './ui';

import './styles/main.scss';

document.addEventListener("DOMContentLoaded", () => {
	console.log("DEBUG: DOM loaded.");
	const game = new Game();

	console.log("Initializing UI.");
	UI.initialize();
	UI.reloadStats(game.health, game.maxHealth, game.level, game.exp);
	UI.reloadInventory(game.money);
});