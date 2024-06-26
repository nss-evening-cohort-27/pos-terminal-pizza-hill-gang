import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orders';
import { signOut } from '../utils/auth';
import homePage from '../pages/homePage';
import createOrderForm from '../components/forms/createOrderForm';
// import createItemForm from '../components/forms/createItemsForm';

// prettier-ignore
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', () => {
    document.querySelector('#app').innerHTML = '';
    document.querySelector('.container-fluid').innerHTML = '';
    signOut();
  });

  document.querySelector('#view-orders').addEventListener('click', () => {
    console.warn('this should click to view orders from nav');
    getOrders().then(showOrders);
  });

  document.querySelector('#i-wish-i-could-see-the-world').addEventListener('click', () => {
    console.warn('this should click to view orders');
    getOrders().then(showOrders);
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    console.warn('this should click for create orders from nav link');
    createOrderForm();
  });

  document.querySelector('#create-order-btn').addEventListener('click', () => {
    console.warn('this should click for create orders');
    createOrderForm();
  });

  // document.querySelector('#edit-order-btn').addEventListener('click', () => {
  //   console.warn('this should click for edit orders');
  //   createItemForm();
  // });
  // LOGOUT BUTTON
  // document.querySelector('#logout-button').addEventListener('click', () => {
  //   console.warn('this click lets me know the logout button is clicking');
  //   signOut();
  // });

  // TODO: LOGO: NAVIGATE TO HOME PAGE (stillneeds an id form 'the nav html)
  document.querySelector('#nav-logo').addEventListener('click', () => {
    homePage();
  });
  // TODO: NAVIGATE TO VIEW ORDERS PAGE

  // document.querySelector('#view-orders').addEventListener('click', () => {
  //   // showOrders();
  //   console.warn('does this work');

  // if (e.target.id.includes('view-orders')) {
  //   console.warn('click me');
  // }
  // TODO: NAVIGATE TO CREATE ORDERS PAGE
  //   document.querySelector('#create-order').addEventListener('click', () => {
  //     getOrders().then(showOrders);
  //     // console.warn('CLICKED AUTHORS');
  //   });
  // });
  // STRETCH: SEARCH
  // document.querySelector('#search').addEventListener('keyup', (e) => {
  //   const searchValue = document.querySelector('#search').value.toLowerCase();
  //   console.warn(searchValue);

  // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
  //   if (e.keyCode === 13) {
  //     // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
  //     // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
  //     // OTHERWISE SHOW THE STORE

  //     document.querySelector('#search').value = '';
  //   }
  // });
};

export default navigationEvents;
