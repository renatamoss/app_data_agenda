const criarBotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('list__button');
    botaoConclui.innerText = 'Concluir';

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (evento) => {

    //tarefa concluída no DOM:
    const botaoConclui = evento.target;
    const textoConcluido = botaoConclui.parentNode.childNodes[0];
    const botaoConcluido = botaoConclui;
    textoConcluido.classList.toggle('list__concluir');
    botaoConcluido.classList.toggle('list__button-concluir');


    //tarefa concluída no locaStorage:
    let tarefasArray = JSON.parse(localStorage.getItem('tarefasArmazenadas')) || []; //dados armazenados ou vazio
    const tarefasAtualizadas = tarefasArray.filter((dados) => {

        const textoConcluido = botaoConclui.parentElement; //li list__item
        const id = textoConcluido.dataset.id;  
        
        return dados.id == id;
        
    });

    localStorage.setItem('tarefasArmazenadas', JSON.stringify(tarefasAtualizadas)) || []
    return botaoConclui;

}

export default criarBotaoConclui;