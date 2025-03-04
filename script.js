// Select the DOM elements
const inputElement = document.getElementById('ip');
const start = document.getElementById('btn');
const outputElement = document.getElementById('output');

function performOperations(inputNumber) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(inputNumber);
	}, 2000);
  })
  .then(result => {
    outputElement.innerHTML = `Result: ${result}`;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(result * 2); 
      }, 2000);
    });
  })
  .then(result => {
    outputElement.innerHTML = `Result: ${result}`;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(result - 3);
      }, 1000);
    });
  })
  .then(result => {
    outputElement.innerHTML = `Result: ${result}`;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(result / 2);
      }, 1000);
    });
  })
  .then(result => {
    outputElement.innerHTML = `Result: ${result}`;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(result + 10);
      }, 1000);
    });
  })
  .then(finalResult => {
    outputElement.innerHTML = `Final Result: ${finalResult}`;
  });
}


start.addEventListener('click', () => {
  const inputValue = parseFloat(inputElement.value); 
	// Get the input value
  if (!isNaN(inputValue)) {
    performOperations(inputValue); 
	  // Perform operations with the input value
  } 
  // else {
    // outputElement.innerHTML = 'Please enter a valid number.';
  // }
});
