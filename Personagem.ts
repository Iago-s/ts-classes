class Personagem {
  constructor(
    private _nome: string,
    private _vida: number,
    private _energia: number,
    private _ataque: number,
    private _defesa: number,
  ) { }

  public get getNome(): string {
    return this._nome;
  }

  public set setNome(nome: string) {
    this._nome = nome;
  }

  public status(): string {
    return (
      'Guerreiro: \n' +
      '\nNome: ' +
      this._nome +
      ('\nEnergia: ' + this._energia.toFixed(1)) +
      ('\nAtaque: ' + this._ataque.toFixed(1)) +
      ('\nDefesa: ' + this._defesa.toFixed(1))
    );
  }

  public treinarAtacar(): void {
    this._ataque += this.numeroAleatorio(7);
    this._energia -= this.numeroAleatorio(10);
    if (this._defesa > 100) {
      this._defesa = 0;
    }
  }

  public treinarDefesa(): void {
    this._defesa += this.numeroAleatorio(5);
    this._energia -= this.numeroAleatorio(10);
    if (this._defesa > 100) {
      this._defesa = 0;
    }
  }

  public descansar(hour: number): void {
    this._energia += hour * this.numeroAleatorio(10);
    if (this._energia > 100) {
      this._energia = 100;
    }
  }

  public batalhar(): number {
    let desgaste: number = this.numeroAleatorio(100);
    this._energia -= desgaste;
    return desgaste;
  }

  estarMorto(): boolean {
    return this._energia < 0;
  }

  private numeroAleatorio(factor: number): number{
    return Math.random() * factor;
  }
};

export default Personagem;
