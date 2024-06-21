import domBuilder from '../components/shared/domBuilder';
import homePage from '../pages/homePage';
import navigationEvents from '../events/navigationEvents';
import navBar from '../navBar';
import formEvents from '../events/formEvents';

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
  navigationEvents();
  formEvents();
};

export default startApp;
