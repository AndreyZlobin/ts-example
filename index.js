const { hello } = require("./second.js");

for (let iteration = 0; iteration < 10; iteration++) {
  hello(iteration);
}
