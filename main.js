const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const headerOffset = document.querySelector('header').offsetHeight;

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

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        let offsetPosition;

        // Si es la sección de inicio, desplazamos al principio
        if (sectionId === '#home') {
            offsetPosition = 0; // Llevar a la parte superior de la página
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

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        scrollToSection(sectionId);
    });
});

// Ajustar el scroll al hacer clic en el nombre
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    scrollToSection('#home');
});

// Mover el evento de carga de DOM aquí
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("contactButton");

    button.onclick = function() {
        scrollToSection('#contact');
    };

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
    updateActiveLink(); // Llamar a esta función al cargar la página
});

window.addEventListener('scroll', updateActiveLink);
