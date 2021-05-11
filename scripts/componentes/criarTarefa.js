
import criarBotaoConclui from './criarBotaoConclui.js'
import criarBotaoDeleta from './criarBotaoDeleta.js'


//carrega dados armazenados ou vazio:
let tarefasArray = JSON.parse(localStorage.getItem('tarefasArmazenadas')) || []


//criando Tarefa no DOM:
export const criarTarefa = (evento) => {
    evento.preventDefault();

    //1-entrada do valor:
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    if (valor == 0) {
        window.alert('Opa! Faltou digitar o compromisso.');
        return;
    }

    //2-entrada da data:
    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY h:mm a');

    if (calendario.value == 0) {
        window.alert('Faltou digitar a data e hora do compromisso.');
        return;
    }

    //3 - entrada do id:
    const id = uuidv4();
    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    
    //4-incluindo no DOM e Banco de dados:
    incluirTarefaNoDOM(valor, dataFormatada, id);
    salvarTarefaNoLocalStorage(valor, dataFormatada, id);

    input.value = ' ';
    calendario.value = ' ';

}


//Incluir a tarefa no DOM:
export const incluirTarefaNoDOM = (valor, dataFormatada, id) => {

    const lista = document.querySelector('[data-list]'); //ul
    const texto = `<p class="list__text">${dataFormatada} </br> ${valor}</p>`;

    const tarefa = document.createElement('li');
    tarefa.dataset.id = id;
    tarefa.classList.add('list__item');
    tarefa.innerHTML = texto;

    tarefa.appendChild(criarBotaoDeleta());
    tarefa.appendChild(criarBotaoConclui());
    lista.appendChild(tarefa);
}


//Salvar tarefa no localStorage:
export const salvarTarefaNoLocalStorage = (valor, dataFormatada, id) => {

    const dados = {
        valor,
        dataFormatada,
        id
    }

    const tarefasAtualizadas = [...tarefasArray, dados]
    localStorage.setItem('tarefasArmazenadas', JSON.stringify(tarefasAtualizadas)) || []
    tarefasArray.push(dados);
}

export const carregarTarefasDoLocalStorage = () => {
    tarefasArray.forEach((dados) => {
        incluirTarefaNoDOM(dados.valor, dados.dataFormatada, dados.id);
    });
}

carregarTarefasDoLocalStorage();

