import {NegociationController} from './controllers/negociation-controller.js';
import {NegociationsView} from './views/negociations-view.js';

const controller = new NegociationController();
const form = document.querySelector('.form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    controller.add();
  });
} else {
  throw Error('Form invalido, verifique a aplicação, não foi possivel Inicializar');
}
