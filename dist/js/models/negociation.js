export class Negociation {
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
