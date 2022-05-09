export class Negociation {
    // * O modificador private, impede em run time que o valor seja alterado.
    // constructor (
    //   private _date: Date,
    //   private _quantity: number,
    //   private _value: number
    // ) {}
    // * Método de atribuir variveis privadas sem o private. O readonly impede que as variaveis sejam alteradas e retira a necessidade de utilização de getters!
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    // * Aplicado programação defensiva para impedir que o Date seja alterado. Mesmo utilizando o readonly, ainda é possivel alterar o valor de objetos utilizando alguns métodos nativos. Então criados uma nova instancia a partir da original para impedir esse tipo de coisa.
    get date() {
        const newDate = new Date(this._date.getTime());
        return newDate;
    }
    get volume() {
        return this.quantity * this.value;
    }
}
