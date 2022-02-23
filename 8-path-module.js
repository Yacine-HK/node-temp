const path = require("path");

console.log(path.sep);

const filepath = path.join("/content", "subcontent", "test.txt");
console.log(filepath);

const absolute = path.resolve(__dirname, "content", "subcontent", "test.txt");
console.log(absolute);
console.log(__dirname);
