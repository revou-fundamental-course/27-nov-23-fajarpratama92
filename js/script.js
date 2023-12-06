// Get the input elements
const inputBase = document.getElementById('input-base');
const inputHeight = document.getElementById('input-height');
const inputSideA = document.getElementById('input-side-a');
const inputSideB = document.getElementById('input-side-b');
const inputSideC = document.getElementById('input-side-c');
const resultBoxArea = document.createElement('div');
const resultBoxPerimeter = document.createElement('div');

// Get the buttons
const calculateAreaButton = document.getElementById('calculate-Area');
const resetAreaButton = document.getElementById('reset-area');
const calculatePerimeterButton = document.getElementById('calculate-perimeter');
const resetPerimeterButton = document.getElementById('reset-perimeter');

// Attach event listeners to the buttons
calculateAreaButton.addEventListener('click', calculateArea);
resetAreaButton.addEventListener('click', resetAreaFields);
calculatePerimeterButton.addEventListener('click', calculatePerimeter);
resetPerimeterButton.addEventListener('click', resetPerimeterFields);

// Function to calculate the area of a triangle
function calculateArea() {
  const baseValue = Number(inputBase.value); // Convert input values to numbers
  const heightValue = Number(inputHeight.value);

  if (!isNaN(baseValue) && !isNaN(heightValue) && baseValue !== 0 && heightValue !== 0) { // Check if inputs are valid numbers
    const areaValue = (baseValue * heightValue) / 2; // Calculate the area

    // Create an empty array for storing calculation steps
    const calculationSteps = [];

    // Add the calculation steps to the array
    calculationSteps.push('Calculation steps:');
    calculationSteps.push('A = 1/2 x b x h');
    calculationSteps.push(`A = 1/2 x ${baseValue} x ${heightValue}`);
    calculationSteps.push(`A = ${areaValue}`);

    // Combine the calculation steps into a single string with HTML line breaks
    const calculationText = calculationSteps.join('\n').replace(/\n/g, '<br>');

    // Create a new div for displaying the calculation steps
    const calculationStepsDiv = document.createElement('div');
    calculationStepsDiv.style.textAlign = 'start'; // Set text alignment to center

    // Display the calculation text in the calculation div
    calculationStepsDiv.innerHTML = calculationText;

    // Clear the result box
    resultBoxArea.textContent = '';

    // Append the calculation div to the result box
    resultBoxArea.appendChild(calculationStepsDiv);
  } else {
    resultBoxArea.textContent = 'Invalid input. Please enter valid numbers.'; // Display error message
  }

  // Append the result box to the input area
  const inputArea = document.querySelector('#input-area');
  inputArea.insertBefore(resultBoxArea, document.querySelector('#area-buttons'));
}

// Function to calculate the perimeter of a triangle
function calculatePerimeter() {
  const aValue = Number(inputSideA.value); // Convert input values to numbers
  const bValue = Number(inputSideB.value);
  const cValue = Number(inputSideC.value);

  if (!isNaN(aValue) && !isNaN(bValue) && !isNaN(cValue) && aValue !== 0 && bValue !== 0 && cValue !== 0) { // Check if inputs are valid numbers
    const perimeterValue = aValue + bValue + cValue; // Calculate the area    

    // Create an empty array for storing calculation steps
    const calculationSteps = [];

    // Add the calculation steps to the array
    calculationSteps.push('Calculation steps:');
    calculationSteps.push('P= a + b + c');
    calculationSteps.push(`P= ${aValue} + ${bValue} + ${cValue}`);
    calculationSteps.push(`p = ${perimeterValue}`);

    // Combine the calculation steps into a single string with HTML line breaks
    const calculationText = calculationSteps.join('\n').replace(/\n/g, '<br>');

    // Create a new div for displaying the calculation steps
    const calculationStepsDiv = document.createElement('div');
    calculationStepsDiv.style.textAlign = 'start'; // Set text alignment to center

    // Display the calculation text in the calculation div
    calculationStepsDiv.innerHTML = calculationText;

    // Clear the result box
    resultBoxPerimeter.textContent = '';

    // Append the calculation div to the result box
    resultBoxPerimeter.appendChild(calculationStepsDiv);
  } else {
    resultBoxPerimeter.textContent = 'Invalid input. Please enter valid numbers.'; // Display error message
  }

  // Append the result box to the input area
  const inputPerimeter = document.querySelector('#input-perimeter');
  inputPerimeter.insertBefore(resultBoxPerimeter, document.querySelector('#perimeter-buttons'));
}

// Function to reset the input fields and result box
function resetAreaFields() {
  inputBase.value = '';
  inputHeight.value = '';
  resultBoxArea.textContent = ''; // Clear the result box
  resultBoxArea.parentNode.removeChild(resultBoxArea); // Remove the result box from the DOM
}

function resetPerimeterFields() {
  inputSideA.value = '';
  inputSideB.value = '';
  inputSideC.value = '';
  resultBoxPerimeter.textContent = ''; // Clear the result box
  resultBoxPerimeter.parentNode.removeChild(resultBoxPerimeter); // Remove the result box from the DOM
}
