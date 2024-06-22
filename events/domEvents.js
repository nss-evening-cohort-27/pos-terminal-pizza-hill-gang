import { deleteOrder, getOrders, getSingleOrder } from '../api/orderData';
import createItemForm from '../components/forms/createItemsForm';
import createOrderForm from '../components/forms/createOrderForm';
import { emptyItems, showItems } from '../pages/items';
import { showOrders } from '../pages/orders';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then(() => createItemForm());
      console.warn('EDIT item', e.target.id);
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
    // TODO: CLICK EVENT EDITING/UPDATING A ORDER
    if (e.target.id.includes('edit-order-btn')) {
      console.warn('EDIT ORDER', e.target.id);
      console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((order) => (createOrderForm(order)));
    }
    if (e.target.id.includes('view-order-btn')) {
      console.warn('VIEW YOUR ITEM', e.target.id);
      console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');
      emptyItems(firebaseKey).then((item) => (showItems(item)));
    }
  });
};

export default domEvents;
