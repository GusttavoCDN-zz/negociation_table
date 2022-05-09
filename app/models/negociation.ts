export class Negociation {
  // * O modificador private, impede em run time que o valor seja alterado.
  private date: Date;
  private _quantity: number;
  private _value: number;

  constructor(data: Date, quantity: number, value: number) {
    this.date = data;
    this._quantity = quantity;
    this._value = value;
  }

  // * Getters me permitem ler o valor de campos privados!
  get data() {
    return this.date;
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }
}
