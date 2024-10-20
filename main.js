document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector('.text-animation span');
    const textToAnimate = "< Frontend Developer /> ;";
    let index = 0;
    let typing = true;

    function type() {
        if (typing) {
            if (index < textToAnimate.length) {
                textElement.textContent += textToAnimate.charAt(index);
                index++;
                setTimeout(type, 100);
            } else {
                typing = false;
                setTimeout(type, 5000);
            }
        } else {
            if (index >= 0) {
                textElement.textContent = textToAnimate.slice(0, index);
                index--;
                setTimeout(type, 50);
            } else {
                typing = true;
                setTimeout(type, 500);
            }
        }
    }

    setTimeout(type, 200);
});
