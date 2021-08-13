"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Personagem = /** @class */ (function () {
    function Personagem(nome, vida, energia, ataque, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.energia = energia;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem;
}());
;
var keyboard = prompt_sync_1.default();
var option = 0;
var homemAranha = new Personagem('Homem aranha', 100, 100, 80, 70);
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
exports.default = Personagem;
