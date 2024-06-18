import domBuilder from '../../components/shared/domBuilder';
import navBar from '../../navBar';
import homePage from '../../pages/homePage';

const startApp = () => {
  domBuilder();
  navBar();
  homePage();
};

export default startApp;
