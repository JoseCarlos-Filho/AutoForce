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