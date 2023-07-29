let inputstring = "";

function isValidExpression(input) {
  // Check for multiple dots in a number
  return !(/\.\d*\./).test(input) &&
    // Check for valid operators at the end of the expression
    !/[\+\-\*\/]$/.test(input);
}

let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      if (isValidExpression(inputstring)) {
        inputstring = eval(inputstring);
        document.querySelector('input').value = inputstring;
      } else {
        document.querySelector('input').value = 'Error';
      }
    } else if (e.target.innerHTML === 'C') {
      inputstring = "";
      document.querySelector('input').value = inputstring;
    }
    else if(e.target.innerHTML=== '√')
    {
        inputstring = inputstring *inputstring
        document.querySelector('input').value = inputstring;
    }
    else if(e.target.innerHTML=== '∛')
    {
        inputstring = inputstring *inputstring * inputstring;
        document.querySelector('input').value = inputstring;
    }
     else {
      inputstring = inputstring + e.target.innerHTML;
      document.querySelector('input').value = inputstring;
    }
  });
});
