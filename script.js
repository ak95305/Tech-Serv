let hamburgerIcon = document.querySelector('.hamburger');
let navListBox = document.querySelector('.nav-list');
let headerBar = document.querySelector('.header-bar');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('active');
    navListBox.classList.toggle('active');
    headerBar.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
});




let navLinkList = document.querySelectorAll('.nav-links li');
let navLinks = document.querySelector('.nav-links');
navLinkList.forEach((i) => {
    i.addEventListener('mouseover', () => {
        i.classList.add('active');
        navLinks.classList.add('active');
    })
    i.addEventListener('mouseout', () => {
        i.classList.remove('active');
        navLinks.classList.remove('active');
    })
});


AOS.init();


var scene1 = document.getElementById('crcl1');
var parallax1 = new Parallax(scene1);
var scene2 = document.getElementById('crcl2');
var parallax2 = new Parallax(scene2);
var scene3 = document.getElementById('crcl3');
var parallax3 = new Parallax(scene3);





$(document).ready(function () {
    $(".test-carousel").owlCarousel({
        items: 1,
        loop: false,
        nav: true,
        navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter
    });
    function counter(event) {
        var element = event.target;         // DOM element, in this example .owl-carousel
        var items = event.item.count;     // Number of items
        var item = event.item.index + 1;     // Position of the current item

        // it loop is true then reset counter from 1
        if (item > items) {
            item = item - items
        }
        $('#counter').html(item + " / " + items)
        let testLine = document.querySelector('.counter-line');
        let maxWidth;
        if(screen.width>=767){
            maxWidth = 500;
        } else if(screen.width>=425 && screen.width<=768){
            maxWidth = 225;
        } else{
            maxWidth = 125;
        }
        testLine.style.width = (item/items)*maxWidth + 'px';
        console.log(item, testLine);
    }
});




const element = document.querySelector('.right-line');
const observer = new IntersectionObserver(entries => {
  element.classList.toggle( 'animation', entries[0].isIntersecting );
});

observer.observe( element );