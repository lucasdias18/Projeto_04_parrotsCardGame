const cartas = ['./img/bobrossparrot.gif', './img/bobrossparrot.gif',
                './img/explodyparrot.gif', './img/explodyparrot.gif',
                './img/fiestaparrot.gif', './img/fiestaparrot.gif',
                './img/metalparrot.gif', './img/metalparrot.gif',
                './img/revertitparrot.gif', './img/revertitparrot.gif',
                './img/tripletsparrot.gif', './img/tripletsparrot.gif',
                './img/unicornparrot.gif', './img/unicornparrot.gif']

let qtdeCartas = Number(prompt('Com quantas cartas quer jogar? Escolha um número par entre 4 e 14.'));

const jogo = document.querySelector('nav');
while (qtdeCartas%2!==0 || qtdeCartas < 4 || qtdeCartas > 14){
    alert('Não é possivel iniciar a partida. Escolha um número válido.');
    qtdeCartas = Number(prompt('Com quantas cartas quer jogar?'));
}

let carta_jogo = cartas.slice(0, qtdeCartas);
carta_jogo.sort(comparador);

function comparador(){
    return Math.random() - 0.5;
}


for (let i=0; i<qtdeCartas; i++) {
    jogo.innerHTML += `<button onclick="cartaVirada(this)" class="carta">
                            <img class="face front" src="./img/back.png" />
                            <img class="face back" src="${carta_jogo[i]}" />
                        </button>`
}

let contador = 0;
let l, j;
let carta1, carta2;

function cartaVirada(carta) {
    if (carta.classList.contains('virar') === false) {
        carta.classList.add('virar');
        contador++;
    }
    
    if (contador%2 !== 0) {
        carta1 = carta;
        l = carta.children[1].getAttribute('src');
    }

    if (contador%2 === 0) {
        carta2 = carta;
        j = carta.children[1].getAttribute('src');
        

        if (l !== j) {
            setTimeout(jogadaErrada, 1000);
        }

        let cartasViradas = document.querySelectorAll('.virar');

        if (cartasViradas.length === qtdeCartas) {
            setTimeout(alert,1000,`Você ganhou em ${contador/2} jogadas!`);
            setTimeout(reiniciar, 1500);
        }
    }
}

function jogadaErrada() {
    carta1.classList.remove('virar');
    carta2.classList.remove('virar');
}

function reiniciar() {
    let reinicio = prompt('Deseja reiniciar a partida? Responda com sim ou não.');
    if (reinicio === 'sim') {
        location.reload()
    }
    if (reinicio === 'não') {
        alert('Partida finalizada. Obrigado!')
    }
    while (reinicio !== 'sim' && reinicio !== 'não') {
        alert('Resposta inválida. Responda com sim ou não.')
        reinicio = prompt('Deseja reiniciar a partida? Responda com sim ou não.')
    }
}
