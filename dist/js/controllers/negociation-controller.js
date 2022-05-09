import { Negociation } from '../models/negociation.js';
import { Negociations } from '../models/negociations.js';
export class NegociationController {
    constructor() {
        this.negociations = new Negociations;
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const negociation = this.createNegociation();
        this.negociations.add(negociation);
        this.clearForm();
    }
    createNegociation() {
        const exp = /-/g; // * Regex para encontrar todos os - na data.
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
