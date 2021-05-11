
const criarBotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('list__button');
    botaoDeleta.innerText = 'Deletar';

    botaoDeleta.addEventListener('click', deletarTarefa);
    return botaoDeleta;
}

const deletarTarefa = (evento) => {

    // Remove do DOM:
    const botaoDeleta = evento.target;
    const deletandoTarefa = botaoDeleta.parentElement;
    deletandoTarefa.remove();

    // Remove do locaStorage:
    let tarefasArray = JSON.parse(localStorage.getItem('tarefasArmazenadas')) || [];
    const tarefasAtualizadas = tarefasArray.filter((dados) => {
        const id = deletandoTarefa.dataset.id;      
        return dados.id != id;

    });

    localStorage.setItem('tarefasArmazenadas', JSON.stringify(tarefasAtualizadas)) || []
    return botaoDeleta;
}

export default criarBotaoDeleta;