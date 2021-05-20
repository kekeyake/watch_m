$(function () {

    $('#faqList button').on('click', function () {
        $(this).toggleClass('on').next().slideToggle("fast");
    });

    $('#businessInformation').on('click' ,function () {
        $('.footer_btm').slideToggle("fast");
    });

});
