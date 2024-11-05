const display = document.getElementById('display');

function appendToDisplay(value) {
  if (display.value === '0' || display.value === 'Error') {
    display.value = value; 
  } 
  else {
    display.value += value; 
  }
}

function clearDisplay() {
  display.value = '0';
}

function deleteLast() {
  display.value = display.value.slice(0, -1) || '0'; 
}

function calculate() {
  try {
    display.value = eval(display.value) || '0'; 
  } 
  catch (error) {
    display.value = 'Error'; 
  }
}
