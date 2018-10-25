$(document).ready(function () {
    $('.main_btn, .main_btna, a[href="#sheldure"]').on('click', function() {
        $('.overlay').fadeToggle(1000, 'linear');
        $('.modal').animate({
            opacity: 'toggle',
            top: '20%'
        }, {
            duration: 1000,
            easing: 'linear'
        });
    });
    $('.close').on('click', function() {
        $('.overlay').fadeToggle(1000, 'linear');
        $('.modal').slideUp(1000);
    });

    $('.contactform_select').on('submit', function(event) {
        event.preventDefault();
        let data = $('.contactform_select').serialize();
        $.ajax({
            type: "POST",
            url: "/server.php",
            data: data,
            success: function () {
                console.log('success!');
            },
            error: function() {
                console.log('error!');
            }
        });
    });
});