/*var main = function() {
    "use strict";
    $(".tabs a:nth-child(1)").on("click", function() {
        // делаем все вкладки неактивными
        $(".tabs span").removeClass("active");
        // делаем активной первую вкладку
        $(".tabs a:nth-child(1) span").addClass("active");
        // очищаем основное содержание, чтобы переопределить его
        $("main .content").empty();
        // возвращается false, так как мы не переходим по ссылке
        return false;
    });
    $(".tabs a:nth-child(2)").on("click", function() {
        $(".tabs span").removeClass("active");
        $(".tabs a:nth-child(2) span").addClass("active");
        $("main .content").empty();
        return false;
    });
    $(".tabs a:nth-child(3)").on("click", function() {
        $(".tabs span").removeClass("active");
        $(".tabs a:nth-child(3) span").addClass("active");
        $("main .content").empty();
        return false;
    });
};

var main = function() {
    "use strict";
    var makeTabActive = function(tabNumber) {
        // сконструируем селектор из tabNubmer
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(".tabs span").removeClass("active");
        $(tabSelector).addClass("active");
    };
    $(".tabs a:nth-child(1)").on("click", function() {
        makeTabActive(1);
        return false;
    });
    $(".tabs a:nth-child(2)").on("click", function() {
        makeTabActive(2);
        return false;
    });
    $(".tabs a:nth-child(3)").on("click", function() {
        makeTabActive(3);
        return false;
    });
}; 

var main = function() {
    "use strict";
    var tabNumber;
    for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
        var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
        $(tabSelector).on("click", function() {
            $(".tabs span").removeClass("active");
            $(this).addClass("active");
            return false;
        });
    }
};

var main = function() {
    "use strict";
    $(".tabs a span").toArray().forEach(function(element) {
        // создаем обработчик щелчков для этого элемента
        $(element).on("click", function() {
            $(".tabs a span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();
            return false;
        });
    });
};
var main = function() {
    "use strict";
    $(".tabs a span").toArray().forEach(function(element) {
        // создаем обработку щелчков для этого элемента
        $(element).on("click", function() {
            // поскольку мы используем версию элемента jQuery,
            // нужно создать временную переменную,
            // чтобы избежать постоянного обновления
            var $element = $(element);
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                console.log("Щелчок на первой вкладке!");
            } else if ($element.parent().is(":nth-child(2)")) {
                console.log("Щелчок на второй вкладке!");
            } else if ($element.parent().is(":nth-child(3)")) {
                console.log("Щелчок на третьей вкладке!");
            }
            return false;
        });
    });
};*/

var main = function() {
    "use strict";
    var toDos = [
        "Закончить писать эту книгу",
        "Вывести Грейси на прогулку в парк",
        "Ответить на электронные письма",
        "Подготовиться к лекции в понедельник",
        "Обновить несколько новых задач",
        "Купить продукты"
    ];
    $(".tabs a span").toArray().forEach(function(element) {
        $(element).on("click", function() {
            var $element = $(element),
                $content;
            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();
            if ($element.parent().is(":nth-child(1)")) {
                $content = $("<ul>");
                for (var i = toDos.length - 1; i > -1; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(2)")) {
                $content = $("<ul>");
                toDos.forEach(function(todo) {
                    $content.append($("<li>").text(todo));
                });
                $("main .content").append($content);
            } else if ($element.parent().is(":nth-child(3)")) {
                var $input = $("<input>");
                var $button = $("<button>").text("Добавить задачу");
                $button.on("click", function() {
                    toDos.push($input.val());
                    $input.val("");
                });
                $content = $("<div>").append($input).append($button);
                $("main .content").append($content);

            }
            return false;
        });
    });
    $(".tabs a:first-child span").trigger("click");
};


$(document).ready(main);