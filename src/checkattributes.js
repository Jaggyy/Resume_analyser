const { Dictionary } = require("./Attributes");

exports.positionchecker = (idx, text, resumearray, newarray) => {
  let educationcheck = Dictionary.titles.education.includes(
    text[idx].toLowerCase()
  );
  let experiencecheck = Dictionary.titles.experience.includes(
    text[idx].toLowerCase()
  );
  let projectcheck = Dictionary.titles.projects.includes(
    text[idx].toLowerCase()
  );
  let languagecheck = Dictionary.titles.languages.includes(
    text[idx].toLowerCase()
  );
  let positionscheck = Dictionary.titles.positions.includes(
    text[idx].toLowerCase()
  );
  let skillscheck = Dictionary.titles.skills.includes(text[idx].toLowerCase());
  let hobbycheck = Dictionary.titles.hobby.includes(text[idx].toLowerCase());
  let honors = Dictionary.titles.honors.includes(text[idx].toLowerCase());
  let awards = Dictionary.titles.awards.includes(text[idx].toLowerCase());
  let certification = Dictionary.titles.certification.includes(
    text[idx].toLowerCase()
  );
  let profile = Dictionary.titles.profiles.includes(text[idx].toLowerCase());
  let technology = Dictionary.titles.technology.includes(
    text[idx].toLowerCase()
  );

  if (
    educationcheck ||
    projectcheck ||
    languagecheck ||
    positionscheck ||
    skillscheck ||
    hobbycheck ||
    experiencecheck ||
    honors ||
    awards ||
    certification ||
    technology ||
    profile
  ) {
    return resumearray.push([parseInt(idx), text[idx]]);
  } else {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (text[idx].match(validRegex)) {
      newarray.push({ Email: text[idx] });
    }
  }
};
