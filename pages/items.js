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
        <link id="edit-item-btn--${item.itemId}"> Edit</link>
        <link id="delete-item-btn--${item.itemId}"> Delete</link>
      </div>
    </div>
    `;
  });
  renderToDom('#app', domString);
};

export { emptyItems, showItems };
