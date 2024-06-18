import domBuilder from '../../components/shared/domBuilder';
import homePage from '../../pages/homePage';

const startApp = () => {
  domBuilder();

  homePage().then();
};

export default startApp;
