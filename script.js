// Initializing variable to store result
let result = "";

// Function to add characters to input
function appendToResult(value) {
  result += value;
  updateOutput();
}

// Function to update the output display with the current result
function updateOutput() {
  const outputElement = document.getElementById("output-value");
  outputElement.textContent = result;
}

// Function to clear result
function clearResult() {
  result = "";
  updateOutput();
}

// Function to delete the last character from the result
function deleteLastCharacter() {
  result = result.slice(0, -1);
  updateOutput();
}

// Function to calculate the result and display it
function calculateResult() {
  try {
     // Evaluate the input expression and display the result
    let expression = result.replace(/%/g, '*0.01');
    result = eval(expression);
    updateOutput();
  } catch (error) {
    // Handle errors by displaying 'Error'
    result = "Error";
    updateOutput();
  }
}
