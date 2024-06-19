import { getOrders } from '../api/bookData';
import { signOut } from '../utils/auth';
import { showOrders } from '../pages/orders';

//WILL NEED A FUNCTION FOR GETTING ALL OF OUR ITEMS FOR AN ORDER

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // TODO: ALL ORDERS
  document.querySelector('#all-orders').addEventListener('click', () => {
    getOrders().then(showOrders);
    // console.warn('CLICKED ALL Orders');
  });

  // event listener for showing all order items
  document.querySelector('order-items').addEventListener('click', () => {
    getItems().then(showItems);
  });
  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE ORDERS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
