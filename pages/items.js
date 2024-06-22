import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const emptyItems = () => {
  const domString = 'No Item';
  renderToDom('#app', domString);
};

// prettier-ignore
const showItems = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card item-card">
      <div class="card-body">
        <h2 class="card-title card-item-name">${item.name}</h2>
        <p class="card-text card-item-price">moolah: ${item.price}</p>
        <button id="edit-item-btn--${item.itemId}" class="fas btn btn-info"> Edit</button>
        <button id="delete-item-btn--${item.itemId}" class="btn btn-danger fas"> Delete</button>
      </div>
    </div>
    `;
  });
  renderToDom('#app', domString);
};

export { emptyItems, showItems };
