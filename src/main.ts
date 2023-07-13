import { Game } from './game';
import { UI } from './ui';

import './assets/styles/main.scss';

document.addEventListener("DOMContentLoaded", function() {
	console.log("DEBUG: DOM loaded.");
	const game = new Game();

	// TODO: Move these into ui.ts somehow?
	document.getElementById('save-game-button')?.addEventListener('click', () => {game.saveGame()});
	document.getElementById('load-game-button')?.addEventListener('click', () => {game.loadGame()});

	UI.initialize();
	UI.reloadStats(game.health, game.maxHealth, game.level, game.exp);
	UI.reloadInventory(game.money);
});