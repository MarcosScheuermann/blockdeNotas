// let nota = [];
// let notaLS = JSON.stringify(nota);
// localStorage.setItem("nota", notaLS);

//para guardar en LS

let nota = JSON.parse(localStorage.getItem("nota"));
if (!nota) {
  nota = [];
  localStorage.setItem("nota", JSON.stringify(nota));
}

nota.forEach((textnota) => {
  const nota = document.createElement("div");
  nota.innerText = textnota;
  nota.classList.add("note-style", "m-3");
  const notaContainer = document.querySelector(".tablero");
  notaContainer.appendChild(nota);
});

//datos de un lado mostrar en otro al mismo tiempo

const notaContenido = document.querySelector("#note-text");
const notaEjemplo = document.querySelector("#nota-ejemplo");

notaContenido.addEventListener("keyup", (event) => {
  if (notaContenido.value === "") {
    notaEjemplo.innerText = "Escriba su Nota";
  } else {
    notaEjemplo.innerText = notaContenido.value;
  }
});

//guardamos las nuevas notas en LS

let nuevaNota = (event) => {
    console.log(event);
  event.preventDefault(); // evitamos que se reinicie por defecto
  const notaLS = JSON.parse(localStorage.getItem("nota")); //traemos los datos guardados en LS
  notaLS.push(notaContenido.value); //agregamos a la info de LS
  localStorage.setItem("nota", JSON.stringify(notaLS)); //volvemos a subir la info a LS

  //Mostramos la nueva nota en el DOM

  const note = document.createElement("div");
  note.innerText = notaContenido.value;
  note.classList.add("note-style", "m-3");
  const notaContainer = document.querySelector(".tablero");
  notaContainer.appendChild(note);

  document.querySelector("form").reset();
  notaEjemplo.innerText = "Escriba una Nota nueva";
};
