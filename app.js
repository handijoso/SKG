(function ($) {
    $(document).ready(function () {
        $('body').append('<div class="social-media-links-overlay"></div>');
    });

    $('.open-social-media-container').on('click', function () {
        $('.social-media-container').toggleClass('opened');
        $(this).toggleClass('opened');
        $('.social-media-links-overlay').toggleClass('opened');
    })
})(jQuery);

console.log("Hello world")