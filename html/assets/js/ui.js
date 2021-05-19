$(function () {

    $('#faqList button').on('click', function () {
        $(this).toggleClass('on').next().slideToggle("fast");
    });

});
