import Warrior from './Warrior';
import Mage from './Mage';
import Personagem from './Personagem';

let warrior: Personagem = new Warrior('Iago warrior');
let mage: Personagem = new Mage('Iago mage');

const personagens: Personagem[] = [];
personagens.push(warrior);
personagens.push(mage);

personagens.forEach((p) => {
  console.log(p.atacar());
});