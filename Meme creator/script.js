//------------------------------------------------------------------------------
//                   Votre code ici
//------------------------------------------------------------------------------

// Lorsqu'on recupere la taille de police d'un paragraphe, p.style.fontSize
// le format retourné est une string 'YYpx', ex: '16px'
// pour fournir la valeur au input number,
// on doit conserver les caractères numeriques seulement, donc tous sauf les 2 derniers
// fontSizeString.slice(0, -2) trasnforme '16px' en '16'

// Lorsqu'on recupere la couleur d'un paragraphe, p.style.color
// le format retourné est rgb(x, y, x)
// pour fournir la valeur au input color,
// on doit convertir au format #RRGGBB
function rgb2hex(color) {
  // https://stackoverflow.com/a/30381663
  if (color.indexOf("#") != -1) {
    return color;
  }

  color = color
    .replace("rgba", "")
    .replace("rgb", "")
    .replace("(", "")
    .replace(")", "");
  color = color.split(","); // get Array["R","G","B"]

  // 0) add leading #
  // 1) add leading zero, so we get 0XY or 0X
  // 2) append leading zero with parsed out int value of R/G/B
  //    converted to HEX string representation
  // 3) slice out 2 last chars (get last 2 chars) =>
  //    => we get XY from 0XY and 0X stays the same
  return (
    "#" +
    ("0" + parseInt(color[0], 10).toString(16)).slice(-2) +
    ("0" + parseInt(color[1], 10).toString(16)).slice(-2) +
    ("0" + parseInt(color[2], 10).toString(16)).slice(-2)
  );
}

const radioButtons = document.querySelectorAll('input[name="label-choice"]');
const memeTextTop = document.getElementById("meme-text-top")
const memeTextMiddle = document.getElementById("meme-text-middle")
const memeTextBottom = document.getElementById("meme-text-bottom")

function position() {
    let selectedValue;
    radioButtons.forEach((radio) => {
        if (radio.checked) {
          selectedValue = radio.value
        }
    });

    switch (selectedValue) {
        case "top":
            return memeTextTop
        case "middle":
            return memeTextMiddle
        case "bottom":
            return memeTextBottom
        default:
          break;
    }
}

let cpt=0
if (cpt<1) {
    cpt++
    radioButtons[0].checked = true
    afficherText()
}

for (const radioButton of radioButtons) {
    radioButton.addEventListener("change", afficherText )
}

function afficherText(){
    textArea = document.getElementById("label-text")
    textArea.value = position().innerText
}

document.getElementById("label-text").addEventListener("input", function () {
  let value = this.value
  position().innerText = value
});

const fontSelector = document.getElementById("fontSelector");

fontSelector.addEventListener("change", function () {
  const selectedFont = fontSelector.value
  position().style.fontFamily = selectedFont
});

const fontSizeSelector = document.getElementById("fontSizeSelector")

fontSizeSelector.addEventListener("change", () => {
    const newValue = fontSizeSelector.value;
    position().style.fontSize = newValue + "px" 
});


const colorSelector = document.getElementById("colorSelector")

colorSelector.addEventListener("change", function() {
    const selectedColor = colorSelector.value;
    position().style.color = selectedColor;
});



let selectElement = document.getElementById("templateSelector");
let imageAffichée = document.getElementById("preview-image");

selectElement.addEventListener("change", modifierImage);

function modifierImage() {
  let selectValue = selectElement.value;

  imageAffichée.src = selectValue;
}

// Checkbox
let checkboxElement = document.getElementById("whiteLetterboxCheckbox");
checkboxElement.addEventListener("change", modifierBackground);
let container = document.getElementById("preview-image-container");

function modifierBackground() {
  if (checkboxElement.checked) {
    container.style.backgroundColor = "white";
  } else {
    container.style.backgroundColor = "black";
  }
}
