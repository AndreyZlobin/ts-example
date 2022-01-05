const EventEmitter = require("events");
let eventName = "greet";
class User extends EventEmitter {
  sayHi(data) {
    this.emit(eventName, data);
  }
}
let user = new User();
// добавляем к объекту user обработку события "greet"
user.on(eventName, (data) => {
  console.log(data);
});

// user.removeAllListeners([eventName]);

const hello = (message) => {
  user.sayHi(message);
};
hello("123123");

// console.log(user(event));
module.exports = { hello };
