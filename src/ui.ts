export namespace UI {
	export function initialize(): void {
		// Set up tabs
		const tabs = Array.from(document.querySelectorAll('.tab-button')) as HTMLElement[];
		const contents = Array.from(document.querySelectorAll('.tab-content')) as HTMLElement[];

		tabs.forEach(tab => {
			tab.addEventListener('click', () => {
				const targetId = tab.dataset.target;

				tabs.forEach(tab => tab.classList.remove('active'));
				contents.forEach(content => content.classList.remove('active'));

				tab.classList.add('active');
				const targetContent = document.getElementById(targetId as string) as HTMLElement;
				targetContent.classList.add('active');
			});
		});

		// Set up save and load buttons
		// TODO
	}

	export function reloadStats(health: number, maxHealth: number, level: number, exp: number): void {
		document.getElementById('stat-health')!.innerText = `${health}`;
		document.getElementById('stat-maxHealth')!.innerText = `${maxHealth}`;
		document.getElementById('stat-level')!.innerText = `${level}`;
		document.getElementById('stat-exp')!.innerText = `${exp}`;
	}
}