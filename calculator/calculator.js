let userNumber1;
let signInput;
let userNumber2;
let question;
let i = 1;
let result;
let main = document.querySelector("main");

function numberCalculator(sign) {

  switch (sign) {
    case '+':
      result = userNumber1 + userNumber2;
      break;
    case '-':
      result = userNumber1 - userNumber2;
      break;
    case '*':
      result = userNumber1 * userNumber2;
      break;
    case '/':
      result = userNumber1 / userNumber2;
      break;
    default:
      alert("The operator isn't valid. Use +, -, * or /");
      return;
  }
  main.innerHTML += `<li>${i}) ${userNumber1} ${sign} ${userNumber2} = ${result} </li>`;
};

do {
  userNumber1 = parseInt(prompt("Input first number below"));
  signInput = prompt("Input the desired operation sign");
  userNumber2 = parseInt(prompt("Input second number below"));
  numberCalculator(signInput);
  alert(`The result is ${result}`);
  question = prompt("Would you like to continue? Y/N");
  i++;
} while (question.toUpperCase() === "Y");

