const projectcheck = (array) => {
  for (let i in array) {
    if (array[i] == "❖") {
      console.log(i, array);
    }
  }
};

module.exports.Checkimprovement = (array, text , newarray) => {
  array.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let i = 0; i < array.length - 1; i++) {
    let splited = text.slice(array[i][0], array[i + 1][0]);
    if (
      ["projects", "project"].includes(array[i][1].toLowerCase()) ||
      ["experience", "work experience"].includes(
        array[i][1].toLowerCase()
      )
    ) {
      // projectcheck(splited);
      continue
    } 
    newarray.push(splited);
  }
  return newarray;
};
