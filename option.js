//INTIALISE WITH ACTIVE CELL NULL
let activeCell = null;

//GET THE REFRENCE BY ITS ID
const activeCellElement = document.getElementById("active-cell");

//INITIAL TAKE VALUES FOR THE CELL
let initialOptionState = {
  fontFamily: "",
  isBoldSelected: false,
  isItalicSelected: false,
  isUnderlinedSelected: false,
  textAlign: "left",
  textColor: "#000",
  backgroundColor: "#fff",
  fontSize: 14,
};

//GET COMPUTED STYLES OF THE ELL AND WILL CHANGE ACCORDING TO USER ACTIONS
const computedStyle = getComputedStyle(activeCell);
let activeOptionState = {
  fontFamily: computedStyle.fontFamily,
  isBoldSelected: computedStyle.fontWeight === "600",
  isItalicSelected: computedStyle.fontStyle === "italice",
  isUnderlinedSelected: computedStyle.textDecoration === "underline",
  textAlign: computedStyle.textAlign,
  textColor: computedStyle.color,
  backgroundColor: computedStyle.backgroundColor,
  fontSize: computedStyle.fontSize,
};

//ON FOCUS CHANGE THE ACTIVE CELL TEXT
function onCellFocus(e) {
  activeCell = e.target;
  activeCellElement.innerText = e.target.id;
}

//WHEN USER CLICK ON BOLD BUTTON THE TEXT SHOULD BE BOLD AND ITS TOGGLE BUTTON
function onClickBold(boldButton) {
  boldButton.classList.toggle("active-option");
  if (activeCell) {
    const fontWeight = getComputedStyle(activeCell).fontWeight;
    if (activeOptionState.isBoldSelected === false) activeCell.style.fontWeight = "600";
    else activeCell.style.fontWeight = "400";

    activeOptionState.isBoldSelected = !activeOptionState.isBoldSelected;
  }
}

function onClickItalic(italicButton) {
  italicButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionState.isItalicSelected) activeCell.style.fontStyle = "normal";
    else activeCell.style.fontStyle = "italic";

    activeOptionState.isItalicSelected = !activeOptionState.isItalicSelected;
  }
}

function onClickUnderline(underlinedButton){
  underlinedButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionState.isUnderlinedSelected) activeCell.style.textDecoration = "none";
    else activeCell.style.textDecoration = "underline",

    activeOptionState.isUnderlinedSelected = !activeOptionState.isUnderlinedSelected;
  }

}

function onClickTextAlign(textAlignButton){
  let selectedValue = textAlignButton.getAttribute("data-value");
}
