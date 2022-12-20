$(".btn").click(function () {
    if ($(".p-x").text() === "O") {
        $("p").addClass("p-x");
        $("p").text("X");
        $("a").css("margin", "2rem");
        $(".left, .right").css("margin", "2rem");
        $(".brands").css("opacity", "1");
        $(".brands").css("transition-duration", "700ms")
        $(".brands").css("transform", "translate3d(8rem, 40rem, 0)");
        $(".tile>img").css("transition-duration", "700ms").css("opacity", "1");
        $(".tile").css("background", "none");
        $("button").css("transition-duration", "700ms");
        $(".tile, .1").hover(function () {
            $(".1>button").css("opacity", "1").css("background-color", "pink");
        }, function () {
            $(".1>button").css("opacity", "0").css("background-color", "pink");
        });
        $(".tile").hover(function () {
            $("button").css("opacity", "1").css("background-color", "pink");
        }, function () {
            $("button").css("opacity", "0").css("background-color", "pink");
        });
        $("body").css("background-image", "linear-gradient(to right, rgb(255, 192, 249), pink, rgb(255, 192, 249))");
        $(".tile").css("transition-delay", "700ms").css("transition-duration", "700ms");
        $(".1").css("transform", "translate3d(23.5rem, 0, 0)");
        $(".2").css("transform", "translate3d(-30%, -23.4rem, 0)");
        $(".3").css("transform", "translate3d(40%, 18.4rem, 0)");
        $(".4").css("transform", "translate3d(-100%, -5rem, 0)");
        $(".5").css("transform", "translate3d(-23.5rem, 0, 0)");
        $(".6").css("transform", "translate3d(100%, -5rem, 0)");
        $(".7").css("transform", "translate3d(30%, -23.2rem, 0)");
        $(".8").css("transform", "translate3d(-40%, 18.4rem, 0)");
    }
    else {
        $("p").removeClass("p-x").addClass("p-o");
        $(".p-o").text("X");
    }
});