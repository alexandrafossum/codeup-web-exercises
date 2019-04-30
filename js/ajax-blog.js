"use strict";

$(document).ready(function () {
    $.ajax("data/blog.json")
        .done(function (data) {
            data.forEach(function(blog){
                $('#posts').append(
                    '<h4 class="blog-title text-center">' + blog.title + '</h4>' +
                    '<p class="blog-content">' + blog.content + '</p>' +
                    '<p class="blog-categories">' + blog.categories + '</p>' +
                    '<p class="blog-date">' + blog.date + '</p><hr>');
            });
            console.log(data);
        });
    $('#show-posts').click(function() {
        $(".blog-posts").toggle("slow", function() {
            //
        });
    });
    $(function () {
        $('.contacts').hide();
    });
    $('#contact-info').on('click', function(e) {
        $('.contacts').toggle("slow", function() {

        });
    });
    $(function () {
        $('.newsletter').hide();
    });
    $('#sign-up').on('click', function(e) {
        $('.newsletter').toggle("slow", function() {

        });
    });
});

