//modules for color bending
const chroma = require("chroma-js");
const tc = require("tinycolor2");
//Var declarations

const colorPicker = document.querySelector("#colorSelector");

let chPink = chroma("pink").hex();

//colorPicker.value = `${chPink}`

//console.log(colorPicker);

colorPicker.addEventListener("input", () => {
  console.table([colorPicker.value, chPink]);
  document.querySelector('body').style.background = `${colorPicker.value}`
});
