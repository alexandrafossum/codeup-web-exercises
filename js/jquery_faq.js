"use strict";

var pictureOne = document.getElementById("pic-1");
var pictureTwo = document.getElementById("pic-2");
var pictureThree = document.getElementById("pic-3");

function alertMessage() {
    var newLine = "\r\n";
    var message = "Would you like to sign up for our newsletter?";
    message += newLine;
    message += "Vil du registrere deg for vårt nyhetsbrev?";
    alert(message);
}

alertMessage();

$(document).ready(function () {
    $("#reveal").click(function (e) {
        $('dd').toggleClass('invisible');
    });
    $("h3").click(function () {
        $("li").css({"font-weight": "bold"});
        $("ul").show();
    });

    $("#list-btn").click(function (e) {
        $("li:last-child").css({"background-color": "#FFC038",
                                      "border-radius": "5px"
        });
        $("li:first-child").css({"background-color" : "dodgerblue",
                                        "border-radius": "5px"})
        // $("li").click(function(e) {
        //     // $(this).parent().children().first().css({"color": "dodgerblue"});
        //     $("li:first-child").css({"color" : "dodgerblue"});
        // })
    });

    $("#hide").click(function() {
        $(".newsletter").hide();
    });

    $(".fade-in").delay(8000).fadeIn();

    });

//hillside | lake | hiker

    $(function() {
        $("#pic-btn-1").click(function() {
            //lake | hiker | hillside
            $("div.picture-1").replaceWith($(".picture-2"));
            $("div.picture-2").replaceWith($(".picture-3"));
            $("div.picture-3").replaceWith($(".picture-1"));
        });
        $("#pic-btn-2").click(function() {
            // center randomly goes left or right

        });
        $("#pic-btn-3").click(function() {
            //right goes left, center becomes right

        });
    });
