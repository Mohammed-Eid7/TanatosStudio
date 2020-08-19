/*global $, alert, console*/
$(function () {
    'use strict';
    $(".header").height($(window).height());
    $(window).resize(function () {
        $(".header").height($(window).height());
        $('.intro').css('paddingTop', ($(window).height() - $('.intro').height()) / 2);
    });
    $('.intro').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.intro').height()) / 2);
    });
    $(".header i").click(function () {
        $("html, body").animate({
            scrollTop: ($('#' + $(this).data('value')).offset().top - 70)
        }, 2000);
    });
    var leftArrow = $('.arrwo .fa-chevron-left'),
        rightArrow = $('.arrwo .fa-chevron-right');
    function checkClint() {
        $('.index:first').hasClass('active') ? leftArrow.fadeOut(500) : leftArrow.fadeIn();
        $('.index:last').hasClass('active') ? rightArrow.fadeOut(500) : rightArrow.fadeIn(500);
    }
    $('.slider').bxSlider({
        pager: false
    });
    $('.show-more').click(function () {
       
        $('.spinner').fadeIn(1000).delay(2000).fadeOut(1000);
        $(".ourword .haeden").delay(3000).fadeIn(3000);
        
        
    });
});