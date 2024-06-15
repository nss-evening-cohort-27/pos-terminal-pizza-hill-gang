import { signIn } from '../utils/auth';
import background from '../assets/background.png';
import logo from '../assets/logo.png';
import pizzaBit from '../assets/pizzaBit.png';
import waffleBit from '../assets/waffleBit.png';
import chickenBit from '../assets/chickenBit.png';

const logoString = `<img src="${logo}" class="food" alt="logo" id="login-logo"/>`;
const pizzaString = `<img src="${pizzaBit}" class="food" alt="pizza" id="pizza-bit">`;
const waffleString = `<img src="${waffleBit}" class="food"alt="waffle" id="waffle-bit">`;
const chickenString = `<img src="${chickenBit}" class="food" alt="chicken" id="chicken-bit">`;
// prettier-ignore
const loginButton = () => {
  const domString = `${logoString} <div><button id="google-auth-login" class="btn btn-danger">EMPLOYEE SIGN IN</button></div> <div id="food-sheet">${pizzaString} ${waffleString} ${chickenString}</div>
  `;
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth-login').addEventListener('click', signIn);
};

document.querySelector('body').style.backgroundImage = `url(${background})`;

export default loginButton;
