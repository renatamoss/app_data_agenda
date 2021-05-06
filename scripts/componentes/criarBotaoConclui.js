const criarBotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('list__button');
    botaoConclui.innerText = 'Concluir';

    botaoConclui.addEventListener('click', concluirTarefa);
    return botaoConclui;
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target;
    const textoConcluido = botaoConclui.parentNode.childNodes[0];
    const botaoConcluido = botaoConclui;
    textoConcluido.classList.toggle('list__concluir');
    botaoConcluido.classList.toggle('list__button-concluir');
}

export default criarBotaoConclui;