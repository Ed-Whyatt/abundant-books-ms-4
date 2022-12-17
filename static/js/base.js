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
    }; 


    // Popular genres hide show class for othe genres html when each button is clicked
    $( "#buttonOne" ).click(function() {
        document.getElementById("multiCollapseExample2").classList.remove("show");
        document.getElementById("multiCollapseExample3").classList.remove("show");
        document.getElementById("multiCollapseExample4").classList.remove("show");
    });
    $( "#buttonTwo" ).click(function() {
        document.getElementById("multiCollapseExample1").classList.remove("show");
        document.getElementById("multiCollapseExample3").classList.remove("show");
        document.getElementById("multiCollapseExample4").classList.remove("show");
    });
    $( "#buttonThree" ).click(function() {
        document.getElementById("multiCollapseExample1").classList.remove("show");
        document.getElementById("multiCollapseExample2").classList.remove("show");
        document.getElementById("multiCollapseExample4").classList.remove("show");
    });
    $( "#buttonFour" ).click(function() {
        document.getElementById("multiCollapseExample1").classList.remove("show");
        document.getElementById("multiCollapseExample2").classList.remove("show");
        document.getElementById("multiCollapseExample3").classList.remove("show");
    });
});




