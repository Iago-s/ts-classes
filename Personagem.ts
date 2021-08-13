import prompt from 'prompt-sync';

class Personagem {
  constructor(
    public nome: string,
    public vida: number,
    public energia: number,
    public ataque: number,
    public defesa: number,
  ) { }
};

var keyboard = prompt();
let option = 0;

let homemAranha = new Personagem('Homem aranha', 100, 100, 80, 70);

while (option != 9) {
  console.log('+========= Personagem =============+');
  console.log('|1. Treinar ataque                 |');
  console.log('|2. Treinar defesa                 |');
  console.log('|3. Imprimir atributos             |');
  console.log('|9. Sair                           |');
  console.log('+==================================+');

  console.log('\n');
  option = +keyboard('Escolha uma ação: ');
  console.log('\n');

  switch (option) {
    case 1:
      homemAranha.ataque += 2;
      break;
    case 2:
      homemAranha.defesa += 2;
      break;
    case 3:
      console.log("Homem Aranha :>> ", homemAranha);
      break;
    default:
      break;
  }
}

export default Personagem;