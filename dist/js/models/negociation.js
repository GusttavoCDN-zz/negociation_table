export class Negociation {

  // * Utilização de campos privados em classes, não podem ser alterados sem getters ou setters.

  #data;
  #quantity;
  #value;

  constructor(data, quantity, value) {
    this.#data = data;
    this.#quantity = quantity;
    this.#value = value;
  }

  // * Getters me permite ler o valor de campos privados!
  get data() {
    return this.#data;
  }

  get quantity() {
    return this.#quantity;
  }

  get value() {
    return this.#value;
  }

}
