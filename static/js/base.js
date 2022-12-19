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


    // Popular genres hide show class for author genres html when each button is clicked
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


    // Book information hide and show synopisis and author info independintly javascript
    $( "#synopisButton" ).click(function() {
        document.getElementById("multiCollapseExample6").classList.remove("show");
        document.getElementById("authorButton").classList.remove("active");
        containActive = document.getElementById("synopisButton").classList.contains("active");
        if (containActive) {
            document.getElementById("synopisButton").classList.remove("active")
        } else {
            document.getElementById("synopisButton").classList.add("active")
        };
    });
    $( "#authorButton" ).click(function() {
        document.getElementById("multiCollapseExample5").classList.remove("show");
        document.getElementById("synopisButton").classList.remove("active"); 
        containActive = document.getElementById("authorButton").classList.contains("active");
        if (containActive) {
            document.getElementById("authorButton").classList.remove("active")
        } else {
            document.getElementById("authorButton").classList.add("active")
        };
           
    });
});
