'use strict'
$(".footerButton").click(function () {
    /* $(".connect").css({
         "visibility": "visible"

     });*/
    $(".connect").slideToggle();
});

$(".LocationArrowUp").click(function () {

    $(".location").slideDown();
});
$(".LocationArrowDown").click(function () {

    $(".location").slideUp();
});

$(".LocationArrowDown").click(function () {

    $(".LocationArrowUp").css("display", "block");
    $(".LocationArrowDown").css("display", "none");
});
$(".LocationArrowUp").click(function () {

    $(".LocationArrowDown").css("display", "block");
    $(".LocationArrowUp").css("display", "none");
});

// Navbar scroll js function
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() && screen.width > 900);
    });
});

/*
/*pipeline button slide*/

$("#pipe1").click(function () {

    $("ul.project_planning_list_ul").slideToggle();
    $(".drafting_list_ul").slideUp();
    $(".awarding_contract_list_ul").slideUp();
    $(".issuing_rfp_list_ul").slideUp();
});


$("#pipe2").click(function () {

    $(".drafting_list_ul").slideToggle();
    $(".project_planning_list_ul").slideUp();
    $(".awarding_contract_list_ul").slideUp();
    $(".issuing_rfp_list_ul").slideUp();
});


$("#pipe3").click(function () {

    $(".issuing_rfp_list_ul").slideToggle();
    $(".project_planning_list_ul").slideUp();
    $(".drafting_list_ul").slideUp();
    $(".awarding_contract_list_ul").slideUp();
});


$("#pipe4").click(function () {

    $(".awarding_contract_list_ul").slideToggle();
    $(".project_planning_list_ul").slideUp();
    $(".drafting_list_ul").slideUp();
    $(".issuing_rfp_list_ul").slideUp();

});
