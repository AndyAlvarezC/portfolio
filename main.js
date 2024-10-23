const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const homeScrollThreshold = 50;

function updateActiveLink() {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;  
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');  
        }
    });

    if (scrollY === 0 || scrollY < homeScrollThreshold) {
        currentSection = 'home';
    }

    navLinks.forEach((link) => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, 'home', sectionId);
        setTimeout(updateActiveLink, 100);
    }
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    const headerOffset = document.querySelector('header').offsetHeight;
    const sectionPosition = section.offsetTop;

    const offsetPosition = sectionPosition - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });

    history.pushState(null, 'about', sectionId);
    setTimeout(updateActiveLink, 100);
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        scrollToSection(sectionId);
    });
});

document.querySelector('a[href="#home"]').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToSection('#home');
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("contactButton");

    button.onclick = function() {
        window.location.href = "#contact";
    };
});

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

document.addEventListener('DOMContentLoaded', function() {
    updateActiveLink();
})