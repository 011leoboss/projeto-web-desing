const formulario = document.querySelector("#formularioContato");
const mensagemSucesso = document.querySelector("#mensagemSucesso");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    evento.stopPropagation();

    formulario.classList.add("was-validated");
    mensagemSucesso.classList.add("d-none");

    if (formulario.checkValidity()) {
      formulario.reset();
      formulario.classList.remove("was-validated");
      mensagemSucesso.classList.remove("d-none");
    }
  });

  formulario.addEventListener("reset", function () {
    mensagemSucesso.classList.add("d-none");
    formulario.classList.remove("was-validated");
  });
}
