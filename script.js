document.addEventListener("DOMContentLoaded", () => {
    const nomsList = document.querySelectorAll(".noms-list li");
    let currentIndex = 0;

    function showNextName() {
        // Cache tous les noms
        nomsList.forEach((li) => {
            li.classList.remove("show"); // Cache le nom
        });

        // Affiche le nom suivant
        nomsList[currentIndex].classList.add("show");

        // Passe au nom suivant (looping)
        currentIndex = (currentIndex + 1) % nomsList.length;
    }

    // Affiche un nom toutes les 2 secondes
    setInterval(showNextName, 2000);

    // Affiche le premier nom dès que la page est chargée
    showNextName();
});
