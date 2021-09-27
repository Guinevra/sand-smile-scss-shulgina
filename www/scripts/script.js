$(document).ready(function() {

    //Team

    $('.team-link').on('click', function(e) {
        e.preventDefault();


        $('.team-link').removeClass('active');
        $(this).addClass('active');


        let index = $(this).index('.team-link');

        $('.team-desc').removeClass('active');
        $('.team-desc').eq(index).addClass('active');

    });

    //Gallery
    $('.j-slider').slick({
        dots: true
    });


    //Location
    $('.location-link').on('click', function(e) {
        e.preventDefault();


    });





});
