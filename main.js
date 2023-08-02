document
  .getElementById("meuFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let campoAValue = parseFloat(document.getElementById("campoA").value);
    let campoBValue = parseFloat(document.getElementById("campoB").value);
    if (campoBValue > campoAValue) {
      alert("Formulário válido! Campo B é maior que Campo A.");
    } else {
      alert(
        "Formulário inválido! O valor do Campo B deve ser maior que o valor do Campo A."
      );
    }
  });
