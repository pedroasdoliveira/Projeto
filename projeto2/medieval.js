const prompt = require("prompt-sync")();

let continuar = ``;
do {
    console.clear();
    console.log(`Bem vindo a grande batalha medieval entre Cavaleiros, Atiradores e Espadachins.`);
    console.log();
    let nome = prompt(`Digite o seu Nickname: `);

    let num_rodadas = +prompt(`Quantas rodadas serão realizadas? `);
    console.log();
    console.log(`--------------------`);

    while (num_rodadas < 1 || isNaN(num_rodadas)) {
        console.log(`Número de rodadas inválido. Tente denovo.`);
        num_rodadas = +prompt(`Quantas rodadas serão realizadas? `);
        console.log();
        console.log(`--------------------`);
    }

    let classes = [`Espadachin`, `Arquearia`, `Cavalaria`];
    let elemento; 
    let escolha;
    let numAleatorio;
    let escolhido;

    let vitoria = 0;
    let derrota = 0;
    let empate = 0;

    console.log(`O jogo se baseia em uma batalha medieval, em que cada classe a ser apresentada tem seus pontos fortes e fracos.`);
    console.log();
    console.log(`A classe de Espadachin tem maiores chances em conterem a Cavalaria inimiga. A Arquearia tem maiores vantagens contra os Espadachins em longas distancias. Já a Cavalaria tem mais mobilidade em atacar os atiradores.`);
    console.log(`Escolha bem suas classes de jogo.`);
    console.log();
    console.log(`--------------------`);

    for (let turno = 0; turno < num_rodadas; turno++) {
        console.log(`Escolha uma das classes de jogo: 1 -> Espadachin, 2 -> Arquearia, 3 -> Cavalaria.`);
        elemento = +prompt();
        console.log();
        console.log(`--------------------`);

        escolha = classes[elemento - 1];

        while (escolha != classes[0] && escolha != classes[1] && escolha != classes[2]) {
            console.log(`Classe inexistente. Escolha outra classe.`);
            console.log(`1 -> Espadachin, 2 -> Arquearia, 3 -> Cavalaria.`);

            elemento = +prompt();
            escolha = classes[elemento - 1];
            console.log();
            console.log(`--------------------`);
        }
        console.log(`--> Você escolheu a classe de ${escolha}`);
        console.log();

        numAleatorio = Math.trunc(Math.random() * classes.length);
        escolhido = classes[numAleatorio];
        console.log(`--> O seu oponente escolheu a classe de ${escolhido}.`);
        console.log();
        console.log(`--------------------`);

        if (escolha == `Espadachin` && escolhido == `Cavalaria`) {
            console.log(`--> Você marcou um ponto.`);
            vitoria++;
            console.log();
            console.log(`--------------------------------`);
        } else if (escolha == `Arquearia` && escolhido == `Espadachin`) {
            console.log(`--> Você marcou um ponto.`);
            vitoria++;
            console.log();
            console.log(`--------------------------------`);
        } else if (escolha == `Cavalaria` && escolhido == `Arquearia`) {
            console.log(`--> Você marcou um ponto.`);
            vitoria++; 
            console.log();
            console.log(`--------------------------------`);
        } else if (escolha == escolhido) {
            console.log(`--> A rodada deu empate.`);
            empate++;
            console.log();
            console.log(`--------------------------------`);
        } else {
            console.log(`--> O seu oponente marcou um ponto.`);
            derrota++;
            console.log();
            console.log(`--------------------------------`);
        }
    }
        console.log(`Vitorias: ${vitoria}`);
        console.log(`Derrotas: ${derrota}`);
        console.log(`Empates: ${empate}`);
        console.log();

    if (vitoria > derrota) {
        console.log(`--> Meus parabens ${nome}! Você venceu o jogo.`);
    } else if (derrota > vitoria) {
        console.log(`--> O seu oponente ganhou de você. Mais sorte na proxima vez ${nome}.`);
    } else {
        console.log(`--> A partida empatou.`);

        while (vitoria == derrota) {
            console.log(`Como a partida de empate, teremos mais uma rodada para o desempate. Boa sorte.`)
            console.log();

            console.log(`Escolha sua classe.`);
            console.log(`1 -> Espadachin, 2 -> Arquearia, 3 -> Cavalaria.`);
            elemento = +prompt();
            escolha = classes[elemento - 1];
            console.log();
            console.log(`--------------------`);
            console.log(`Você escolheu a classe de ${escolha}`);

            numAleatorio = Math.trunc(Math.random() * classes.length);
            escolhido = classes[numAleatorio];
            console.log(`O seu oponente escolheu a classe de ${escolhido}.`);
            console.log();
            console.log(`--------------------`);

            if (escolha == `Espadachin` && escolhido == `Cavalaria`) {
                console.log(`--> Você marcou um ponto.`);
                vitoria++;
                console.log(`--> Meus parabens ${nome}! Você venceu o jogo.`);
                console.log();
                console.log(`--------------------------------`);
            } else if (escolha == `Arquearia` && escolhido == `Espadachin`) {
                console.log(`--> Você marcou um ponto.`);
                vitoria++;
                console.log(`--> Meus parabens ${nome}! Você venceu o jogo.`);
                console.log();
                console.log(`--------------------------------`);
            } else if (escolha == `Cavalaria` && escolhido == `Arquearia`) {
                console.log(`--> Você marcou um ponto.`);
                vitoria++;
                console.log(`--> Meus parabens ${nome}! Você venceu o jogo.`); 
                console.log();
                console.log(`--------------------------------`);
            } else if (escolha == escolhido) {
                console.log(`--> A rodada deu empate.`);
                empate++;
                console.log();
                console.log(`--------------------------------`);
            } else {
                console.log(`--> O seu oponente marcou um ponto.`);
                derrota++;
                console.log(`--> O seu oponente ganhou de você. Mais sorte na proxima vez ${nome}.`);
                console.log();
                console.log(`--------------------------------`);
            }  
        }
    }
    
    console.log();
    console.log(`--------------------------------`);
    console.log(`Gostaria de jogar de novo?`);
    continuar = prompt(``);
    console.log();

    if (continuar != `Sim` && continuar != `sim`){
        console.log(`Obrigado por jogar.`);
        break;
    }
} while (continuar == `Sim` || continuar == `sim`);

