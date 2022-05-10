export class NegociationsView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    template(model) {
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
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
