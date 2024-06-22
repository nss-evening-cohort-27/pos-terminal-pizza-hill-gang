import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyItems = () => {
  const domString = 'No Item';
  renderToDom('#item-card-container', domString);
};

const showItems = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card item-card">
      <div class="card-body">
        <h3 class="card-title card-item-name">${item.itemName}</h3>
        <p class="card-text card-item-price">PRICE: $${item.price}</p>
        <i id="edit-item-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"> Edit</i>
        <i id="delete-item-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"> Delete</i>
        <button class="add-item-btn"" id="add-item-btn--${item.firebaseKey}">Add Item</button>
        <button class="add-item-btn"" id="add-item-btn--${item.firebaseKey}">Add Item</button>
        <button class="go-to-payment-btn" id="go-to-payment-btn--${item.firebaseKey}">Go To Payment</button>
      </div>
    </div>
    `;
  });
  renderToDom('#item-cards-container', domString);
};

export { emptyItems, showItems };
