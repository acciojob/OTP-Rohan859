//your JS code here. If required.
// Select all input fields
const inputs = document.querySelectorAll('.code');

// Loop over each input field
inputs.forEach((input, index) => {
    // Add keyup event listener
    input.addEventListener('keyup', (e) => {
        // If key entered is a number, focus on next input field
        if(e.key >= 0 && e.key <= 9) {
            if(index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
        // If key is not a number, clear the input field
        else {
            input.value = '';
        }
    });

    // Add keydown event listener
    input.addEventListener('keydown', (e) => {
        // If backspace is pressed, focus on previous input field
        if(e.key === 'Backspace') {
            if(index > 0) {
				inputs[index].value=' ';
                inputs[index - 1].focus();
            }
        }
    });
});