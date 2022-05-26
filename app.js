var express = require("express"),
    http = require("http"),
    app = express(),
    toDos = [{
            "description": "Купить продукты",
            "tags": ["шопинг", "рутина"]
        },
        {
            "description": "Сделать несколько новых задач",
            "tags": ["писательство", "работа"]
        },
        {
            "description": "Подготовиться к лекции в понедельник",
            "tags": ["работа", "преподавание"]
        },
        {
            "description": "Ответить на электронные письма",
            "tags": ["работа"]
        },
        {
            "description": "Вывести Грейси на прогулку в парк",
            "tags": ["рутина", "питомцы"]
        },
        {
            "description": "Закончить писать книгу",
            "tags": ["писательство", "работа"]
        }
    ]
http.createServer(app).listen(3000);
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.post("/todos", function(req, res) {
    var newToDo = req.body;
    console.log(newToDo);
    toDos.push(newToDo);
    res.json({ "message": "Вы размещаетесь на сервере!" })
})


app.get("/todos.json", function(req, res) {
    res.json(toDos);
});

app.post("/todos", function(req, res) {
    console.log("Данные были отправлены на сервер");
    res.json({ "message": "Вы размещаетесь на сервере!" })
})

app.get("/tabs", function(req, res) {
    res.sendFile(__dirname + "/public/tabs.html")
})