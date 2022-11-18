const PDFparse = require("pdf-parse");
const { Analyser } = require("./src/Analyser");

module.exports.Resumeanalysis = function (file) {
  return new Promise((resolve, reject) =>
    PDFparse(file)
      .then(async (result) => {
        const r =  Analyser(result.text);
        return resolve(r)
      })
      .catch((err) => {
        return reject(err);
      })
  );
};
