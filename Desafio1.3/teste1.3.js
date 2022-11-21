// Seleciona o elemento button com a classe .button--whatsapp
let btnWhats = document.querySelector(".button--whatsapp");
// Seta o evento de onclick do button--whatsapp redicecionando para o linkApi
btnWhats.setAttribute(
  "onclick",
  `window.open("https://api.whatsapp.com/send?phone=5583988971010","_blank")`
);
