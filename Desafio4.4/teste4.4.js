// Seleciona o elemento do botão WhatsApp
const btnWhats = document.querySelector("#popup-whats");

// chamada da função para a construção do popup
newPopUp();

// remove o evento de onclick do botão WhatsApp
btnWhats.removeAttribute("onclick");

// carrega e verifica o estado do botão com o toggle() "Aberto ou Fechado"
// no novo elemento dropdown. Configura a visibilidade do no componente de acordo com o toggle()
btnWhats.addEventListener("click", () => {
  document.querySelector("#newPopUp").classList.toggle("show");
  if (document.querySelector("#newPopUp").classList.contains("show")) {
    document.querySelector("#newPopUp").style.visibility = "visible";
  } else {
    document.querySelector("#newPopUp").style.visibility = "hidden";
  }
});

// função que cria o elemento dropdown
function newPopUp() {
  let div = document.createElement("div");
  div.setAttribute("id", "newPopUp");
  div.className =
    "header__card-phones-items card-collapse header__card-whatsapp dropdown-menu dropdown-menu-right";
  div.innerHTML = `<span><a href="https://api.whatsapp.com/send?phone=5511999999999" target="_blank">Seminovos: +55 (11) 99999-9999</a></span>
                     <span><a href="https://api.whatsapp.com/send?phone=55111111111111" target="_blank">Serviços +55 (11) 11111-11111</a></span>
                     <span><a href="https://api.whatsapp.com/send?phone=5511888888888" target="_blank">Central de Vendas: +55 (11) 88888-8888)</a></span>`;

  div.style.visibility = "hidden";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.border = "3px solid blue";
  div.style.position = "relative";
  div.style.top = "-5rem";
  btnWhats.appendChild(div);
}
