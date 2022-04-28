/*var main = function() {
    "use strict";
    $(".tabs a:nth-child(1)").on("click", function() {
        //делаем все вкладки неактивными
        $(".tabs span").removeClass("active");
        //делаем активной первую вкладку
        $(".tabs a:nth-child(1) span").addClass("active");
        //очищаем основное содержание, чтобы переопределить его
        $("main .content").empty();
        //возвращается false, так как мы не переходим по ссылке
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
};*/

/*var main = function() {
    "use strict";
    var makeTabActive = function(tabNumber) {
        //сконструируем селектор из tabNumber
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

};*/

/*var main = function() {
    "use strict";
    var tabNumber;
    for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
        var tabSelector = ".tabs a:nth-chuld(" + tabNumber + ")span";
        $(tabSelector).on("click", function() {
            $(".tabs span").removeClass("active");
            $(this).addClass("active");
            return false;
        });
    }
};*/

var main = function() {
    "use strict";
    $(".tabs a span").toArray().forEach(function(element) {
        //создаем обработчик щелчков для этого элемента
        $(element).on("click", function() {
            $(".tabs a span").removeClass("active");
            $(element).addClass("active");
            $("main .content").empty();
            return false;
        });
    });
};