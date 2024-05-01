const slidesText = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

document.addEventListener("DOMContentLoaded", function () {
	const bannerImg = document.querySelector(".banner-img");
	const arrowLeft = document.querySelector(".arrow_left");
	const arrowRight = document.querySelector(".arrow_right");
	const dotsContainer = document.querySelector(".dots");
	const slides = [
		{ image: "./assets/images/slideshow/slide1.jpg" },
		{ image: "./assets/images/slideshow/slide2.jpg" },
		{ image: "./assets/images/slideshow/slide3.jpg" },
		{ image: "./assets/images/slideshow/slide4.png" }
	];

	arrowLeft.addEventListener("click", function () {
		console.log("La flèche gauche a été cliquée.");
	});

	arrowRight.addEventListener("click", function () {
		console.log("La flèche droite a été cliquée.");
	});

	const numberOfDots = slides.length; // Nombre de points de navigation à afficher
	let currentSlideIndex = 0;

	function showSlide(index) {
		if (index >= 0 && index < slidesText.length) { // Garantit que l'index se trouve dans la plage des indices des diapositives disponibles.
			bannerImg.src = slides[index].image; // Met à jour l'image de la diapo

			// Récupère l'élément contenant le texte de la diapo
			const slideTextContainer = document.querySelector("#banner p");

			if (slideTextContainer) {
				// Met à jour le texte de la diapo en incluant le contenu HTML
				slideTextContainer.innerHTML = slidesText[index].tagLine;
			}

			currentSlideIndex = index; // Met à jour l'index de la diapo courante
			updateDotStyles(); // Met à jour les styles des points de navigation
		}
	}

	function updateDotStyles() {
		const dots = dotsContainer.querySelectorAll(".dot");
		dots.forEach((dot, index) => {
			if (index === currentSlideIndex) {
				dot.classList.add("dot_selected");
			} else {
				dot.classList.remove("dot_selected");
			}
		});
	}

	function navigateToPreviousSlide() {
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
		showSlide(currentSlideIndex);
	}

	function navigateToNextSlide() {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;
		showSlide(currentSlideIndex);
	}


	// Création des nouveaux points de navigation
	for (let i = 0; i < numberOfDots; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dotsContainer.appendChild(dot);

		dot.addEventListener("click", () => {
			showSlide(i);
		});
	}

	if (arrowLeft) {
		arrowLeft.addEventListener("click", navigateToPreviousSlide);
	}

	if (arrowRight) {
		arrowRight.addEventListener("click", navigateToNextSlide);
	}

	// Afficher la première slide au chargement initial
	showSlide(currentSlideIndex);
});

