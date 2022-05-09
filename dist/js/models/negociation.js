export class Negociation {
    constructor(data, quantity, value) {
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
