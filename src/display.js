const fs = require("node:fs");
const prompt = require("prompts");
const path = require("node:path");

async function main() {
  const manifestPath = path.resolve("src", "config", "music.json");
  const manifests = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  /**
   * @type {number}
   */
  const numberOfSongs = (
    await prompt({
      type: "number",
      name: "number",
      message: "How many songs would you like to add?",
    })
  ).number;
  for (let i = 0; i < numberOfSongs; i++) {
    while (true) {
      /**
       * @type {string}
       */
      const { songName } = await prompt({
        type: "text",
        name: "songName",
        message: "What is the name of the song?",
      });
      /**
       * @type {string}
       */
      const { singer } = await prompt({
        type: "text",
        name: "singer",
        message: "Who is the singer?",
      });
      /**
       * @type {string}
       */
      const { length } = await prompt({
        type: "number",
        name: "length",
        message: "How long is the song?",
      });
      const generated = {
        songName,
        singer,
        length,
      };
      console.log(JSON.stringify(generated));
      const { correct } = await prompt({
        type: "select",
        message: "Is this correct?",
        name: "correct",
        choices: ["Yes", "No"],
      });

      if (correct == "0") {
        manifests.push(generated);
        fs.writeFileSync(manifestPath, JSON.stringify(manifests));
        console.log("Written");
        break;
      }
    }
  }
  console.table(manifests);
}
main();
