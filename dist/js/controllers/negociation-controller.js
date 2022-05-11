import {Negociation} from '../models/negociation.js';
import {Negociations} from '../models/negociations.js';
import {viewMessage} from '../views/mensagem-view.js';
import {NegociationsView} from '../views/negociations-view.js';
import {WeekDays} from '../enums/weekDays.js';
export class NegociationController {
  constructor() {
    this.negociations = new Negociations();
    this.negociationsView = new NegociationsView('#negociations-view', true);
    this.viewMessage = new viewMessage('#mensagemView');
    this.inputDate = document.querySelector('#data');
    this.inputQuantity = document.querySelector('#quantidade');
    this.inputValue = document.querySelector('#valor');
  }
  add() {
    const negociation = this.createNegociation();
    if (!this.isWeekDay(negociation.date)) {
      this.viewMessage.update('Só é possivel fazer negociações em dias úteis');
      return;
    }
    this.negociations.add(negociation);
    this.negociationsView.update(this.negociations);
    this.clearForm();
    this.updateView();
  }
  isWeekDay(date) {
    return date.getDay() > WeekDays.DOMINGO && date.getDay() < WeekDays.SABAD0;
  }
  createNegociation() {
    const exp = /-/g;
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
  updateView() {
    this.negociationsView.update(this.negociations);
    this.viewMessage.update('Negociação Adicionada com Sucesso');
  }
}
