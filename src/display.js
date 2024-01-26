const manifests = require("./config/music.json");
const fs = require("node:fs");

console.log(`Current Music List (${manifests.length} in total)`)
console.table(manifests)