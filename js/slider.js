let number = 1;

$(".increase").on('click', function () {
    number += 1;
    hideOld();
    setTimeout("showNew()", 300);
})

$(".decrease").on('click', function () {
    number -= 1;
    hideOld();
    setTimeout("showNew()", 300);
})

function hideOld() {
    $("#imgHandler").fadeOut(300);
}

function showNew() {
    $(".increase").toggleClass("active");

    if (number > 2) number = 1;
    if (number < 1) number = 2;

    if (number == 1) $("#slider-paragraph").html("Text oferty pierwszej");
    else if (number == 2) $("#slider-paragraph").html("Text oferty drugiej");
    $("#imgHandler").fadeIn(300);

    $('#imgHandler').css("background", "url(\"./images/headerTheme" + number + ".png\") no-repeat");
}









