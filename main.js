const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const headerOffset = document.querySelector('header').offsetHeight;

// Function to update the active link in the navigation based on the scroll position
function updateActiveLink() {
    let currentSection = '';

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');  
        }
    });

    if (scrollY === 0 || scrollY < 50) {
        currentSection = 'home';
    }

    navLinks.forEach((link) => {
        link.classList.remove('active');
        
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Function to smoothly scroll to a specific section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        let offsetPosition;

        if (sectionId === '#home') {
            offsetPosition = 0;
        } else {
            const sectionPosition = section.offsetTop;
            offsetPosition = sectionPosition - headerOffset;
        }

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });

        history.pushState(null, '', sectionId);
        setTimeout(updateActiveLink, 100);
    }
}

// Adds a click event to each navigation link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        scrollToSection(sectionId);
    });
});

// Adjusts the scroll when clicking on the name
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToSection('#home');
});

// Move the DOM content loaded event here
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("contactButton");

    button.onclick = function() {
        scrollToSection('#contact');
    };

    const textElement = document.querySelector('.text-animation span');
    const textToAnimate = "< Frontend Developer /> ;";
    let index = 0;
    let typing = true;

// Function to animate the text
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
    updateActiveLink();
});

// Listens for the scroll event to update the active link
window.addEventListener('scroll', updateActiveLink);
