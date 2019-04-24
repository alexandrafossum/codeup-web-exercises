"use strict";

// $(document).ready(function() {
//     alert("I'm done!");
// });



// alert($("h1").html());
//
// alert($("#alert").html());
//
// $("li").css({"font-weight": "20px",
//                     "color": "red",
//                     "list-style": "none"});
//
// $(".codeup").css("border", "red 1px solid");
//
// $("button").click(function() {
//     alert("We are now no longer the Knights Who Say Ni!");
// });
//
// $("h1, p, li").css({"background-color": "lightgrey"});
//
// $("li").css("font-size", "20px");
//
// alert($("h1").text());



$("h1").click(function(e) {
    $(e.target).css("background", "dodgerblue");
});

$("h1").dblclick(function(e) {
    $(e.target).css("background", "white");
});

$("p").dblclick(function () {
    $(this).css("font-size", "18px");
});

$("li").hover(function() {
    $(this).css("color", "red");
}, function() {
    $(this).css("color", "black");
});



$(".container").hover(function() {
    $(this).css({"background": "salmon",
                        "color": "white"});
}, function() {
    $(this).css({"background": "white",
                        "color": "black"});
});

