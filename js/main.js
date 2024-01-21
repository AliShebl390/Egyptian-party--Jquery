$(".outer").on("click", () => {
    $(aside).css("left", "0px");
    $(".outer").css("padding-left", "250px");
    if ($(window).width() > 700) {
        $("main").css("padding-left", "250px");
    }
});

$("#close").on("click", () => {
    $(aside).css("left", "-250px");
    $(".outer").css("padding-left", "0px");
    $("main").css("padding-left", "0px");
});

// Toggle secrion

$(".toggle h3").click(function () {
    $(".toggle .content").not($(this).next()).slideUp(400);
    $(this).next().slideToggle(400);
});

// End of toggle section
// Start of Counter section

// set timer to Ramadan
let counterDate = new Date("Mar 10, 2024 23:59:59").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let timeDifrrance = counterDate - dateNow;
    let days = Math.floor(timeDifrrance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
        (timeDifrrance % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60
    );
    let mins = Math.floor((timeDifrrance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifrrance % (1000 * 60)) / 1000);
    $("#days").html(`${days}`);
    $("#hours").html(`${hours}`);
    $("#minutes").html(`${mins}`);
    $("#seconds").html(`${seconds}`);
    if (timeDifrrance < 0) {
        clearInterval(counter);
    }
}, 1000);
// End of Counter section
// Final Section
$("#text-area").keyup(function () {
    let max = 100;
    let len = $(this).val().length;

    if (len >= max) {
        $("#chars").text(" You Have Reached The Limit");
    } else {
        let char = max - len;
        $("#chars").text(char + " characters left");
    }
});
