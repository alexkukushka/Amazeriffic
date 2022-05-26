var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    ToDosController = require("./controllers/todoController.js"),
    UsersController = require("./controllers/userController.js"),
    app = express();

http.createServer(app).listen(3000);

app.use('/', express.static(__dirname + "/public"));
app.use('/user/:username', express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/amazeriffic', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(res => {
    console.log("DB Connected!")
}).catch(err => {
    console.log(Error, err.message);
});

app.get("/todos.json", ToDosController.index);
app.get("/todos/:id", ToDosController.show);
app.post("/todos", ToDosController.create);
app.put("/todos/:id", ToDosController.update);
app.delete("/todos/:id", ToDosController.destroy);

app.get("/users/:username/todos.json", ToDosController.index);
app.post("/users/:username/todos", ToDosController.create);
app.put("/users/:username/todos/:id", ToDosController.update);
app.delete("/users/:username/todos/:id", ToDosController.destroy);

app.get("/user", function(req, res) {
    res.sendFile(__dirname + "/public/users.html");
})
app.get("/users.json", UsersController.index);
app.post("/users", UsersController.create);
app.get("/users/:username", UsersController.show);
app.put("/users/:username", UsersController.update);
app.delete("/users/:username", UsersController.destroy);