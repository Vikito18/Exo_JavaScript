export const displayOpinionList = () => {
  const pieceElement = document.querySelectorAll(".fiches article button");
  for (let i = 0; i < pieceElement.length; i++) {
    pieceElement[i].addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      let opinion = window.localStorage.getItem(`avis-piece ${id}`);
      if (opinion == null) {
        const res = await fetch(`http://localhost:8081/pieces/${id}/avis`);
        opinion = await res.json();
        window.localStorage.setItem(
          `avis-piece ${id}`,
          JSON.stringify(opinion)
        );
      } else {
        opinion = JSON.parse(opinion);
        const opinionElement = e.target.parentElement;

        if (document.querySelector(`.opinion-list-${id}`)) {
          document.querySelector(`.opinion-list-${id}`).remove();
        } else {
          const newOpinion = document.createElement("p");
          newOpinion.classList.add(`opinion-list-${id}`);
          displayOpinion(newOpinion, opinionElement, opinion);
        }
      }
    });
  }
};

export const displayOpinion = (newOpinion, opinionElement, opinion) => {
  for (let i = 0; i < opinion.length; i++) {
    newOpinion.innerHTML += `<p>Nom : ${opinion[i].utilisateur} <br> Commentaire : ${opinion[i].commentaire}</p> `;
    opinionElement.appendChild(newOpinion);
  }
};

export const addOpinion = () => {
  const formOpinion = document.querySelector(".formulaire-avis");

  formOpinion.addEventListener("submit", (e) => {
    e.preventDefault();
    const opinion = {
      pieceId: parseInt(e.target.querySelector("[name=piece-id]").value),
      utilisateur: e.target.querySelector("[name=user]").value,
      commentaire: e.target.querySelector("[name=commentary]").value,
      nbEtoiles: e.target.querySelector("[name=nbStar]").value,
    };
    const payload = JSON.stringify(opinion);

    fetch("http://localhost:8081/avis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
    });
  });
};

export async function displayGraphOpinion() {}
// Calcul du nombre total de commentaires par quantité d'étoiles attribuées
const avis = await fetch("http://localhost:8081/avis").then((avis) =>
  avis.json()
);
const nb_commentaires = [0, 0, 0, 0, 0];
for (let commentaire of avis) {
  nb_commentaires[commentaire.nbEtoiles - 1]++;
}
