const cartas = ['./img/bobrossparrot.gif', './img/bobrossparrot.gif',
                './img/explodyparrot.gif', './img/explodyparrot.gif',
                './img/fiestaparrot.gif', './img/fiestaparrot.gif',
                './img/metalparrot.gif', './img/metalparrot.gif',
                './img/revertitparrot.gif', './img/revertitparrot.gif',
                './img/tripletsparrot.gif', './img/tripletsparrot.gif',
                './img/unicornparrot.gif', './img/unicornparrot.gif']

let qtdeCartas = Number(prompt('Com quantas cartas quer jogar? Escolha um número par entre 4 e 14.'));
// console.log(typeof(qtdeCartas))

const jogo = document.querySelector('nav');
while (qtdeCartas%2!==0 || qtdeCartas < 4 || qtdeCartas > 14){
    alert('Não é possivel iniciar a partida. Escolha um número válido.');
    qtdeCartas = Number(prompt('Com quantas cartas quer jogar?'));
}

for (let i=0; i<qtdeCartas; i++) {
    jogo.innerHTML += `<button onclick="cartaVirada(this) class="carta">
                            <img class="face front" src="./img/back.png" />
                            <img class="face back" src="${cartas[i]}" />
                        </button>`
}

function cartaVirada(carta) {
    if (carta.classList.contains('virar') === false) {
        carta.classList.add('virar');
    }
}

