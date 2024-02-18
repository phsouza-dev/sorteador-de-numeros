function sortear() {
    let resultado = [];
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    if (de < ate) {
        if (quantidade <= (ate - de + 1)) {
            for (let i = 0; i < quantidade; i++) {
                let numeroSorteado = obterNumeroAleatorio(de, ate);
                while (resultado.includes(numeroSorteado)) {
                    numeroSorteado = obterNumeroAleatorio(de, ate);
                }
                resultado.push(numeroSorteado);
            }
            document.querySelector('#resultado .texto__paragrafo').innerHTML = `Números sorteados:  ${resultado}`;
            document.getElementById('btn-reiniciar').classList.replace('container__botao-desabilitado', 'container__botao');
        } else {
            alert('A quantidade de números sorteados deve ser igual ou inferior ao intervalo de números escolhidos para o sorteio.')
        }
    } else if (de >= ate) {
        alert('O valor inicial do intervalo deve ser menor que o valor final inserido.');
    } else {
        alert('Ocorreu um erro, tente novamente.');
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('btn-reiniciar').classList.replace('container__botao', 'container__botao-desabilitado');
    document.querySelector('#resultado .texto__paragrafo').innerHTML = 'Números sorteados: nenhum até agora';
}