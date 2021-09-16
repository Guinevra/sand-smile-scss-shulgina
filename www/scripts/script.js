$(document).ready(function() {

    $('.team-link').on('click', function(event) {
        event.preventDefault();

        $('.team-link').removeClass('active');
        $(this).addClass('active');
    });

    $('.location-link').on('click', function(event) {
        event.preventDefault();

    });

});
