import { criarTarefa } from './componentes/criarTarefa.js'


//cursor no imput:
const cursorTarefa = () => {
    document.querySelector('[data-form-input]').focus();
}

window.addEventListener('load', cursorTarefa);
window.addEventListener('click', cursorTarefa);


//módulo incluirTarefa:
const criarNovaTarefa = document.querySelector('[data-form-button]');

criarNovaTarefa.addEventListener('click', criarTarefa)

