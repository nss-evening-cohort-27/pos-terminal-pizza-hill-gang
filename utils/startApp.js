import domBuilder from '../components/shared/domBuilder';
import homePage from '../pages/homePage';
import navigationEvents from '../events/navigationEvents';
import navBar from '../navBar';

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
  navigationEvents();
};

export default startApp;
