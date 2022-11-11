var express = require("express");
const { render } = require("../app");
var router = express.Router();

let todos = [
  {
    id: 3,
    title: "Todo 3",
    done: false,
  },
  {
    id: 2,
    title: "Todo 2",
    done: false,
  },
  {
    id: 1,
    title: "Todo 1",
    done: false,
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/todos", function (req, res) {
  res.status(200).json(todos);
});

router.get("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const todo = todos.find((todo) => todo.id === id);

  res.status(200).json(todo);
});

let idgen = 3;
router.post("/api/todos", function (req, res) {
  const title = req.body.title;
  const ids = todos.map((todo) => todo.id);
  console.log(req.body.title);
  const latestId = Math.max(...ids);
  console.log("Latest: ", latestId);

  let todo = {
    id: ++idgen, //latestId + 1,
    title: title,
    done: false,
  };

  todos.unshift(todo);
  res.status(200).json(todos);
});

router.delete("/api/todos/:id", function (req, res) {
  const id = parseInt(req.params.id);
  todos = todos.filter((todo) => todo.id !== id);

  res.status(200).json(todos);
});

router.patch("/api/todos", function (req, res) {
  const { id, title } = req.body;

  todos.map((todo) => {
    if (todo.id === id) {
      todo.title = title;
    }
  });

  res.status(200).json(todos);
});

module.exports = router;
