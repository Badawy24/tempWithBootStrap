$(document).ready(function() {

    $('.carousel').carousel({
        interval: 6000
    });


    // show color option box when click on gear

    $(".gearcheck").click(function() {
        $(".colorOption").fadeToggle();
    });

    // change theme color on click
    var colorLi = $(".colorOption ul li");

    colorLi
        .eq(0).css("backgroundColor", "#E41B17").end()
        .eq(1).css("backgroundColor", "#E426D5").end()
        .eq(2).css("backgroundColor", "#009AFF").end()
        .eq(3).css("backgroundColor", "#FFD500");

    colorLi.click(function() {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
        //  console.log($(this).attr("data-value"))
    });

    ///////////////
    var scrollTop = $("#scrollTop");

    $(window).scroll(function() {

        console.log($(this).scrollTop());

        if ($(this).scrollTop() >= 700) {

            scrollTop.show();

        } else {

            scrollTop.hide();
        }

    });

    scrollTop.click(function() {
        $("html,body").animate({ scrollTop: 0 }, 600);

    });

});

// load Screen
$(window).load(function() {


    // loading 
    $(".loading-page,.loading-page .sk-chase").fadeOut(2000, function() {
        $(this).remove();
    });

});