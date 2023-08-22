// show input field on click of search icon
$ = jQuery.noConflict();
$(document).ready(function(){
    $("#search-icon").click(function(){
        $("#search-input").toggleClass("search-input-show");
    });

    //on click #galleryshow remove class grid-hidden and hide button #galleryshow and show button #galleryhide
    $("#galleryshow").click(function(){
        $(".grid-hidden").removeClass("grid-hidden");
        $("#galleryshow").hide();
        $("#galleryhide").show();
        // .button-show bottom unset and padding bottom 20px
        $(".button-show").css({"bottom":"unset","padding-bottom":"20px"});
    });
    $("#galleryhide").click(function(){
        $(".grid").addClass("grid-hidden");
        $("#galleryshow").show();
        $("#galleryhide").hide();
        // .button-show bottom: 89.5px; and padding bottom 0
        $(".button-show").css({"bottom":"89.5px","padding-bottom":"0"});
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll("#home-slider .slide");
    const prevButton = document.querySelector(".home-slide-prev");
    const nextButton = document.querySelector(".home-slide-next");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");
    }

    prevButton.addEventListener("click", function () {
        const previousSlide = currentSlide;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        slides[previousSlide].classList.remove("active");
    });

    nextButton.addEventListener("click", function () {
        const previousSlide = currentSlide;
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        slides[previousSlide].classList.remove("active");
    });

    showSlide(currentSlide);
});

