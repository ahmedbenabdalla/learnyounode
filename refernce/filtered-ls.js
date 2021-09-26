const path = require("path");
const fs = require("fs");

fs.readdir("../" + process.argv[2], (error, data) => {
  if (error) throw error;
  data.map((f) =>
    path.extname(f) == "." + process.argv[3] ? console.log(f) : f
  );
});
