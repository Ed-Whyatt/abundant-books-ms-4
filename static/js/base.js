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


    // Popular genres hide show class for genres html when each button is clicked
    $( "#buttonOne" ).click(function() {
        document.getElementById("multiCollapseExample2").classList.remove("show");
        document.getElementById("multiCollapseExample3").classList.remove("show");
        document.getElementById("multiCollapseExample4").classList.remove("show");

        document.getElementById("buttonTwo").classList.remove("pop-genres-select-button-active");
        document.getElementById("buttonThree").classList.remove("pop-genres-select-button-active");
        document.getElementById("buttonFour").classList.remove("pop-genres-select-button-active");

        document.getElementById("buttonTwo").classList.add("pop-genres-select-button");
        document.getElementById("buttonThree").classList.add("pop-genres-select-button");
        document.getElementById("buttonFour").classList.add("pop-genres-select-button");

        let containShowOne = document.getElementById("buttonOne").classList.contains("pop-genres-select-button-active");
        if (containShowOne) {
            document.getElementById("buttonOne").classList.remove("pop-genres-select-button-active")
            document.getElementById("buttonOne").classList.add("pop-genres-select-button")
        } else {
            document.getElementById("buttonOne").classList.add("pop-genres-select-button-active")
        };
    });
    $( "#buttonTwo" ).click(function() {
        document.getElementById("multiCollapseExample1").classList.remove("show");
        document.getElementById("multiCollapseExample3").classList.remove("show");
        document.getElementById("multiCollapseExample4").classList.remove("show");

        document.getElementById("buttonOne").classList.remove("pop-genres-select-button-active");
        document.getElementById("buttonThree").classList.remove("pop-genres-select-button-active");
        document.getElementById("buttonFour").classList.remove("pop-genres-select-button-active");

        document.getElementById("buttonOne").classList.add("pop-genres-select-button");
        document.getElementById("buttonThree").classList.add("pop-genres-select-button");
        document.getElementById("buttonFour").classList.add("pop-genres-select-button");

        let containShowTwo = document.getElementById("buttonTwo").classList.contains("pop-genres-select-button-active");
        if (containShowTwo) {
            document.getElementById("buttonTwo").classList.remove("pop-genres-select-button-active")
            document.getElementById("buttonTwo").classList.add("pop-genres-select-button")
        } else {
            document.getElementById("buttonTwo").classList.add("pop-genres-select-button-active")
        };
    });
    $( "#buttonThree" ).click(function() {
        document.getElementById("multiCollapseExample1").classList.remove("show");
        document.getElementById("multiCollapseExample2").classList.remove("show");
        document.getElementById("multiCollapseExample4").classList.remove("show");

        document.getElementById("buttonOne").classList.remove("pop-genres-select-button-active");
        document.getElementById("buttonTwo").classList.remove("pop-genres-select-button-active");
        document.getElementById("buttonFour").classList.remove("pop-genres-select-button-active");

        document.getElementById("buttonOne").classList.add("pop-genres-select-button");
        document.getElementById("buttonTwo").classList.add("pop-genres-select-button");
        document.getElementById("buttonFour").classList.add("pop-genres-select-button");

        let containShowThree = document.getElementById("buttonThree").classList.contains("pop-genres-select-button-active");
        if (containShowThree) {
            document.getElementById("buttonThree").classList.remove("pop-genres-select-button-active")
            document.getElementById("buttonThree").classList.add("pop-genres-select-button")
        } else {
            document.getElementById("buttonThree").classList.add("pop-genres-select-button-active")
        };
    });
    $( "#buttonFour" ).click(function() {
        document.getElementById("multiCollapseExample1").classList.remove("show");
        document.getElementById("multiCollapseExample2").classList.remove("show");
        document.getElementById("multiCollapseExample3").classList.remove("show");

        document.getElementById("buttonOne").classList.remove("pop-genres-select-button-active");
        document.getElementById("buttonTwo").classList.remove("pop-genres-select-button-active");
        document.getElementById("buttonThree").classList.remove("pop-genres-select-button-active");

        document.getElementById("buttonOne").classList.add("pop-genres-select-button");
        document.getElementById("buttonTwo").classList.add("pop-genres-select-button");
        document.getElementById("buttonThree").classList.add("pop-genres-select-button");

        let containShowFour = document.getElementById("buttonFour").classList.contains("pop-genres-select-button-active");
        if (containShowFour) {
            document.getElementById("buttonFour").classList.remove("pop-genres-select-button-active")
            document.getElementById("buttonFour").classList.add("pop-genres-select-button")
        } else {
            document.getElementById("buttonFour").classList.add("pop-genres-select-button-active")
        };
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
