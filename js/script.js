$(document).ready(function () {
    $('#gamehead').mouseenter(function () {
        $('#gameinfo').animate({
            'margin-top': '+=40px'
        });
    });
    $('#gamehead').mouseleave(function () {
        $('#gameinfo').animate({
            'margin-top': '-=40px'
        });
    });
});