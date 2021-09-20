$(document).ready(function() {

    //Team

    $('.team-link').on('click', function(event) {
        event.preventDefault();

        $('.team-link').removeClass('active');
        $(this).addClass('active');
    });




    //Слайдер

    $('.j-slider').slick({
        dots: true
    });

});
