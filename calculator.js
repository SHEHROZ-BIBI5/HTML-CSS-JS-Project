const display = document.querySelector(".value"); // Display element
const buttons = document.querySelectorAll("button"); // All buttons

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.dataset.button === 'C') {
            // "C" دبانے پر اسکرین خالی
            display.value = '';
        } else if (item.dataset.button === 'CE') {
            // "CE" دبانے پر آخری نمبر ہٹائیں
            let string = display.value;
            display.value = string.substr(0, string.length - 1);
        } else if (item.dataset.button === '=') {
            // "=" دبانے پر حساب لگائیں
            try {
                display.value = eval(display.value); 
            } catch (e) {
                display.value = "Error"; 
            }
        } else {
            // باقی سب بٹن اسکرین میں شامل کریں
            display.value += item.dataset.button;
        }
    };
});
