    const criarBotaoDeleta = () => {
        const botaoDeleta = document.createElement('button');
        botaoDeleta.classList.add('list__button');
        botaoDeleta.innerText = 'Deletar';

        botaoDeleta.addEventListener('click', deletarTarefa);
        return botaoDeleta;
    }

    const deletarTarefa = (evento) => {
        const botaoDeleta = evento.target;
        const deletandoTarefa = botaoDeleta.parentElement;
        deletandoTarefa.remove();
        return botaoDeleta;
    }

export default criarBotaoDeleta;