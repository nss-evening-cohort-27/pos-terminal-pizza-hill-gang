import clearDom from "../../utils/clearDom";
import renderToDom from "../../utils/renderToDom";

//BUILD THE CLOSE ORDER FORM - THIS CREATES A PAYMENT IN THE DATABASE - FORM SHOULD HAVE PAYMENT TYPE AND payment type should be a dropdown with cash, credi or mobile. and second input should be tip amount.

const closeOrderForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="close-order" class="mb-4">
      <div class="form-group">
        <label for="payment type">Payment Type</label>
        <select class="form-control" id="payment-type" required>
          <option value="cash" ${obj.paymentType === 'cash' ? 'selected' : ''}>cash</option></select>
          <option value="credit" ${obj.paymentType === 'credit' ? 'selected' : ''}>credit</option></select>
          <option value="mobile" ${obj.paymentType === 'mobile' ? 'selected' : ''}>mobile</option></select>
      </div>
      <div class="form-group">
        <label for="tip amount">Tip Amount</label>
        <input type="text" class="form-control" id="tip-amount" placeholder="Tip Amount" value="${obj.tipAmount || ''}" required>
      </div>
      <button type="submit" class="btn btn-primary mt-3">Close Order</button>
    </form>`;

  renderToDom('#form-container', domString);
};

export default closeOrderForm;
