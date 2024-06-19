// Will import fuction from api data
import { showOrders } from '../pages/orders';

// going to need createOrder updateOrder getOrders all from api.orderData

const formEvents = (user) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING Order Form
    if (e.target.id.includes('submit-order')) {
      const payload = {
        orderName: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        uid: user.id
      };

      //  Will rename create, update, and get functions once data fuctions are available.

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }
    // TODO: CLICK EVENT FOR EDITING Order Form
    if (e.target.id.includes('update-order')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        orderName: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders().then(showOrders);
      });
    }
  });
};

export default formEvents;
