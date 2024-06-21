import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
// THIS IS THE FORM FOR BOTH CREATING AND UPDATING AN ORDER

const createOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-order--${obj.firebaseKey}` : 'submit-order'}" class="mb-4">
      <div class="form-group">
        <label for="orderName">Order Name</label>
        <input type="text" class="form-control" id="order-name" aria-describedby="ordername" placeholder="Enter Order name" value="${obj.orderName || ''}" required>
      </div>
      <div class="form-group">
        <label for="customerPhone">Customer Phone</label>
        <textarea class="form-control" placeholder="Customer Phone Number" id="customer-phone" style="height: 100px">${obj.customerPhone || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="CustomerEmail">Customer Email</label>
        <input type="text" class="form-control" id="customer-email" placeholder="Customer Email" value="${obj.customerEmail || ''}" required>
      </div>
      <div class="form-group">
        <label for="orderType">Order Type</label>
        <select class="form-control" id="order-type" required>
          <option value="call-in" ${obj.orderType === 'Call-In' ? 'selected' : ''}>Call-In</option>
          <option value="walk-in" ${obj.orderType === 'Walk-In' ? 'selected' : ''}>Walk-In</option>
        </select>
      </div> 
      <button type="submit" class="btn btn-primary">Create/Edit Order
      </button>
    </form>`;

  renderToDom('#app', domString);
};

export default createOrderForm;
