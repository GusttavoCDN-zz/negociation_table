import { Negociations } from '../models/negociations.js';
import { View } from './view.js';

export class NegociationsView extends View<Negociations> {
  // * Template para criar de formas dinamicas uma tabela com dados de Negociação.
  // * Utilizando InnerHTMl foi possivel fazer de forma declariva, inspirado no React
  template(model: Negociations): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
        </head>
        <tbody>
          ${model
            .list()
            .map((negociation) => {
              return `
              <tr>
                <td>${negociation.date.toLocaleDateString()}</td>
                <td>${negociation.quantity}</td>
                <td>${negociation.value}</td>
              </tr>

            `;
            })
            .join('')}
        </tbody>
      </table>
      `;
  }

  update(model: Negociations): void {
    const template = this.template(model);
    this.element.innerHTML = template;
  }
}
