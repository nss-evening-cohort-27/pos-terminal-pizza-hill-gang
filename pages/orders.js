import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = 'No Orders';
  renderToDom('#orders', domString);
};

// prettier-ignore
const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((order) => {
    domString += `
      <div class="card order">
        <div class="card-body">
          <h2 class="card-title card-order-name">${order.orderName}</h2>
          <p class="card-text card-order-status">order status: ${order.orderStatus}</p>
          <p class="card-text card-phone-number">customer phone number: ${order.customerPhone}</p>
          <p class="card-text card-email-address">customer email address: ${order.customerEmail}</p>
          <p class="card-text card-order-type">order type: ${order.orderType}</p>
          <button id="view-order-btn--${order.firebaseKey}" class="btn btn-link">Details</button>
          <button id="edit-order-btn--${order.firebaseKey}" class="btn btn-link">Edit</button>
          <button id="delete-order-btn--${order.firebaseKey}" class="btn btn-link">Delete</button>
        </div>
      </div>
      `;
  });
  renderToDom('#app', domString);
};

export { emptyOrders, showOrders };
