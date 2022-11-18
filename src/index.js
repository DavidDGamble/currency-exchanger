import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './js/currency-api.js';

async function convert(dollars, code) {
  const response = await CurrencyConverter.convert(dollars, code);
  if (response.result === 'success') {
    printElements(response, dollars, code);
  } else {
    printError(response);
  }
}

const printElements = (response, dollars, code) => {
  document.getElementById('display').innerHTML = `$${parseInt(dollars).toFixed(2)} = ${response.conversion_result.toFixed(2)} ${code}`;
};

const printError = (response) => {
  document.getElementById('display').innerHTML = response;
};

const handleSubmit = (event) => {
  event.preventDefault();
  const userDollars = document.getElementById('dollars').value;
  const userCode = document.getElementById('code').value.toUpperCase();
  convert(userDollars, userCode);
};

addEventListener('load', function() {
  document.querySelector('form').addEventListener('submit', handleSubmit);
});