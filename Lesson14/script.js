$(document).ready(function () {
    $('.main-btn, .main-btna, a[href="#sheldure"]').on('click', function() {
        $('.overlay').fadeToggle(1000, 'linear');
        $('.modal').slideDown(1000);
    });
    $('.close').on('click', function() {
        $('.overlay').fadeToggle(1000, 'linear');
        $('.modal').slideUp(1000);
    });
});