export class Negociation {

  // * O modificador private, impede em run time que o valor seja alterado.
  private _data;
  private _quantity;
  private _value;

  constructor(data, quantity, value) {
    this._data = data;
    this._quantity = quantity;
    this._value = value;
  }

  // * Getters me permitem ler o valor de campos privados!
  get data() {
    return this._data;
  }

  get quantity() {
    return this._quantity;
  }

  get value() {
    return this._value;
  }

}
