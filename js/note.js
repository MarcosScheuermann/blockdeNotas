// let nota = [];
// let notaLS = JSON.stringify(nota);
// localStorage.setItem("nota", notaLS);

//para guardar en LS

let nota = JSON.parse(localStorage.getItem("nota"));
if (!nota) {
  nota = [];
  localStorage.setItem("nota", JSON.stringify(nota));
}

nota.forEach((textonota) => {
  const nota = document.createElement("div");
  nota.innerText = textonota;
  nota.classList.add("note-style", "m-3");
  const notaContainer = document.querySelector(".tablero");
  notaContainer.appendChild(nota);
});

