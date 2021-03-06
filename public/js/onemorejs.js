var slideshow = function(tag) {
    // console.log(tag);
    var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
        "tags=" + tag + "&format=json&jsoncallback=?";
    var displayMessage = function(messageIndex) {
        if (tag !== "") {
            $.getJSON(url, function(flickrResponse) {
                console.log(messageIndex);
                var $img = $("<img>").attr("src", flickrResponse.items[messageIndex].media.m).hide();
                $("main .photos").empty();
                $("main .photos").append($img);
                $img.fadeIn();
                setTimeout(function() {
                    messageIndex = messageIndex + 1;
                    displayMessage(messageIndex);
                }, 3000);
                if (messageIndex === 3) {
                    messageIndex = -1;
                }
            });
        }
    };
    displayMessage(0);
}

var main = function() {

    "use strict";
    var $inputLabel = $("<p>").text("Введите тег: "),
        $input = $("<input>").addClass("tag"),
        $button = $("<button>").text("Поиск");
    $button.on("click", function() {
        var tag = "";
        tag = $input.val();
        $input.val("");
        if (tag !== "") {
            $("main .photos").empty();
            slideshow(tag);
        }
    });
    $("main .content").append($inputLabel).append($input).append($button);
};
$(document).ready(main);