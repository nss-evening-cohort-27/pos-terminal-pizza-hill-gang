import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="app"></div>
  `;
  document.getElementById('login-form-container').innerHTML = '';
  renderToDOM('#app', domString);
};

export default domBuilder;
