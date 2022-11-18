const { Dictionary } = require("./Attributes");
const { Checkattribute, positionchecker } = require("./checkattributes");
const {
  checkname,
  checkemail,
  checkeducation,
  bulletpoint,
  checkphone,
  checkskills,
  checktechno,
  checkproject,
  Checkimprovement,
} = require("./lib/Checks");

module.exports.Analyser = (file, name) => {
  let sortedresume = [];
  let newarray = [];
  let text = file;
  text = text.split("\n");
  for (let c in text) {
    positionchecker(c, text, sortedresume, newarray);
  }
  return Checkimprovement(sortedresume, text, newarray);
};
