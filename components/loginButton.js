import { signIn } from '../utils/auth';
import background from '../assets/background.png';
import logo from '../assets/logo.png';
import pizzaBit from '../assets/pizzaBit.png';
// import waffleBit from '../assets/waffleBit.png';
// import chickenBit from '../assets/chickenBit.png';

const logoString = `<img src="${logo}" alt="logo" id="login-logo"/>`;
const pizzaString = `<img src="${pizzaBit}" alt="pizza" id="pizza-bit"/>`;
// prettier-ignore
const loginButton = () => {
  const domString = `${logoString} ${pizzaString}`;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth-login').addEventListener('click', signIn);
};

document.querySelector('body').style.backgroundImage = `url(${background})`;

export default loginButton;
