import prompt from 'prompt-sync';

import Personagem from './Personagem';

var keyboard = prompt();
let option = 0;

let person = new Personagem('Homem aranha', 100, 40, 20, 20);

while (option != 9) {
  console.log(`+========= Personagem ${person.getNome} =============+`);
  console.log('|1. Treinar ataque                 |');
  console.log('|2. Treinar defesa                 |');
  console.log('|3. Descansar                      |');
  console.log('|4. Entrar em batalha              |');
  console.log('|8. Imprimir atributos             |');
  console.log('|9. Sair                           |');
  console.log('+==================================+');

  option = +keyboard('Escolha uma ação: ');
  console.log('\n');

  switch (option) {
    case 1:
      person.treinarAtacar();
      console.log(person.status());
      break;
    case 2:
      person.treinarDefesa();
      console.log(person.status());
      break;
    case 3:
      let horas: number = +keyboard("Digite o número de horas: ");
      person.descansar(horas);
      console.log(person.status());
      break;
    case 4:
      let rest: number = person.batalhar();
      console.log(`Esta batalha custo ${rest} de energia`);

      console.log(person.status());
      break;
    case 8:
      console.log(person.status());
      break;
    default:
      break;
  }
}