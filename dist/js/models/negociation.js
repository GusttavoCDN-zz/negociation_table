export class Negociation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get date() {
        const newDate = new Date(this._date.getTime());
        return newDate;
    }
    get volume() {
        return this.quantity * this.value;
    }
}
