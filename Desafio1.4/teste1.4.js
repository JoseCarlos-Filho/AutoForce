/* Array para manipilar as listas */
let array = [];
const elementos = [];

// Carregando e percorrendo os elementos <li> da <ul> com foreach()
let listas = document.querySelectorAll(".nav .nav-item").forEach((el) => {
  // carregando elementos <li> no novo array
  if (
    el.textContent.trim() == "Novos" ||
    el.textContent.trim() == "Seminovos"
  ) {
    elementos.push(el);
    const novaLista = document
      .querySelector("li.nav-item:nth-child(2)")
      .remove();
  }
  //  clonagem do elemento dropdown, setando atributos do elemento, criando elemento Veiculos
  // adicionando no dropdown veiculos os elementos salvos no array elementos[]
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

    // evento de onclick de abrir e fechar o dropdown
    novoDropDown.querySelector("a").onclick = () => {
      document.querySelector("#drop").classList.toggle("show");
    };
    // adicionando o novo dropdown criado na <ul>
    document.querySelector(".nav").append(novoDropDown);
  }
});

// Reordenando os elementos da <ul>
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

// adicionando o elementos na ul após ordenação
document.querySelector("ul.nav").innerHTML = "";
array.forEach((el) => {
  document.querySelector("ul.nav").append(el);
});
