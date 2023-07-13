import { Game } from './game';
import { UI } from './ui';

import './assets/styles/main.scss';

document.addEventListener("DOMContentLoaded", function() {
	console.log("DEBUG: DOM loaded.");
	const game = new Game();

	UI.initialize();
	UI.reloadStats(game.health, game.maxHealth, game.level, game.exp);
});