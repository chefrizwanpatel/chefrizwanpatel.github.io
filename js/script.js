function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {

            navbar.classList.add('navbar-sticky');
        } else {
            navbar.classList.remove('navbar-sticky');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);

$('#ecosystem .carousel .carousel-item').each(function () {
    var minPerSlide = 1;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i = 0; i < minPerSlide; i++) { 
        next=next.next(); 
        if (!next.length) { 
            next=$(this).siblings(':first'); 
        } 
        next.children(':first-child').clone().appendTo($(this));
     } 
});

