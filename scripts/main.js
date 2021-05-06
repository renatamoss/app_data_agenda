//data-atributes: separador de responsabilidades
//evento.preventDefault: previne comportamento do navegador (refresh).
//target: para encontrar o alvo do evento.
//toggle: método que devolve boleano verdadeiro ou falso.

import criarBotaoConclui from './componentes/criarBotaoConclui.js'
import criarBotaoDeleta from './componentes/criarBotaoDeleta.js'

const cursorTarefa = () => {
    document.querySelector('[data-form-input]').focus();
}

window.addEventListener('load', cursorTarefa);
window.addEventListener('click', cursorTarefa);

const criarNovaTarefa = document.querySelector('[data-form-button]');

const incluirTarefa = (evento) => {
    evento.preventDefault();

    const input = document.querySelector('[data-form-input]');
    const value = input.value;

    if (value == 0) {
        window.alert('Opa! Faltou digitar o compromisso ;)');
        return;
    }

    const lista = document.querySelector('[data-list]'); //ul
    const texto = `<p class="list__text">${value}</p>`;

    const tarefa = document.createElement('li');
    tarefa.classList.add('list__item');
    tarefa.innerHTML = texto;

    tarefa.appendChild(criarBotaoDeleta());
    tarefa.appendChild(criarBotaoConclui());
    lista.appendChild(tarefa);
    input.value = ' ';
}

criarNovaTarefa.addEventListener('click', incluirTarefa);








