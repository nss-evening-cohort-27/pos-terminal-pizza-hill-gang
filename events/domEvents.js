import {
  deleteOrder,
  getOrders,
  getSingleOrder,
  getOrderItems,
} from '../api/orderData';
import createItemForm from '../components/forms/createItemsForm';
// import createItemForm from '../components/forms/createItemsForm';
import createOrderForm from '../components/forms/createOrderForm';
import { showItems } from '../pages/items';
import { showOrders } from '../pages/orders';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-item')) {
      // const [, firebaseKey] = e.target.id.split('--');

      // getSingleOrder(firebaseKey).then(() => createItemForm());
    }

    // TODO: CLICK EVENT FOR DELETING A ORDER
    if (e.target.id.includes('delete-order-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        console.warn(e.target.id.split('--'));
        const [, firebaseKey] = e.target.id.split('--');
        deleteOrder(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }

    // prettier-ignore
    if (e.target.id.includes('view-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getOrderItems(firebaseKey).then(showItems);
      console.warn('firebasekey', getOrderItems(firebaseKey));
    }

    // prettier-ignore
    if (e.target.id.includes('edit-order-btn')) {
      console.warn('EDIT ORDER', e.target.id);
      console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((order) => createOrderForm(order));
    }

    if (e.target.id.includes('add-item-btn')) {
      console.warn('This is an add item button');
      createItemForm();
    }
  });
};

export default domEvents;
