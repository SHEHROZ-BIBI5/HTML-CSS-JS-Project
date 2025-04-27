const display = document.querySelector(".value"); // Display element
const buttons = document.querySelectorAll("button"); // All buttons

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.dataset.button === 'C') {
             display.value = '';
        } else if (item.dataset.button === 'CE') {
             let string = display.value;
            display.value = string.substr(0, string.length - 1);
        } else if (item.dataset.button === '=') {
             try {
                display.value = eval(display.value); 
            } catch (e) {
                display.value = "Error"; 
            }
        } else {
             display.value += item.dataset.button;
        }
    };
});
