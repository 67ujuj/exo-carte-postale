// Récupération de la liste déroulante et de l'image sélectionnée
const select = document.querySelector("#image-select");
const selectedImage = document.querySelector("#selected-image");

// Ajout d'un événement "change" sur la liste déroulante
select.addEventListener("change", function () {
  // On change l'image sélectionnée en utilisant la valeur de l'option sélectionnée
  selectedImage.src = this.value;
});
// Récupération de la zone de texte d'entrée et de sortie
const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");

// Ajout d'un événement "input" sur la zone de texte d'entrée
inputText.addEventListener("input", function () {
  // On met à jour le texte affiché en temps réel
  outputText.value = this.value;
});
//
