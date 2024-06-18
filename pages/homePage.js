import renderToDom from '../utils/renderToDom';
import clearDom from '../utils/clearDom';

const homePage = () => {
  clearDom();
  let homeString = '';
  homeString += `<div id="home-page" class="card">
        <div class="card-body">
          <h1 class="card-title">Welcome, user-name!</h1></div>
          <div id="home-buttons"> <button type="button" id="view-order-btn" class="btn btn-success">View Orders</button>
          <button type="button" id="create-order-btn" class="btn btn-info">Create an Order</button>
          <button type="button" id="view-revenue-btn" class="btn btn-warning">View/Revenue</button>
        </div>
      </div>`;
  renderToDom('#app', homeString);
};

export default homePage;