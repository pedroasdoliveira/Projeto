const prompt = require('prompt-sync')();

console.clear();
const personagem = prompt(`Nome do seu personagem: `);
console.log();

// Horas e dias

function zero(numero) {
    if (numero <= 9) {
        return `0` + numero;
    } else {
        return numero;
    }
}

let tempo = {
    hora: 4,
    dia: 1,

    relogio: function() {
        if (this.hora > 23) {
            let dias = this.hora - 24;
            this.hora = 0;
            this.hora += dias;
            this.dia++;
        }
        console.log(`==> Horario: ${zero(this.hora)}hrs`);
        console.log(`==> Dia: ${zero(this.dia)}`);
        console.log();

        if (this.hora > 15 && this.hora < 19) {
            console.log(`O dia já escureceu.`);
        }
    } 
}

let caminho;
// Classes
let cavaleiro = {
    nome: `Cavaleiro`,
    forca: 13,
    vitalidade: 15,
    vigor: 12,
    habilidade: 12,
    souls: 2000,
    sorte: 7,
    level: 8,
    pocoes: 6
};
let mercenario = {
    nome: `Mercenario`,
    forca: 13,
    vitalidade: 10,
    vigor: 11,
    habilidade: 16,
    souls: 4000,
    sorte: 9,
    level: 8,
    pocoes: 5
};
let feiticeiro = {
    nome: `Feiticeiro`,
    forca: 7,
    vitalidade: 9,
    vigor: 9,
    habilidade: 12,
    souls: 2000,
    sorte: 12,
    level: 8,
    pocoes: 10
};
let guerreiro = {
    nome: `Guerreiro`,
    forca: 16,
    vitalidade: 11,
    vigor: 14,
    habilidade: 9,
    souls: 2000,
    sorte: 11,
    level: 8,
    pocoes: 5
};
let despojado = {
    nome: `Despojado`,
    forca: 10,
    vitalidade: 10,
    vigor: 10,
    habilidade: 10,
    souls: 2000,
    sorte: 10,
    level: 1,
    pocoes: 4
};

let classes = [cavaleiro, mercenario, feiticeiro, guerreiro, despojado];

// Monstros e status
let monstros = [
    `Esqueleto`,
    `Arqueiro - Esqueleto`,
    `Bruxa`,
    `Cavaleiro - negro`,
    `Assasino`,
    `Espirito - maligno`,
];
let mob;
let bosses = [`Demonio antigo`, `Rei Wolnir`, `Dançarina das almas`, `Cavaleiro da Torre`];

// Escolha de classes
console.log(
    `Escolha a sua classe inicial: 1 -> Cavaleiro, 2 -> Mercenario, 3 -> Feiticeiro, 4 -> Guerreiro ou 5 -> Despojado`,
);
let escolha = +prompt();
let regex = /[1-5]/;

while (!regex.test(escolha)) {
    console.clear();
    console.log(`Classe inexistente. Escolha denovo.`);
    console.log(
        `1 -> Cavaleiro, 2 -> Mercenario, 3 -> Feiticeiro, 4 -> Guerreiro ou 5 -> Despojado`,
    );
    escolha = +prompt();
}

escolha = classes[escolha - 1];

if (escolha == classes[0]) {
    console.log(`Você escolheu a classe de Cavaleiro.`);
    console.log(classes[0]);
    console.log();
    console.log(
        `Um cavaleiro obscuro de má fama que sumcubiu vagando pela terra. Forte, devido a vitalidade alta e à armadura robusta.`,
    );
} else if (escolha == classes[1]) {
    console.log(`Você escolheu a classe de Mercenario.`);
    console.log(classes[1]);
    console.log();
    console.log();
    console.log(
        `Um mercenário e veterano do campo de batalha. Sua destreza alta permite uma melhor mobilidade de esquiva nas batalhas.`,
    );
} else if (escolha == classes[2]) {
    console.log(`Você escolheu a classe de Feiticeiro.`);
    console.log(classes[2]);
    console.log();
    console.log(
        `Um recluso que largou a academia formal para se aprofundar nas pesquisas. Comanda feitiços de alma usando alta inteligência.`,
    );
} else if (escolha == classes[3]) {
    console.log(`Você escolheu a classe de Guerreiro.`);
    console.log(classes[3]);
    console.log();
    console.log(
        `Descendentes dos guerreiros nórdicos famosos pela sua musculatura. Utiliza força extrema para empunhar um pesado machado de combate.`,
    );
} else if (escolha == classes[4]) {
    console.log(`Você escolheu a classe de Despojado.`);
    console.log(classes[4]);
    console.log();
    console.log(
        `Nu e de origem desconhecida. Foi um tolo incomensurável em vida ou foi despido das suas posses no enterro.`,
    );
}
let status = escolha;

console.log();
console.log(
    `Você veio do nada, nasceu de uma cova qualquer e disso você deve seguir seu caminho. O caminho é obsculo e incerto, teras grandes desafios a sua frente. A morte é sua certeza, mas não hà como fugir dela, apenas continuar.`,
);
console.log(
    `Você foi escolhido por algo sem motivo algum no momento. Com sua arma em mãos você deve seguir em frente. E lembre-se: a morte é a unica certeza que tens.`,
);
console.log();
// Jornada
var jornada;
var teste = 0;

function Caminho() {
    console.log(
        `Você continua seguindo em frente e encontra alguns monstros no caminho. Qual sua escolha? 1 -> Lutar contra ou 2 -> Esquivar e continuar o caminho.`,
    );
    jornada = +prompt();

    while (jornada != 1 && jornada != 2) {
        console.log(`Você precisa escolher uma das opções.`);
        console.log(`1 -> Lutar ou 2 -> Seguir em frente.`);
        jornada = +prompt();
    }

    if (jornada == 2) {
        console.log(`Você decidiu esquivar e seguir o seu caminho.`);
        console.log(`Almas: ${status.souls}`);
        console.log(`Status do ${status.nome}:`, status);
        let seguir = prompt('Enter...')
        console.clear();
        dialogo();
    }
    if (jornada == 1) {
        console.log(`você decidiu matar os monstros.`);
        console.log();
        console.log(status);
        let seguir = prompt('Enter...')
        console.clear();
        teste = 1;
        combate();
    }
}

// status do personagem
var forca = status.forca * 5;
var ataque = forca;
var vigorMaximo = status.vigor * 6;
var cansaso = vigorMaximo;
var esquiva = status.habilidade;
var vidaMaxima = status.vitalidade * 50;
var vidaPersonagem = vidaMaxima;
let metadedaVida = vidaPersonagem / 2;

// status monstro
let vidaMonstro = 0;
let danoMonstro = 0;

// Dados
let dado_ataque = 0;
let critico = 0;
let dado_sorte = 0;
let dado_esquiva = 0;

let recuar;
let desistir;

let vidaBoss = 0;
let danoBoss = 0;

const CansasoBoss = () => {
    if (cansaso <= 0) {
        ataque = 0;
        esquiva = 0;
        console.log(`==> Você esta MUITO cansado!`);
        console.log(`Você deseja recuar?`);
        recuar = prompt(``);
        console.log();

        if (recuar == `sim` || recuar == `s` || recuar == `SIM`) { 
            cansaso = vigorMaximo;
            vidaBoss += 20;
            ataque = status.forca * 6;
            esquiva = status.habilidade
            console.log(`Vigor: ${cansaso}`);
            console.log(`O oponente recuperou 20 de hp: ${vidaBoss} hp`);
            /*return cansaso, b;*/
        } else {
            vidaPersonagem -= 15;
            danoMonstro *= 2;
            console.log(`F`);
            console.log();
            console.log(`Dano do oponente aumentado: ${danoBoss}`);
            /*return cansaso, vidaPersonagem, c, b;*/
        }
    }

    else if (cansaso < 15) {
        ataque -= 10;
        console.log(`==> Você esta ficando muito cansado.`);
        console.log(`Quer recuar?`);
        recuar = prompt(``);
        if (recuar == `sim` || recuar == `s` || recuar == `SIM`) {
            cansaso += 45;
            vidaBoss += 10;
            ataque = status.forca * 6;
            console.log(`Vigor: ${cansaso}`);
            console.log(`O oponente recuperou 10 de hp: ${vidaBoss} hp`);
            /*return cansaso, b;*/
        }
    }

    else if (cansaso < 35) {
        console.log(`==> Você esta ficando cansado.`);
        console.log(`Quer recuar?`);
        console.log();
        recuar = prompt(``);
        if (recuar == `sim` || recuar == `s` || recuar == `SIM`) {
            cansaso += 30;
            vidaBoss += 5;
            console.log(`Vigor: ${cansaso}`);
            console.log(`O oponente recuperou 5 de hp: ${vidaBoss} hp`);
        }
    }
}

// Função de vida
function combate() {
    forca = status.forca * 5;
    ataque = forca;
    vigorMaximo = status.vigor * 6;
    cansaso = vigorMaximo;
    esquiva = status.habilidade;
    vidaMaxima = status.vitalidade * 50;
    vidaPersonagem = vidaMaxima;

    console.log(`==> Vida máxima do ${status.nome}: ${vidaMaxima} hp`);
    console.log(`==> total de vigor: ${vigorMaximo}`);
    console.log();
    mob = monstros[Math.trunc(Math.random() * 6)];
    console.log(`==> O monstro é um ${mob}.`);
    vidaMonstro = Math.trunc(Math.random() * 200) + 250;
    console.log(`==> A vida dele é de ${vidaMonstro}.`);
    seguir = prompt('Precione Enter pra continuar...');
    console.log(`------------------------`);
    console.log();
    conflito();
}

const pocao = () => {
    console.log(`==> Quantidades de Poções do ${status.nome}: ${zero(status.pocoes)}.`);
    console.log();

    if (status.pocoes <= 0) {
        console.log(`Você não possui poções de cura.`);
        seguir = prompt('Precione Enter pra continuar...');
        console.log();
    }
    else {
        vidaPersonagem *= 2;
        status.pocoes--;
        console.log(`Vida regenerada: ${Math.round(vidaPersonagem)} hp`);
        console.log();
    }
}

// Função de batalha
function conflito() {
    for (let i = 0; i <= vidaMonstro || i <= vidaPersonagem; i++) {
        console.log(`==> Vida do ${status.nome} é de ${Math.round(vidaPersonagem)} hp.`);
        console.log(`==> O seu ataque padrão é de ${ataque} de dano.`);
        console.log(`==> Seu vigor: ${cansaso}`);
        console.log(`==> Quantidade de Poções: ${zero(status.pocoes)}`);
        console.log();

        console.log(`==> Vida do(a) ${mob}: ${vidaMonstro} hp.`);

        danoMonstro = Math.trunc(Math.random() * 30) + 25;
        console.log(`==> Dano do monstro: ${danoMonstro}.`);

        dado_ataque = Math.trunc(Math.random() * 10);
        critico = Math.trunc(Math.random() * 10);

        console.log();

        if (vidaPersonagem <= 0) {
            console.log(`-----------------------`);
            console.log(`Você morreu!`);
            console.log();
            console.log(`Você nasce no ultimo ponto de ressurreição.`);
            console.log();
            Math.round((status.souls /= 2));
            console.log(`Você perdeu metade de suas almas.`);
            console.log(`==> Almas: ${status.souls}`);
            jornada = 0;
            seguir = prompt('Precione Enter pra continuar...');
            console.clear();
            Caminho();
            break;
        }
        console.log(`==> Dado de ataque: ${zero(dado_ataque)}.`);
        console.log();

        // Dado de ataque(jogador)
        if (dado_ataque >= 5) {
            console.log(`Você começou o ataque.`);
            console.log();
            vidaMonstro -= ataque;
            cansaso -= 10;
            console.log(`A vida do ${mob} é de ${vidaMonstro} hp.`);
            console.log();
            console.log(`==> Dado de Critico: ${zero(critico)}`);

            if (critico <= 4) {
                console.log(`Não foi possivel dar critico.`);
            }
            if (critico > 4 && critico < 7) {
                vidaMonstro -= 25;
                console.log(`Critico. O ${mob} tomou 25 de dano. Seu hp: ${vidaMonstro} hp.`);
            }
            if (critico >= 7 && critico < 10) {
                vidaMonstro -= 50;
                console.log(`Critico. O ${mob} tomou 50 de dano. Seu hp: ${vidaMonstro} hp.`);
            }
            if (critico == 10) {
                vidaMonstro -= 100;
                console.log(`Critico. O ${mob} tomou 100 de dano. Seu hp: ${vidaMonstro} hp.`);
            }

            console.log();
            console.log(`Vigor: ${cansaso}.`);
            CansasoMonstro();
            console.log();

            // If Monstro morreu
            if (vidaMonstro <= 0) {
                console.log(`-----------------------`);
                console.log(`==> Você matou o(a) ${mob}`);
                cansaso = vigorMaximo;
                console.log(`==> Vigor regenerado: ${cansaso}`);
                console.log();

                if (status.sorte > 5 && status.sorte <= 12) {
                    dado_sorte = Math.trunc(Math.random() * 3) + 3;
                    console.log(`dado lançado: ${zero(dado_sorte)}`);
                    status.souls += 100 * dado_sorte;
                    console.log();
                    console.log(`Você recebeu ${100 * dado_sorte} de almas`);
                }
                if (status.sorte > 12 && status.sorte <= 18) {
                    dado_sorte = Math.trunc(Math.random() * 6) + 3;
                    console.log(`dado lançado: ${zero(dado_sorte)}`);
                    status.souls += 200 * dado_sorte;
                    console.log();
                    console.log(`Você recebeu ${200 * dado_sorte} de almas`);
                }
                if (status.sorte > 18) {
                    dado_sorte = Math.trunc(Math.random() * 9) + 5;
                    console.log(`dado lançado: ${zero(dado_sorte)}`);
                    status.souls += 300 * dado_sorte;
                    console.log();
                    console.log(`Você recebeu ${300 * dado_sorte} de almas`);
                }

                console.log();
                console.log(`==> Você tem ${Math.trunc(status.souls)} de almas.`);
                console.log(`Status do ${status.nome}:`, status);
                console.log(`==> Vida do ${status.nome}: ${Math.round(vidaPersonagem)} hp`);
                console.log(`-----------------------`);
                seguir = prompt('Precione Enter pra continuar...');
                if (teste == 1) {
                    dialogo();
                    break;
                }
                else if (teste == 2) {
                    console.clear();
                    fogueira();
                    break;
                }
                else if (teste == 3) {
                    console.clear();
                    portao();
                    break;
                }
            }
        }
        /*Cansaso(vidaMonstro);*/

        // Dado de ataque(Monstro)
        if (dado_ataque < 5) {
            console.log(`O monstro atacou.`);
            console.log(`O dano do monstro é de ${danoMonstro}.`);
            console.log();
            Esquiva(danoMonstro);
            CansasoMonstro();
            /*vidaPersonagem -= danoMonstro;
            console.log(`A vida do seu personagem é de ${Math.trunc(vidaPersonagem)} hp.`);*/
        }

        if (vidaPersonagem <= metadedaVida) {
            console.log(`Você pretende usar uma poção?`);
            let usarPocao = prompt(``);
            console.log();
            if (usarPocao == `sim` || usarPocao == `s`) {
                pocao();
            }
        }

        if (vidaPersonagem < 150) {
            console.log(`Você está com pouca vida. Pretende desistir da luta?`);
            desistir = prompt(``);
            console.log();

            if (desistir == `sim`.toLowerCase || desistir == `sim`.toUpperCase || desistir == `s`) {
                console.log(`Você destistiu da luta.`);
                console.log(`Status do ${status.nome}:`, status);
                seguir = prompt('Precione Enter pra continuar...');
                console.log(`-----------------------`);
                dialogo();
                break;  
            } else {
                seguir = prompt('Precione Enter pra continuar...');
                console.log();
            }
        }

        let continua = prompt(`Enter...`);
        console.log(`--------------------------------`);
    }
}

const CansasoMonstro = () => {
// Função de vigor(cansaso)
    if (cansaso < 3) {
        ataque = 0;
        esquiva = 0;
        console.log(`==> Você esta MUITO cansado!`);
        console.log(`Você deseja recuar?`);
        recuar = prompt(``);
        console.log();

        if (recuar == `sim` || recuar == `s` || recuar == `SIM`) { 
            cansaso = vigorMaximo;
            vidaMonstro += 75;
            console.log(`Vigor: ${cansaso}`);
            console.log(`O oponente recuperou 75 de hp: ${vidaMonstro} hp`);
            /*return cansaso, b;*/
        } else {
            vidaPersonagem -= 15;
            danoMonstro *= 2;
            console.log(`F`);
            console.log();
            console.log(`Dano do oponente aumentado: ${danoMonstro}.`);
            /*return cansaso, vidaPersonagem, c, b;*/
        }
    }

    else if (cansaso < 15) {
        ataque -= 10;
        console.log(`==> Você esta ficando muito cansado.`);
        console.log(`Quer recuar?`);
        recuar = prompt(``);
        if (recuar == `sim` || recuar == `s` || recuar == `SIM`) {
            cansaso + 35;
            vidaMonstro += 50;
            console.log(`Vigor: ${cansaso}`);
            console.log(`O oponente recuperou 50 de hp: ${vidaMonstro} hp`);
            /*return cansaso, b;*/
        }
    }

    else if (cansaso < 36) {
        console.log(`==> Você esta ficando cansado.`);
        console.log(`Quer recuar?`);
        console.log();
        recuar = prompt(``);
        if (recuar == `sim` || recuar == `s` || recuar == `SIM`) {
            cansaso += 25;
            vidaMonstro+= 25;
            console.log(`Vigor: ${cansaso}`);
            console.log(`O oponente recuperou 25 de hp: ${vidaMonstro} hp`);
        }
    }
    console.log();
}

// Função esquiva
function Esquiva(a) {
    if (esquiva >= 5) {
        dado_esquiva = Math.trunc(Math.random() * 5);
    } else if (esquiva >= 11) {
        dado_esquiva = Math.trunc(Math.random() * 7);
    } else if (esquiva >= 15) {
        dado_esquiva = Math.trunc(Math.random() * 10);
    } else if (esquiva >= 19) {
        dado_esquiva = Math.trunc(Math.random() * 12)+ 1;
    }
    console.log(`==> Dado de esquiva: ${zero(dado_esquiva)}.`);

    if (dado_esquiva > 3) {
        console.log(`Você esquivou.`);
        a = 0;
        cansaso -= 5;
    }
    if (dado_esquiva == 3) {
        console.log(`Você esquivou, porém tomou dano.`);
        vidaPersonagem -= a / 2;
        console.log(`Tomou: ${Math.trunc(a / 2)} de dano.`);
        console.log(`A vida do seu personagem é de ${Math.trunc(vidaPersonagem)} hp.`);
        cansaso -= 5;

    } else if (dado_esquiva < 3) {
        console.log(`Sua esquiva fracassou.`);
        cansaso -= 5;
        vidaPersonagem -= a;
        console.log();
        console.log(`A vida do seu personagem é de ${Math.trunc(vidaPersonagem)} hp.`);
    }
    console.log(`==> Vigor: ${cansaso}`);
    console.log();
}
Caminho();

function dialogo() {
    console.clear();
    console.log(`Se passaram 2 horas.`);
    tempo.hora += 2;
    tempo.relogio();
    console.log(`-----------------------`);

    console.log();
    console.log(`Você continua seu caminho e encontra uma fogueira.`);
    console.log(
        `Olá estranho. Me chamo Elizabeth, sou apenas mais um espirito entre muito que passam por aqui, meu dever é guiar-los para "Palacio das almas perdidas", lugar esse que você irá quando chegar sua hora também. Percebo que voltou dos mortos, parece que foi obra dos anciãos de ressuscitar-lo com o proposito de ajuda-los.`,
    );
    console.log(`Elizabeth:
    Como deve perceber nosso mundo não mais o mesmo quando morreu. Nosso rei Wolnir, morreu lutando contra um demonio que jaz em seu palacio. Há indicios que seu espirito ainda esteja no castelo.`);
    console.log();
    console.log(
        `Elizabeth: A fogueira ao seu lado pode ser usada para repor suas forças. Você também pode usar ela para melhorar suas habilidades.`,
    );
    console.log(
        `Basta trazer almas para mim e eu irei conceder a você a força dos espiritos perdidos para ajudar em sua jornada. `,
    );
    console.log();
    console.log(`Passou 1 hora`);
    tempo.hora += 1;
    tempo.relogio();
    console.log(`-----------------------`);
    console.log();
    console.log(`Proximo a fogueira há algumas ruinas de um antigo casarão. Dentro da casa há velha mercante. Você vai em direção a ela.`);
    console.log(`Velha: Olha só, se não é mais um espirito qualquer. Querendo alguma coisa? Tenho todos os tipos de mercadorias que poderia te sevir. Basta usar suas almas para telas.`);
    console.log(`Percebes que eu não sou uma velha qualquer, certo. Desde que perdi minha visão por causa da guerra tenho adquirido o dom de conversar com os espiritos.`);
    console.log(`Isso me possibilitou até fazer com que os mesmo possam conseguir itens de lugares que eu não conseguiria para meus fregueses.`);
    console.log(`O que me custou? ora os espiritos não se importam por nada material, apenas uma companhia antes de partirem les apetece. Então o que queres?`);
    console.log(`-----------------------`);
    seguir = prompt('Precione Enter pra continuar...');
    console.log();
    fogueira();
}

function fogueira() {
    console.log(`-----------------------`);
    console.log(`Status do ${status.nome}:`, status);
    console.log();

    console.log(`==> Ataque: ${ataque}`);
    console.log(`==> Vida: ${vidaPersonagem} hp`);
    console.log();

    console.log(`Você agora tem as opcões de 1 -> Decidir procurar novos monstros, 2 -> Decidir seguir seu caminho, 3 -> Descansar na fogueria e recuperar seus status ou 4 -> Quastar suas almas. `);
    var decisao = +prompt();
    regex = /[1-4]/;
    console.log();

    while (!regex.test(decisao)) {
        console.log(`Você só pode escolher uma das opções acima.`);
        decisao = +prompt();
        console.log();
    }

    if (decisao == 1) {
        console.log(`você decidiu matar os monstros.`);
        console.log();
        console.log(status);
        seguir = prompt('Enter...');
        console.clear();
        teste = 2;
        combate();
    }
    else if (decisao == 2) {
        console.log(`Você decidiu seguir em frente.`);
        console.log(`Passa 1 hora.`);
        tempo.hora += 1;
        tempo.relogio();
        seguir = prompt('Enter...');
        dialogo2();
    }
    else if (decisao == 3) {
        console.clear();
        console.log(`Descansar na fogueira.`);
        console.log(`Vida: ${Math.round(vidaPersonagem)} hp.`);
        console.log();
        tempo.hora += 6;
        vidaPersonagem = vidaMaxima;
        console.log(`6 horas depois...`);
        console.log();
        console.log(`==> Vida regenerada: ${vidaPersonagem} hp.`);
        tempo.hora += 6;
        tempo.relogio();
        seguir = prompt('Enter...');
        console.clear();
        fogueira();
    }
    else if (decisao == 4) {
        console.clear();
        console.log(`Você pretende 1 -> upar seu personagem ou 2 -> comprar alguns itens?`);
        var gastar = +prompt();
        if (gastar == 1) {
            levelup();
        }
        else if (gastar == 2) {
            mercante();
        }
    }
}

function mercante() {
    console.log();
    console.log(`==> Almas: ${Math.round(status.souls)}`);
    console.log();
    console.log(`Escolha o que você quer comprar: 1 -> Poções, 2 -> armas ou 3 -> armadura`);
    let compras = +prompt();
    console.log();
    regex = /[1-3]/;

    while (!regex.test(compras)) {
        console.log(`Escolha uma das opções acima.`);
        compras = +prompt();
        console.log();
    }
    // Compras poções
    if (compras == 1) {
        let compraPocoes = 500;
        console.log(`Serão quantas poções?`);
        let quantidade = +prompt();
        valor = quantidade * compraPocoes;
        console.log(`Valor: ${valor}`);

        if (status.souls < valor) {
            console.log(`Você não tem almas o suficiente para comprar poções.`);
            seguir = prompt('Enter...');
            console.clear();
            fogueira();
        }
        else {
            console.log(`Você gastou ${valor} em almas.`);
            status.pocoes += quantidade;
            status.souls -= valor;
            console.log();
            console.log(`==> Quantidade de Poções: ${zero(status.pocoes)}.`);
            console.log(`==> Quantidade de almas: ${Math.round(status.souls)}.`);
        }
    } // comprar armas
    else if (compras == 2) {
        let arma = 0;
        let resp;
        console.log(`Qual arma você quer comprar?`);
        console.log(`1 -> Espada Claymore, 2 -> Katana Uchigatana, 3 -> Machado Greataxe, 4 - > Alabarda Lucerne ou 5 -> Cajado Izalith Staff`);
        let comprarArmas = +prompt();
        console.log();
        regex = /[1-5]/;

        while (!regex.test(comprarArmas)) {
            console.log(`Você só pode escolher uma dessas armas.`);
            comprarArmas = +prompt();
            console.log()
        }

        if (comprarArmas == 1) {
            console.log(`Nivel de força necessario para usar a arma: Força 12`);
            if (status.forca < 12) {
                console.log(`Você não tem nivél para usar essa arma.`);
            }
            else {
                arma = 3000;
                console.log(`O valor da arma é de ${arma} almas`);
                console.log();
                
                if (status.souls < arma) {
                    console.log(`Você não tem almas o suficiente para comprar essa arma.`);
                    seguir = prompt('Enter...');
                    console.clear();
                    fogueira();
                }
                else {
                    console.log(`você quer comprar essa arma?`);
                    resp = prompt(``);
                    console.log();

                    if (resp == `sim`.toLowerCase || resp == `sim`.toUpperCase || resp == `s`) {
                        status.souls -= arma;
                        console.log(`==> Você adiquiriu a Claymore.`);
                        console.log(`Almas: ${status.souls} almas.`);
                        console.log();
                        ataque += 25;
                        console.log(`==> Ataque aumentado em 25. Ataque: ${ataque}`);
                    }
                }
            }
        }
    }
    console.log();
    console.log(`Se passou 1 hora.`);
    tempo.hora += 1;
    tempo.relogio();
    console.log();
    console.log(`Pretende comprar algo mais?`);
    let repeticao = prompt(``);
    console.log();
    if (repeticao == `sim`.toLowerCase || repeticao == `sim`.toUpperCase || repeticao == `s`) {
        console.log(`-------------------------`);
        console.clear();
        mercante();
    }
    else {
        seguir = prompt('Enter...');
        console.clear();
        fogueira();
    }
    
}

function levelup() {
    console.log();
    console.log(status);
    console.log();
    console.log(`Level atual: ${zero(status.level)}`);
    console.log(`Cada level necessita de uma quantidade de almas para upar.`);
    var upar = status.level * 100;
    if (status.level > 9) {
        upar = status.level * 150;
    }

    console.log(`Você tem ${status.souls} de almas`);
    console.log(`Você irá gastar ${upar} de almas para upar de nivel.`);
    console.log();
    var almasSobrando = status.souls - upar;

    if (status.souls < upar) {
        console.log(`Você não tem almas necessarias para upar seu personagem.`);
        console.log(`Mate mais monstro para conseguir mais almas`);
        seguir = prompt('Enter...');
        console.clear();
        fogueira();
    } 
    else {
        status.level++;
        status.souls = almasSobrando;
        let pontos = 1;
        console.log(`==> Level atual: ${zero(status.level)}`);
        console.log(`==> Almas: ${status.souls}`);
        console.log(`==> Pontos: ${zero(pontos)}`);

        console.log();
        console.log(`Escolha onde você quer gastar seus pontos:`);
        console.log(`1 -> Força, 2 -> Vitalidade, 3 -> Vigor, 4 -> Habilidade ou 5 -> Sorte `);
        let gastarPontos = +prompt();
        regex = /[1-5]/;
        console.log();

        while (!regex.test(gastarPontos)) {
            console.log(`Você só pode escolher uma das opções acima.`);
            gastarPontos = +prompt();
            console.log();
        }

        if (gastarPontos == 1) {
            console.log(`Força antiga do ${status.nome}: ${zero(status.forca)}`);
            console.log();
            status.forca = status.forca + pontos;
            pontos--;
            console.log(`Pontos: ${zero(pontos)}`);
            console.log(`==> Força atual: ${zero(status.forca)}`);
        }
        else if (gastarPontos == 2) {
            console.log(`Vitalidade antiga do ${status.nome}: ${zero(status.vitalidade)}`);
            console.log();
            status.vitalidade = status.vitalidade + pontos;
            pontos--;
            console.log(`Pontos: ${zero(pontos)}`);
            console.log(`==> Vitalidade atual: ${zero(status.vitalidade)}`);
        }
        else if (gastarPontos == 3) {
            console.log(`Vigor antiga do ${status.nome}: ${zero(status.vigor)}`);
            console.log();
            status.vigor = status.vigor + pontos;
            pontos--;
            console.log(`Pontos: ${zero(pontos)}`);
            console.log(`==> Vigor atual: ${zero(status.vigor)}`);
        }
        else if (gastarPontos == 4) {
            console.log(`Habilidade antiga do ${status.nome}: ${zero(status.habilidade)}`);
            console.log();
            status.habilidade = status.habilidade + pontos;
            pontos--;
            console.log(`Pontos: ${zero(pontos)}`);
            console.log(`==> Habilidade atual: ${zero(status.habilidade)}`);
        }
        else if (gastarPontos == 5) {
            console.log(`Sorte antiga do ${status.nome}: ${zero(status.sorte)}`);
            console.log();
            status.sorte = status.sorte + pontos;
            pontos--;
            console.log(`Pontos: ${zero(pontos)}`);
            console.log(`==> Sorte atual: ${zero(status.sorte)}`);
        }
    }
    console.log();
    console.log(`Se passou 1 hora até seu personagem upar seus status.`);
    tempo.hora += 1;
    tempo.relogio();
    console.log();
    console.log(`Pretende upar novamente seu personagem?`);
    let repeticao = prompt(``);

    if (repeticao == `sim`.toLowerCase || repeticao == `sim`.toUpperCase || repeticao == `s`) {
        console.log(`-------------------------`);
        levelup();
    }
    else {
        console.log(`-------------------------`);
        console.log(status);
        seguir = prompt('Enter...');
        console.clear();
        fogueira();
    }
}

function dialogo2() {
    console.clear();
    console.log(`No seu trajeto você se depara com um grande portão comberto de nevoa a sua frente. Um estranho chega perto e diz.`);
    console.log(`Estranho: Ei você, você será o proximo a enfrentar o monstro que há atras desse portão? Esse demonio vestido de armadura protege o antigo caminho até o a torre do castelo com seus 30 metros de altura! Antes da suposta morte do nosso rei, esse portão era aberto a todos os peregrinos que vinham de longe e seus suditos. Mas depois que a escuridão tomou conta do castelo ninguém mais pode passar por ele. Todos os que tentaram foram mortos, e sua almas continuam pressas lá, assim como a do antigo rei.`);
    console.log(`Estranho: Aquele demonio continuara bloqueando a passagem até que ele seja derrotado. Esse é o unico caminho viavel até o castelo.`);
    console.log();

    console.log(`Proximo a entrada do portão há uma fogueira onde você pode utilizar para voltar até o casarão para caso queira upar ainda mais seus status.`);
    console.log(`Existe outros monstros também proximo caso queira matar eles.`);
    seguir = prompt('Precione Enter pra continuar...');
    console.log();
    portao();
}

function portao() {
    console.log(`Aqui você tem três escolhas: 1 -> Voltar a fogueira inicial, 2 -> Matar os monstros ou 3 -> Enfrentar o demonio.`);
    decisao = +prompt();
    regex = /[1-3]/;
    console.log();

    while (!regex.test(decisao)) {
        console.log(`Você só pode escolher uma das 3 opções acima.`);
        decisao = +prompt();
    }

    if (decisao == 1) {
        console.log(`Você decidiu voltar para a antiga fogueira`);
        console.log(`Vida: ${vidaPersonagem} hp.`);
        vidaPersonagem = vidaMaxima;
        console.log();
        console.log(`Vida regenerada: ${vidaPersonagem} hp.`);
        console.log();
        console.log(`Para voltar a fogueira irá se passar 1 hora.`);
        tempo.hora += 1;
        tempo.relogio();
        seguir = prompt('Precione Enter pra continuar...');
        console.clear();
        fogueira();
    }
    else if (decisao == 2) {
        console.log(`Você decidiu matar os monstros.`);
        console.log();
        console.log(status);
        seguir = prompt('Enter...');
        console.clear();
        teste = 3;
        combate();
    }
    else if (decisao == 3) {
        console.log(`Você decidiu enfrentar o Boss!`);
        console.log(status);
        console.log(`ATENÇÃO! Você realmente pretende enfrentar o Boss agora?`);
        var atencao = prompt(``);

        if (atencao == `sim`.toLowerCase || atencao == `sim`.toUpperCase || atencao == `s`) {
            seguir = prompt('Enter...');
            console.clear();
            torre();
        }
        else {
            console.log(`Você decidiu que ainda não é o momento para isso.`);
            seguir = prompt('Enter...');
            console.clear();
            portao();
        }
    }
}

// Função de combate contra o primeiro boss.
function torre () {
    console.log(`----------------------------------------`);
    console.log();

    console.log(`Você passa pelo portão e está presete a enfrentar o seu adversario.`);
    console.log(`==> Seu primeiro chefão é o ${bosses[3]}.`);

    console.log();
    console.log(`O ${bosses[3]} é lento como seus ataques, porém o que compensa é sua grande quantidade de vida e seus ataques poderosos, que se não forem desviados a tempo, causaram grandes danos.`);
    console.log(`Tente sempre acertar o seu ponto fraco.`);
    console.log(`----------------------------------------`);
    console.log();

    console.log(`==> Vida máxima do ${status.nome}: ${vidaMaxima} hp.`);
    console.log(`==> vigor Máximo: ${vigorMaximo}.`);
    console.log();
    vidaBoss = 1800;
    console.log(`==> A vida do ${bosses[3]} é de ${vidaBoss} hp.`);
    seguir = prompt('Precione Enter pra continuar...');
    console.log();

    for (let j = 0; j <= vidaBoss || j <= vidaPersonagem; j++) {
        console.log(`------------------------------------------`);
        console.log();

        console.log(`==> O seu ataque padrão é de ${ataque}.`);
        console.log();
        console.log(`==> Vida do ${status.nome}: ${Math.round(vidaPersonagem)} hp.`);
        console.log(`==> Vigor: ${cansaso}.`);
        console.log();

        danoBoss = Math.trunc(Math.random()* 60) + 40;
        console.log(`==> Dano do ${bosses[3]}: ${danoBoss}.`);
        console.log(`==> vida do ${bosses[3]}: ${vidaBoss} hp.`);
        console.log();

        let dadoPosibilidade = Math.round(Math.random()* 6);
        dado_ataque = Math.trunc(Math.random() * 15);
        critico = Math.trunc(Math.random() * 20);
        console.log();

        console.log(`==> Dado de ataque: ${zero(dado_ataque)}`);
        console.log();

        if (vidaPersonagem <= 0) {
            console.log(`Você morreu!`);
            console.log();
            console.log(`Você nasce no ultimo ponto de ressurreição.`);
            console.log();
            status.souls -= status.souls;
            console.log(`Você perdeu todas as suas almas!`);
            console.log(`==> Almas: ${status.souls}`);
            console.log();
            console.log(`Esteja mais preparado na proxima vez.`);
            console.log();
            console.log(`Passou 2 horas.`);
            tempo.hora += 2;
            tempo.relogio();
            seguir = prompt('Precione Enter pra continuar...');
            console.clear();
            fogueira();
        }

        if (vidaBoss <= 0) {
            console.log(`----------------------------`);
            //
        }

        if (dado_ataque <= 10) {
            console.log(`Você começou o ataque.`);
            console.log();
            vidaBoss -= ataque;
            cansaso -= 10;
            console.log(`Você tirou ${ataque} de hp do oponente.`);
            console.log(`==> vida do ${bosses[3]}: ${vidaBoss} hp.`);
            console.log();
            console.log(`==> dado de critico: ${zero(critico)}`);
            console.log();

            if (critico < 5) {
                console.log(`==> Não foi possivel acertar um critico no ${bosses[3]}.`);
            }
            else if (critico >= 5 && critico < 8) {
                vidaBoss -= 50;
                console.log(`==> Critico leve. Você tirou 50 de hp do ${bosses[3]}. Seu hp: ${Math.round(vidaBoss)} hp`);
            }
            else if (critico >= 8 && critico <= 12) {
                vidaBoss -= 75;
                console.log(`==> Critico médio. Você tirou 75 de hp do ${bosses[3]}. Seu hp: ${Math.round(vidaBoss)} hp`);
            }
            else if (critico > 12 && critico < 16) {
                vidaBoss -= 90;
                console.log(`==> Critico elevado. Você tirou 90 de hp do ${bosses[3]}. Seu hp: ${Math.round(vidaBoss)} hp`);
            }
            else if (critico >= 16 && critico < 19) {
                console.log(`==> Você acertou o ponto fraco do ${bosses[3]}.`);
                vidaBoss -= 125;
                cansaso -= 5
                console.log(`==> Ponto fraco acertado. Você tirou 125 de hp do ${bosses[3]}. Seu hp: ${Math.round(vidaBoss)} hp`);
            }
            else if (critico >= 19) {
                console.log(`==> Você acertou bem no centro do ponto fraco do ${bosses[3]}.`);
                vidaBoss -= 200;
                cansaso -= 5
                console.log(`==> Você acertou um excelente golpe no ${bosses[3]}, tirando 200 de hp dele. Seu hp: ${Math.round(vidaBoss)} hp`);
            }
            console.log();
            console.log(`==> Vigor: ${cansaso}.`);
            CansasoBoss();
            console.log();
            console.log(`==> Dado de posibilidades: ${zero(dadoPosibilidade)};`);
            console.log();

            if (dadoPosibilidade >= 3) {
                console.log(`Você realizou um segundo ataque com metade do vigor necessario.`);
                console.log();
                vidaBoss -= ataque;
                cansaso -= 5;
                console.log(`Você tirou ${ataque} de hp do oponente.`);
                console.log(`==> vida do ${bosses[3]}: ${vidaBoss} hp.`);
                console.log();
            }
            else {
                console.log(`Não foi possivel realizar um outro ataque.`);
                console.log();
            }

            console.log(`==> Vigor: ${cansaso}.`);
            CansasoBoss();
            console.log();
        }
        else if (dado_ataque > 10) {
            console.log(`O ${bosses[3]} começou o ataque.`);
            console.log(`O dano do ${bosses[3]} é de ${danoBoss}.`);
            Esquiva(danoBoss);
            CansasoBoss();

            console.log(`==> Dado de possibilidade: ${zero(dadoPosibilidade)}.`);
            console.log();

            if (dadoPosibilidade > 3) {
                console.log(`O ${bosses[3]} realizou um segundo ataque.`);
                console.log();

                console.log(`O dano do ${bosses[3]} é de ${danoBoss}.`);
                Esquiva(danoBoss);
                CansasoBoss();
            }
            else {
                console.log(`O ${bosses[3]} não realizou mais nenhum ataque.`);
            }
        }

        if (vidaPersonagem < vidaMaxima) {
            console.log(`Você pretende usar uma poção?`);
            let usarPocao = prompt(``);
            console.log();
            if (usarPocao == `sim` || usarPocao == `s`) {
                pocao();
            }
        }

        if (vidaPersonagem <= metadedaVida) {
            console.log(`Você pretende usar uma poção?`);
            let usarPocao = prompt(``);
            console.log();
            if (usarPocao == `sim` || usarPocao == `s`) {
                pocao();
            }
        }

        if (vidaPersonagem < 150) {
            console.log(`Você está com pouca vida. Pretende desistir da luta?`);
            desistir = prompt(``);
            console.log();

            if (desistir == `sim`.toLowerCase || desistir == `sim`.toUpperCase || desistir == `s`) {
                console.log(`Você NÃO pode destistir dessa luta. As únicas escolhas que você tem é vencer ou morrer!`);
                console.log();
                seguir = prompt('Precione Enter pra continuar...');
            } 
            else {
                seguir = prompt('Precione Enter pra continuar...');
                console.log();
            }
        }

        seguir = prompt('Precione Enter pra continuar...');
    }
}

