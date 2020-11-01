$(document).ready(function () {

    $(".logoMain").on("click", function () {
        $(".monsterBG")[0].play()
        $(".logoMain").addClass("nosee")
        $(".doorgrid").removeClass("nosee")
    })

    $(".door1").on("click", function () {
        $(".door1").addClass("active")
        $(".monster").addClass("see")
        $(".OP1")[0].play()
    })

    $(".door2").on("click", function () {
        $(".door2").addClass("active")
        $(".OP2")[0].play()
    })

    $(".door3").on("click", function () {
        $(".door3").addClass("active")
        $(".baby").addClass("see")
        $(".OP1")[0].play()
    })

    $(".door4").on("click", function () {
        $(".door4").addClass("active")
        $(".monster2").addClass("see")
        $(".OP2")[0].play()
    })

    $(".door5").on("click", function () {
        $(".door5").addClass("active")
        $(".OP1")[0].play()
    })

    $(".door6").on("click", function () {
        $(".door6").addClass("active")
        $(".monster3").addClass("see")
        $(".OP2")[0].play()
    })

    $(".door7").on("click", function () {
        $(".door7").addClass("active")
        $(".OP1")[0].play()
    })

    $(".door8").on("click", function () {
        $(".door8").addClass("active")
        $(".OP2")[0].play()
    })



    $(".door1").on("mouseleave", function () {
        $(".door1").removeClass("active")
        $(".monster").removeClass("see")
        $("Clo1")[0].play()
    })

    $(".door2").on("mouseleave", function () {
        $(".door2").removeClass("active")
        $("Clo1")[0].play()
    })

    $(".door3").on("mouseleave", function () {
        $(".door3").removeClass("active")
        $(".baby").removeClass("see")
        $("Clo1")[0].play()
    })

    $(".door4").on("mouseleave", function () {
        $(".door4").removeClass("active")
        $(".monster2").removeClass("see")
        $("Clo1")[0].play()
    })

    $(".door5").on("mouseleave", function () {
        $(".door5").removeClass("active")
        $("Clo1")[0].play()
    })

    $(".door6").on("mouseleave", function () {
        $(".door6").removeClass("active")
        $(".monster3").removeClass("see")
        $("Clo1")[0].play()
    })

    $(".door7").on("mouseleave", function () {
        $(".door7").removeClass("active")
        $("Clo1")[0].play()
    })

    $(".door8").on("mouseleave", function () {
        $(".door8").removeClass("active")
        $("Clo1")[0].play()
    })

})