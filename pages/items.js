import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyItems = () => {
  const domString = 'No Item';
  renderToDom('#app', domString);
};

// prettier-ignore
const showItems = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card item-card">
      <div class="card-body">
        <h2 class="card-title card-item-name">${item.orderName}</h2>
        <p class="card-text card-item-price">status: ${item.orderType} <br> customer #: ${item.customerPhone} <br> customer email: ${item.customerEmail} <br> ${item.orderType} </p>
        <button id="edit-item-btn--${item.firebaseKey}" class="fas btn btn-info"> Edit</button>
        <button id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger fas"> Delete</button>
        <button class="add-item-btn"" id="add-item-btn--${item.firebaseKey}">Add Item</button>
      </div>
    </div>
    `;
  });
  renderToDom('#app', domString);
};

export { emptyItems, showItems };
