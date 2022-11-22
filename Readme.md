# Desafio AutoForce

[DEALLER](/assets/img/Dealer.jpg)

- [Desafio AutoForce](#desafio-autoforce)
  - [Parte 1](#parte-1)
    - [Desafio 1 de 4](#desafio-1-de-4)
    - [Desafio 2 de 4](#desafio-2-de-4)
    - [Desafio 3 de 4](#desafio-3-de-4)
    - [Desafio 4 de 4](#desafio-4-de-4)
  - [Parte 2](#parte-2)
    - [Deploy da Aplicação](#deploy-da-aplicação)

## Parte 1

### Desafio 1 de 4

Manipule o DOM do site <a href="https://testes.autoforce.com.br/autoforce-ford">DEALER</a> usando javascript para obter os resultados enumerados a seguir. O resultado de cada questão deve ser o código javascript usado para atingir o objetivo pedido no enunciado. Considere que o avaliador vai colar seu código no console e verificar o resultado na interface.

1. Modifique os itens de menu "Novos" e "Seminovos" e reordene os itens do menu
   Crie um novo item dropdown para o menu e o intitule "Veículos".
   Os itens "Novos" e "Seminovos" devem ser realocados para esse novo dropdown. O item "Veículos" deve ser o primeiro do menu. Após este primeiro passo, reordene a disposição do menu para a seguinte ordem:

Veículos | Consórcio | Pós-Venda | Ofertas Únicas | Vendas Diretas | Contato

Solução:

```JavaScript
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

```

### Desafio 2 de 4

2. Modifique o formulário de "Estou Interessado" disponível em <a href="https://testes.autoforce.com.br/autoforce-ford/novos/territory-2022">AutoForce-ford</a>

Adicione os seguintes campos:

- 1 Select com as opções: SUV, Senda, Hatch e Pickup;
- 1 Textarea com placeholder "Mensagem".

Solução:

```JavaScript

// carrega o primeiro elemento fieldset
let formCard = document.querySelector("fieldset:nth-child(1)")

// Cria o elemento textarea com className e placeholder
const textarea = document.createElement('textarea');
textarea.className = "form-group"
textarea.placeholder = 'Mensagem'
// Estilos do elemento textarea
textarea.style.borderRadius="5px";
textarea.style.width="100%";
textarea.style.padding="0.5rem 0.8rem";


// Cria o elemento select  e className
const select = document.createElement('select')
select.className = "form-control";

// Adicionando elemento options comv values ao elemento select
select.innerHTML = `<option value='SUV'>SUV</option>
                    <option value='Sedan'>Sedan</option>
                    <option value='Hatch'>Hatch</option>
                    <option value='Pickup'>Pickup</option>`

// adiciona o elemento select na div ao chamar a função
// envolveElementoEmDiv retorando a div que é adicionado
// ao elemento fieldset representado pela variável formCard
formCard.appendChild(envolveElementoEmDiv(select));
formCard.appendChild(envolveElementoEmDiv(textarea));

// Função que cria div, className e adiciona div com elemento.
function envolveElementoEmDiv(elemento) {
  const div = document.createElement("div")
  div.className = "form-group";
  div.append(elemento)
  return div;
}
```

### Desafio 3 de 4

3. Remova o formulário de conversão após clique no whatsapp <a href="https://testes.autoforce.com.br/autoforce-ford/novos/territory-2022">AutoForce-ford</a>

Ao clicar em qualquer link do dropdown de
Whatsapp, um formulário modal é aberto.

Remova a aparição deste formulário de forma que o usuário seja direcionado para janela do Whatsapp em uma nova aba.

solução:

```JavaScript

// Seleciona o elemento button com a classe .button--whatsapp
let btnWhats = document.querySelector(".button--whatsapp");
// Seta o evento de onclick do button--whatsapp redicecionando para o linkApi
btnWhats.setAttribute(
  "onclick",
  `window.open("https://api.whatsapp.com/send?phone=5583988971010","_blank")`
);
```

### Desafio 4 de 4

4. Crie um botão flutuante de WhatsApp
   <a href="https://testes.autoforce.com.br/autoforce-ford">DEALER</a>
   Crie um popup de WhatsApp fixado no canto inferior esquerdo da tela, ao clicar nesse botão três números devem aparecer:
   (Seminovos: +55 (11) 99999-9999, Serviços +55 (11) 11111-11111 e Central de Vendas: +55 (11) 88888-8888), um novo clique em qualquer um desses números deve encaminhar o usuário diretamente para o WhatsApp.

solução:

```JavaScript

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
```

## Parte 2

### Deploy da Aplicação

link deploy DEALER: <a href="https://desafio-autoforce-jose-carlos.netlify.app/">Dealer Page</a>

Codifique a seguinte interface: <a href="https://www.figma.com/file/mEuuuja11kYw9M9swY69wl/Desafio-Genius?node-id=34%3A42">figma</a>

- Não há necessidade de criar um dropdown nos botões do header. Crie um hyperlink para o telefone e um para o WhatsApp
- Link do vídeo para a área "Conheça o BMW":
  <a href="https://www.youtube.com/watch?v=cFyrTEYyq64">BMW</a>
