import { getSingleOrder } from '../api/orderData';
import createItemForm from '../components/forms/createItemsForm';

const domEvents = () => {
  document.querySelector('#app').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-order-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleOrder(firebaseKey).then(() => createItemForm());
      console.warn('EDIT item', e.target.id);
    }
  });
};

export default domEvents;
