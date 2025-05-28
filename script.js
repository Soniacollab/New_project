const query = `
  query {
  triples(
    where: {
      predicate: { label: { _eq: "is member of" } }
      object: { label: { _eq: "The Hacking Project" } }
    }
  ) {
    subject {
      label
    }
    predicate {
      label
    }
    object {
      label
    }
  }
}

`;


// Envoi de la requête au serveur GraphQL via fetch
fetch("https://prod.base.intuition-api.com/v1/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // indiquer que le corps est en JSON
        },
        body: JSON.stringify({ query }) // transformer la requête en JSON
    })
    .then(response => response.json())
    .then(response => {
        
        // Récupérer le tableau des résultats "triples"
        const triples = response.data.triples;
        
        
        // Sélectionner l'élément ul où on affichera la liste des membres
        const list = document.getElementById("members-list");
        list.innerHTML = "";

         // Parcourir chaque triple retourné
        triples.forEach(triple => {
            const li = document.createElement("li");
            li.textContent = triple.subject.label;
            list.appendChild(li);
        });
    })
    .catch(error => {
        console.error("Erreur :", error);
        document.getElementById("members-list").textContent = "Erreur de chargement.";
    });
