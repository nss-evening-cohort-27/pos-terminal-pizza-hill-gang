import clearDom from '../../utils/clearDom';
import renderToDom from '../../utils/renderToDom';
// THIS IS THE FORM FOR BOTH CREATING AND UPDATING AN Items

const createItemForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-item--${obj.firebaseKey}` : 'submit-item'}" class="mb-4">
      <div class="form-group">
        <label for="itemName">Item Name</label>
        <input type="text" class="form-control" id="item-name" aria-describedby="itemName" placeholder="Enter Item name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="priceItem">item price</label>
        <textarea class="form-control" placeholder="" id="item-price" style="height: 100px">${obj.price || ''}</textarea>
      </div>
      <button id="submit-item-btn" type="submit" class="btn btn-primary">Add/Edit Item
      </button>
    </form>`;

  renderToDom('#app', domString);
};

export default createItemForm;
