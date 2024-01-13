const utilities = require("@coolplaylin/utilities");
const manifests = require("./config/music.json");
const fs = require("node:fs");

fs.writeFileSync(
  "./public/music.json",
  JSON.stringify([
    ...utilities.selectMusic(
      utilities.generateUniqueCombinations(manifests, 4),
      872
    ),
    ...utilities.selectMusic(
      utilities.generateUniqueCombinations(manifests, 3),
      872
    ),
  ])
);
