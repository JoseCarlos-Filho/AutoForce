let array = [];
const elementos = [];
let listas = document.querySelectorAll(".nav .nav-item").forEach((el) => {
  if (
    el.textContent.trim() == "Novos" ||
    el.textContent.trim() == "Seminovos"
  ) {
    elementos.push(el);
    const novaLista = document
      .querySelector("li.nav-item:nth-child(2)")
      .remove();
  }

  if (el.querySelector("a").firstChild.textContent.trim() == "Pós-venda") {
    let novoDropDown = el.cloneNode(true);
    novoDropDown.setAttribute("id", "liVeiculo");
    novoDropDown.querySelector("a").firstChild.textContent = "Veiculos";
    novoDropDown.querySelector("div").setAttribute("id", "drop");
    novoDropDown.querySelector("div ul").innerHTML = "";
    elementos.forEach((el) => {
      el.classList.remove("nav-item");
      novoDropDown.querySelector("div ul").append(el);
    });

    novoDropDown.querySelector("a").onclick =
      () => {
        document.querySelector("#drop").classList.toggle("show");
      }

    document.querySelector(".nav").append(novoDropDown);
  }
});

let novalistas = document
  .querySelectorAll(".nav .nav-item")
  .forEach((el, indice) => {
    // Veículos | Consórcio | Pós-Venda | Ofertas Únicas | Vendas Diretas | Contato
    if (indice == 0) array[0] = el;

    if (indice == 6) array[1] = el;

    if (indice == 4) array[2] = el;

    if (indice == 2) array[3] = el;

    if (indice == 1) array[4] = el;

    if (indice == 3) array[5] = el;

    if (indice == 5) array[6] = el;
  });

document.querySelector("ul.nav").innerHTML = "";
array.forEach((el) => {
  document.querySelector("ul.nav").append(el);
});
