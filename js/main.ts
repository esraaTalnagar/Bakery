const navbar = document.getElementById('nav');
const logoImg = document.getElementById('logo');
const anchors = document.querySelectorAll('.nav-link');

const triggerPoint=200
const navHeight = navbar ? navbar.offsetHeight : 0;
const totalheight = triggerPoint - navHeight;


window.addEventListener('scroll', () => {
    function navScroll() {
        if (window.scrollY > totalheight) {
            if (navbar) {
                navbar.classList.add('bg-white', 'fixed-top');
                navbar.classList.remove('bg-transparent', 'sticky-top');
            }
            anchors.forEach(a => a.classList.remove('text-white'));
            anchors.forEach(a => a.classList.add('text-black'));
            if (logoImg instanceof HTMLImageElement) {
                logoImg.src = './img/bakery-color.png';
            }
        }
    }
    navScroll();
    ;})

