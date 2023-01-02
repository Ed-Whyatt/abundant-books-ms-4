// Owl Carousel start function.
// Docs: https://owlcarousel2.github.io/OwlCarousel2/docs/started-installation.html
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 2,
    nav: false,
    autoplay: true,
    autoplayTimeout:4000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
});

// <!-- Toasts JS -->
let toastElList = [].slice.call(document.querySelectorAll('.toast'));
let toastList = toastElList.map(function (toastEl) {
    let option = {
         animation: true,
         autohide: true,
         delay: 10000,
    };
    let bsToast = new bootstrap.Toast(toastEl, option);
    bsToast.show();
});

// <!-- Script for back to top button -->
$('.back-to-top-link').click(function(e) {
    window.scrollTo(0, 0);
});
