import domBuilder from '../components/shared/domBuilder';
import homePage from '../pages/homePage';
import navigationEvents from '../events/navigationEvents';
import navBar from '../navBar';
import formEvents from '../events/formEvents';
import domEvents from '../events/domEvents';
import logoutButton from '../components/logoutButton';

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
  logoutButton();
  navigationEvents();
  formEvents();
  domEvents();
};

export default startApp;
