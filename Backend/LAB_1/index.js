const { EventEmitter } = require("node:events");
const task = new EventEmitter();

task.on("greet", (name) => {
  console.log(`Hello, ${name}! Welcome to the session`);
});

task.on("exit", (reason) => {
  console.log(`Session ending. Reason: ${reason}`);
});

task.on("exit", () => {
  console.log("class started br SOmeonr");
});

task.emit("greet", "Student");
task.emit("exit", "Class");