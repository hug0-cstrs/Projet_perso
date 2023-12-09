// Définition de la variable player qui va définir quel joueur joue en premier
let player = "X";

// Récupération de l'élément HTML où l'on affiche l'information du joueur actuel
const info = document.querySelector(".resultat");
// Affichage du joueur qui doit jouer en premier
info.textContent = `Au tour de ${player}`;

// Récupération de toutes les cases de la grille
const cells = document.querySelectorAll(".case");

// Ajout d'un event listener sur chaque case pour détecter les clics
cells.forEach((cell) => cell.addEventListener("click", handleClick));

// Initialisation du tableau de jeu
const game = ["", "", "", "", "", "", "", "", ""];
// Verrou qui empêche les clics sur les cases si une partie est terminée
let lock = false;

// Fonction appelée à chaque clic sur une case
function handleClick(e) {
	// Récupération de la case cliquée
	const currentClick = e.target;
	// Récupération de l'indice de la case cliquée
	const caseIndex = currentClick.getAttribute("data-index");

	// Vérification que la case n'a pas déjà été jouée et que la partie n'est pas terminée
	if (game[caseIndex] !== "" || lock) {
		return;
	}

	// Enregistrement du coup joué dans le tableau de jeu
	game[caseIndex] = player;
	// Affichage du symbole correspondant au joueur dans la case cliquée
	currentClick.textContent = player;

	// Vérification si la partie est terminée ou non
	verification();
}

// Tableau contenant toutes les combinaisons gagnantes possibles
const combinaisonsGagnantes = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

// Fonction qui vérifie si la partie est terminée
function verification() {
	// Parcours de toutes les combinaisons gagnantes possibles
	for (let i = 0; i < combinaisonsGagnantes.length; i++) {
		// Récupération de la combinaison en cours de vérification
		const combinationsCheck = combinaisonsGagnantes[i];

		// Récupération des symboles joués dans chaque case de la combinaison
		let a = game[combinationsCheck[0]];
		let b = game[combinationsCheck[1]];
		let c = game[combinationsCheck[2]];

		// Si une case est vide, on passe à la combinaison suivante
		if (a === "" || b === "" || c === "") {
			continue;
		}
		// Si les trois symboles sont identiques, la partie est terminée et le joueur correspondant a gagné
		else if (a === b && b === c) {
			info.textContent = `Le joueur ${player} a gagné ! Appuyez sur Entrée ou F5 pour recommencer.`;
			// Verrouillage des clics sur les cases pour empêcher de jouer une fois la partie terminée
			lock = true;
			return;
		}
	}


	// match nul, toutes les cases sont prise, sans gagnant.
	if (!game.includes("")) {
		info.textContent = `Match Nul ! Appuyez sur Entrée ou F5 pour recommencer.`;
		lock = true;
		return;
	}

	// Appelle la fonction pour initialiser le jeu
	switchPlayer();
}

function switchPlayer() {
	player = player === "X" ? "O" : "X";
	info.textContent = `Au tour de ${player}`;
}

// Ajoute un écouteur d'événements pour détecter l'appui sur la touche Entrée
document.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		// Redémarre le jeu
		resetGame();
	}
});

// Fonction pour réinitialiser le jeu
function resetGame() {
	// Réinitialise toutes les cases à leur état initial
	cells.forEach((cell) => {
		cell.textContent = "";
	});

	// Réinitialise le tableau de jeu
	game.fill("");

	// Réinitialise le verrouillage et remet le tour du joueur X
	lock = false;
	player = "X";
	info.textContent = `Au tour de ${player}`;
}

// Appelle la fonction pour initialiser le jeu
switchPlayer();
