// Remove col-2 class for Browse Category navlink dropndown for mobile view
jQuery(document).ready(function (e) {
    classAddRmove();

    $(window).resize(function () {
        classAddRmove();
    });

    function classAddRmove() {
        if ($(window).width() <= 991) {
            document.getElementById("nav-category").classList.remove("col-2");
            document.getElementById("navbar-class-change").classList.add("navbar-nav");
        } else {
            document.getElementById("nav-category").classList.add("col-2");
            document.getElementById("navbar-class-change").classList.remove("navbar-nav");
        }
}});
