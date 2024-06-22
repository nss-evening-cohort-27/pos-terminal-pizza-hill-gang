import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';
import { getOrders } from '../api/orderData';
import { showOrders } from './orders';
import createOrderForm from '../components/forms/createOrderForm';

const userName = () => 'Name';

const homePage = (user) => {
  clearDom();
  let homeString = '';
  homeString += `<div id="home-page" class="card">
        <div class="card-body">
          <h1 class="card-title">Welcome, ${userName(user)} </h1></div>
          <div id="home-buttons"> 
          <button type="button" id="i-wish-i-could-see-the-world" class="btn btn-success">View Orders</button>
          <button type="button" id="create-order-btn" class="btn btn-info">Create an Order</button>
          <button type="button" id="view-revenue-btn" class="btn btn-warning">View/Revenue</button>
        </div>
      </div>`;
  renderToDom('#app', homeString);
  document
    .querySelector('#i-wish-i-could-see-the-world')
    .addEventListener('click', () => {
      console.warn('this should click to view orders from home page button');
      getOrders().then(showOrders);
    });
  document.querySelector('#create-order-btn')
    .addEventListener('click', () => {
      console.warn('this should click to go to create order form from home page button');
      createOrderForm();
    });
};

export { homePage as default, userName };
