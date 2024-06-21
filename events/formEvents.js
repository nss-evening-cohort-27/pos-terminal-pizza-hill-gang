import { createOrders, updateOrder, getOrders } from '../api/orderData';
import { showOrders } from '../pages/orders';

const formEvents = () => {
  document.querySelector('#app').addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: CLICK EVENT FOR SUBMITTING Order Form
    if (e.target.id.includes('submit')) {
      console.warn('this button works');
      const payload = {
        orderName: document.querySelector('#order-name').value,
        customerPhone: document.querySelector('#customer-phone').value,
        customerEmail: document.querySelector('#customer-email').value,
      };

      //  Will rename create, update, and get functions once data fuctions are available.

      createOrders(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }
    // TODO: CLICK EVENT FOR EDITING Order Form
    // if (e.target.id.includes('update-order')) {
    //   const [, firebaseKey] = e.target.id.split('--');
    //   const payload = {
    //     orderName: document.querySelector('#order-name').value,
    //     customerPhone: document.querySelector('#customer-phone').value,
    //     customerEmail: document.querySelector('#customer-email').value,
    //     firebaseKey,
    //   };
    //   updateOrder(payload).then(() => {
    //     getOrders().then(showOrders);
    //   });
    // }
  });
};

export default formEvents;
