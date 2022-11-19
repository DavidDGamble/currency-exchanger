import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './js/currency-api.js';

async function convertUS(dollars, code) {
  const response = await CurrencyConverter.convertUS(dollars, code);
  if (response.result === 'success') {
    printUSElements(response, dollars, code);
  } else {
    printUSError(response);
  }
}

async function convertAll(dollars, curr, code) {
  const response = await CurrencyConverter.convertAll(dollars, curr, code);
  if (response.result === 'success') {
    printAllElements(response, dollars, curr, code);
  } else {
    printAllError(response);
  }
}

const printUSElements = (response, dollars, code) => {
  document.getElementById('display').innerHTML = `$${parseFloat(dollars).toFixed(2)} = ${response.conversion_result.toFixed(2)} ${code}`;
};

const printAllElements = (response, dollars, curr, code) => {
  document.getElementById('display2').innerHTML = `${parseFloat(dollars).toFixed(2)} ${curr} = ${response.conversion_result.toFixed(2)} ${code}`;
};

const printUSError = (response) => {
  document.getElementById('display').innerHTML = response;
};

const printAllError = (response) => {
  document.getElementById('display2').innerHTML = response;
};

const handleSubmit = (event) => {
  event.preventDefault();
  let userDollars = document.getElementById('dollars').value;
  const userCode = document.getElementById('code').value.toUpperCase();
  if (userDollars === '') {
    userDollars = '0';
  }
  convertUS(userDollars, userCode);
};

const handleSubmit2 = (event) => {
  event.preventDefault();
  let userDollars = document.getElementById('dollars2').value;
  const userCurrency = document.getElementById('curr').value.toUpperCase();
  const userCode = document.getElementById('code2').value.toUpperCase();
  if (userDollars === '') {
    userDollars = '0';
  }
  convertAll(userDollars, userCurrency, userCode);
};

addEventListener('load', function() {
  document.getElementById('form1').addEventListener('submit', handleSubmit);
  document.getElementById('form2').addEventListener('submit', handleSubmit2);
});