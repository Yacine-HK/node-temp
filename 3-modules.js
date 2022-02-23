// commonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// const names = require("./4-names");
const { one, two } = require("./4-names");
const greet = require("./5-utils");
require("./6-mind-grenade"); // the sum is 12

greet(one);
greet(two);
