import { Game } from './Game';
import { UI } from './views/ui';

import './styles/main.scss';

document.addEventListener("DOMContentLoaded", () => {
	console.log("DEBUG: DOM loaded.");
	const game = new Game();

	console.log("Initializing UI.");
	UI.initialize(game);
});