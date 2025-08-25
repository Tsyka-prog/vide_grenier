    document.getElementById("test-form").addEventListener("submit-form", function(e) {
      e.preventDefault(); // Empêche le rechargement de la page

      // Récupère les valeurs du formulaire
      var objet = document.getElementById("objet").value;
      var prix = document.getElementById("prix").value;
      var proprio = document.getElementById("proprio").value;

      // Envoie les données à la Web App
      fetch("https://script.google.com/macros/s/AKfycbwX3PPyl5BqsjLLlk7jnrCdcZTUCD9s2GdLJ_bGJeIkqGkptahpZ7WrDm8ufEABhWBbYg/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ objet: objet, prix: prix, proprio: proprio }),
      })
        .then((response) => response.text())
        .then((data) => {
          alert(data); // Affiche la réponse de la Web App
          document.getElementById("test-form").reset(); // Réinitialise le formulaire
        })
        .catch((error) => {
          console.error("Erreur :", error);
          alert("Une erreur est survenue. Veuillez réessayer.");
        });
    });