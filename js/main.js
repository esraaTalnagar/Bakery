const nav = document.getElementById('nav');
const img = document.getElementById('logo');
const ancor=document.querySelectorAll('.nav-link');

triggerPoint=200
navHeight=nav.offsetHeight
totalheight=triggerPoint-navHeight

// window.addEventListener('scroll', () => {

//     if(scrollY>totalheight){
//         nav.classList.add('bg-white','fixed-top');
//         nav.classList.remove('bg-transparent' ,'sticky-top');
//         ancor.forEach(a => a.classList.remove('text-white'));
//         ancor.forEach(a => a.classList.add('text-black'));
//         img.src='./img/bakery-color.png';
//     }
//     else{
//         nav.classList.add('bg-transparent','sticky-top');
//         nav.classList.remove('bg-white','fixed-top');
//         ancor.forEach(a => a.classList.remove('text-black'));
//         ancor.forEach(a => a.classList.add('text-white'));
//         img.src='./img/bakery-light-1.png';
//     }
// });

function navScroll (){
    if (scrollY === 0) {
        nav.classList.add('sticky-top');
        nav.classList.remove('fixed-top', 'bg-transparent');
        ancor.forEach(a => a.classList.add('text-black'));
        ancor.forEach(a => a.classList.remove('text-white'));
        img.src='./img/bakery-color.png';

    } else if (scrollY > navHeight && scrollY < triggerPoint) {
        nav.classList.add('fixed-top', 'bg-transparent');
        nav.classList.remove('sticky-top');
        ancor.forEach(a => a.classList.remove('text-black'));
        ancor.forEach(a => a.classList.add('text-white'));
        img.src='./img/bakery-light-1.png';
    } else if (scrollY > totalheight) {
        nav.classList.add('bg-white','fixed-top');
        nav.classList.remove('bg-transparent' ,'sticky-top');
        ancor.forEach(a => a.classList.remove('text-white'));
        ancor.forEach(a => a.classList.add('text-black'));
        img.src='./img/bakery-color.png';
    }
}
window.addEventListener('scroll', () => {
    navScroll();
});
