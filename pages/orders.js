import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = 'No Orders';
  renderToDom('#orders', domString);
};

const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((order) => {
    if (order.open === true) {
      domString += `
      <div class="card">
        <div class="card-body">
          <h2 class="card-title card-order-name">${order.orderName}</h2>
          <p class="card-text card-order-status">Order Status: Open</p>
          <p class="card-text card-phone-number">Customer Phone Number: ${order.phoneNumber}</p>
          <p class="card-text card-email-address">Customer Email Address: ${order.email}</p>
          <p class="card-text card-order-type">Order Type: ${order.orderType}</p>
          <button id="view-order-btn--${order.firebaseKey}" class="btn btn-link">Details</button>
          <button id="edit-order-btn--${order.firebaseKey}" class="btn btn-link">Edit</button>
          <button id="delete-order-btn--${order.firebaseKey}" class="btn btn-link">Delete</button>
        </div>
      </div>
      `;
    } else {
      domString += `
      <div class="card">
        <div class="card-body">
          <h2 class="card-title card-order-name">${order.orderName}</h2>
          <p class="card-text card-order-status">Order Status: Closed</p>
          <p class="card-text card-phone-number">Customer Phone Number: ${order.phoneNumber}</p>
          <p class="card-text card-email-address">Customer Email Address: ${order.email}</p>
          <p class="card-text card-order-type">Order Type: ${order.orderType}</p>
          <button id="view-order-btn--${order.firebaseKey}" class="btn btn-link">Details</button>
          <button id="edit-order-btn--${order.firebaseKey}" class="btn btn-link">Edit</button>
          <button id="delete-order-btn--${order.firebaseKey}" class="btn btn-link">Delete</button>
        </div>
      </div>
      `;
    }
  });
  renderToDom('#orders', domString);
};

export { emptyOrders, showOrders };
