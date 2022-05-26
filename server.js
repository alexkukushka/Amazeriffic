var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    app = express();

mongoose.connect('mongodb://localhost/amazeriffic');
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

var ToDoSchema = mongoose.Schema({
    description: String,
    tags: [String]
});
var ToDo = mongoose.model("ToDo", ToDoSchema);

app.post("/todos", function(req, res) {
    console.log(req.body);
    var newToDo = new ToDo({
        "description": req.body.description,
        "tags": req.body.tags
    });
    newToDo.save(function(err, result) {
        if (err !== null) {
            console.log(err);
            res.send("ERROR");
        } else {
            ToDo.find({}, function(err, result) {
                if (err !== null) {
                    res.send("ERROR");
                }
                res.json(result);
            });
        }
    });
});


app.get("/todos.json", function(req, res) {
    ToDo.find({}, function(err, toDos) {
        res.json(toDos);
    });
});


app.get("/tabs", function(req, res) {
    res.sendFile(__dirname + "/public/tabs.html")
})

http.createServer(app).listen(3000);