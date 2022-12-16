// Owl Carousel start function.
// Docs: https://owlcarousel2.github.io/OwlCarousel2/docs/started-installation.html
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 2,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        750: {
            items: 2
        },
        1000: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
})

// <!-- Toasts JS -->
let toastElList = [].slice.call(document.querySelectorAll('.toast'))
let toastList = toastElList.map(function (toastEl) {
    let option = {
         animation: true,
         autohide: true,
         delay: 10000,
    }
    let bsToast = new bootstrap.Toast(toastEl, option)
    bsToast.show();
})

// <!-- Script for back to top button -->
$('.btt-link').click(function(e) {
    window.scrollTo(0, 0)
})

// <!-- Script for book category, price, rating, and name order select -->
$('#sort-selector').change(function () {
    var selector = $(this);
    var currentUrl = new URL(window.location);

    var selectedVal = selector.val();
    console.log(selectedVal)
    if (selectedVal == "book_depository_stars_asc") {
        var sort = "book_depository_stars";
        var direction = "desc";

        currentUrl.searchParams.set("sort", sort);
        currentUrl.searchParams.set("direction", direction);

        window.location.replace(currentUrl);
    } else if (selectedVal == "book_depository_stars_desc") {
        var sort = "book_depository_stars";
        var direction = "asc";

        currentUrl.searchParams.set("sort", sort);
        currentUrl.searchParams.set("direction", direction);

        window.location.replace(currentUrl);
    } else if (selectedVal != "reset") {
        var sort = selectedVal.split("_")[0];
        var direction = selectedVal.split("_")[1];

        currentUrl.searchParams.set("sort", sort);
        currentUrl.searchParams.set("direction", direction);

        window.location.replace(currentUrl);
    } else {
        currentUrl.searchParams.delete("sort");
        currentUrl.searchParams.delete("direction");

        window.location.replace(currentUrl);
    }
})
