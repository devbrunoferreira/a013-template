// let idadeDependente = 15;

// if (idadeDependente >= 13) {
//     if (idadeDependente >= 18) {
//         console.log('Seu dependete já pode ter um cartão de crédito próprio!');
//     } else {
//         console.log('Seu depedente já pode ter um cartão de crédito vinculado ao seu!');
//     }
// } else {
//     console.log('Consulte outras possibilidades do Labank.');
// }

// if (idadeDependente >= 13 && idadeDependente < 18) {
//     console.log('Seu depedente já pode ter um cartão de crédito vinculado ao seu!');
// } else {
//     console.log('Consulte outras possibilidades do Labank.');
// }

// IF TERNÁRIO

// idadeDependente === 13 ? alert('A idade do dependente é 13 e já pode ter um cartão!') : alert('Consultte outras possibilidades do Labank.');

// let cartao = +prompt(`Solicitação de cartão de crédito. Escolha uma opção: \n 1- Fácil \n 2 - Black \n 3 - Platinum \n 4 - Master Gold`);

// switch (cartao) {
//     case 1 || '1':
//         console.log('Cartão Fácil adquirido!');
//         break;
//     case 2:
//         console.log('Cartão Black adquirido!');
//         break;
//     case 3:
//         console.log('Cartão Platinum adquirido!');
//         break;
//     case 4:
//         console.log('Cartão Master Outro adquirido!');
//         break;
//     default:
//         console.log('Escolha uma das opções disponíveis.');
//         break;
// }

// EXERCÍCIO COMPLEMENTAR

let numero = +prompt('Escolha um número:');

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(`O número ${numero} é divisível por 2 e por 3.`);

    numero === 30 ? console.log('UFFA, acertei!') : console.log('Não foi dessa vez! :(');;

    switch (numero) {
        case 6:
            console.log('O número escolhido foi 6.');
            break;
        case 12:
            console.log('Você escolheu o número 12.');
            break;
        case 18:
            console.log('O numero 18 foi o escolhido.');
            break;
        case 24:
            console.log('Você escolheu o número 24.');
            break;
        case 30:
            console.log('O número escolhido foi 30.');
            break;
        default:
            console.log('O número é maior que 30 ou menor que 6.');
            break;
    }
} else {
    console.log(`${numero} não é divisível por 2 e por 3.`);
}
