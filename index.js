$(".card").css("opacity", "0")
$("#navi").click(function () {
    $(".card").css("opacity", "1")
    $("#navi").css("transition-duration", "500ms")
    if ($("#navi").attr("class") === "navigation-middle") {
        $("#navi").removeClass("navigation-middle").addClass("navigation-down")
        $(".middle").css("opacity", "0")
        $(".down").css("opacity", "1")
    } else {
        $("#navi").removeClass("navigation-down").addClass("navigation-middle")
        $(".card").css("opacity", "0")
        $(".down").css("opacity", "0")
        $(".middle").css("opacity", "1")
    }
})