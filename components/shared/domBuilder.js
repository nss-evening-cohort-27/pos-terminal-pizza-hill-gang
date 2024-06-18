import renderToDOM from '../../utils/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="home-page"></div>
  `;
  renderToDOM('#app', domString);
};

export default domBuilder;
