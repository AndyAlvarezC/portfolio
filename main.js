const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const headerOffset = document.querySelector('header').offsetHeight;

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add('active');
        observer.unobserve(entry.target); 
    });
}, revealOptions);

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

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    sections.forEach(section => {
        section.classList.add('reveal');
        revealOnScroll.observe(section);
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href');
            scrollToSection(sectionId);
        });
    });

    const contactButton = document.getElementById("contactButton");
    if (contactButton) {
        contactButton.onclick = function() {
            scrollToSection('#contact');
        };
    }

    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('#home');
        });
    }

    const textElement = document.querySelector('.text-animation span');
    if (textElement) {
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
    }

    updateActiveLink();
});

window.addEventListener('scroll', updateActiveLink);