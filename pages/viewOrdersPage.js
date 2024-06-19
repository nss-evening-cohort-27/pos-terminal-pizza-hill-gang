import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';
import { signIn } from '../utils/auth';

const viewOrdersPage = () => {
  clearDom();

  const userName = signIn();

  const domString = `
    <div id="viewOrders-page-container">
      <div id="viewOders-page-welcome-message">Welcome, ${userName}!</div>
      <div id="viewOrders-page-button-container">
       <button class="viewOrders-page-btn" id="viewOrders-page-view-revenue-btn">View Revenue</button>
        <button class="viewOrders-page-btn" id="viewOrders-page-create-an-order-form-btn">Create An Order</button>
        <button class="viewOrders-page-btn" id="viewOrders-page-view-btn">View Orders</button>
      </div>
    </div>
    `;
  renderToDom('#main-container', domString);
};

export default viewOrdersPage;
