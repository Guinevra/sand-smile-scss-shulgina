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
        arrows: true,
        infinite: true,
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        //для адаптива // responsive: [
        //   {
        //   breakpoint: 768,
        //   settings: {
        //   slidesToShow: 2
        //   }
        //   },
        //   {
        //   breakpoint: 550,
        //   settings: {
        //   slidesToShow: 1
        //   }
        //   }
        //   ]



    });


    //Location
    $('.location-link').on('click', function(e) {
        e.preventDefault();


    });


    // Открытие.закрытие мобильного меню
    $('.burger').on('click', function() {
        $('.main-nav').slideToggle();
    });


});
