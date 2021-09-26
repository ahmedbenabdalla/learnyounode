const path = require("path");
const fs = require("fs");
const mymodule = (dir, ext) => {
  fs.readdir("../" + dir, (error, data) => {
    if (error) throw error;
    data.map((f) => (path.extname(f) == "." + ext ? console.log(f) : f));
  });
};
module.exports = mymodule;
