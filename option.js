//INTIALISE WITH ACTIVE CELL NULL
const textAlignElements = document.getElementsByClassName("text-align");
//GET THE REFRENCE BY ITS ID
const activeCellElement = document.getElementById("active-cell");
const boldButton = document.getElementById("bold");
const italicButton = document.getElementById("italic");
const underLinedButton = document.getElementById("underlined");

let activeCell = null;
let activeOptionState;

function toggleButtonStyle(button, isSelected) {
  if (isSelected) button.classList.add("active-option");
  else button.classList.remove("active-option");
}

function highlightOptionsButtonsOnFocus() {
  //FOR BOLD BUTTON
  toggleButtonStyle(boldButton, activeOptionState.isBoldSelected);

  //FOR ITALIC BUTTON
  toggleButtonStyle(italicButton, activeOptionState.isItalicSelected);

  //FOR UNDERLINE BUTTON
  toggleButtonStyle(underLinedButton, activeOptionState.isUnderlinedSelected);

  //FOR TEXT ALIGN BUTTON
  highlightTextAlignButtons(activeOptionState.textAlign);
}

//ON FOCUS CHANGE THE ACTIVE CELL TEXT
function onCellFocus(e) {
  if (activeCell && activeCell?.id == e.target.id) return;
  activeCell = e.target;
  activeCellElement.innerText = e.target.id;

  //GET COMPUTED STYLES OF THE ELL AND WILL CHANGE ACCORDING TO USER ACTIONS
  const computedStyle = getComputedStyle(activeCell);
  activeOptionState = {
    fontFamily: computedStyle.fontFamily,
    isBoldSelected: computedStyle.fontWeight === "600",
    isItalicSelected: computedStyle.fontStyle === "italic",
    isUnderlinedSelected: computedStyle.textDecoration.includes("underline"),
    textAlign: computedStyle.textAlign,
    textColor: computedStyle.color,
    backgroundColor: computedStyle.backgroundColor,
    fontSize: computedStyle.fontSize,
  };
  highlightOptionsButtonsOnFocus();
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

function onClickUnderline(underlinedButton) {
  underlinedButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionState.isUnderlinedSelected) {
      activeCell.style.textDecoration = "none";
    } else {
      activeCell.style.textDecoration = "underline";
    }
    activeOptionState.isUnderlinedSelected = !activeOptionState.isUnderlinedSelected;
  }
}

function highlightTextAlignButtons(textAlignValue) {
  for (let i = 0; i < textAlignElements.length; i++) {
    if (textAlignElements[i].getAttribute("data-value") === textAlignValue) {
      textAlignElements[i].classList.add("active-option");
    } else {
      textAlignElements[i].classList.remove("active-option");
    }
  }
}

function onClickTextAlign(textAlignButton) {
  let selectedValue = textAlignButton.getAttribute("data-value");
  highlightTextAlignButtons(selectedValue);
  if (activeCell) {
    activeCell.style.textAlign = selectedValue;
    activeOptionState.textAlign = selectedValue;
  }
}

function onChangeTextColor(textColorInput) {
  let selectedColour = textColorInput.value;
  if (activeCell) {
    activeCell.style.color = selectedColour;
    activeOptionState.textColor = selectedColour;
  }
}

function onChangeBackgroundColor(backgroundColor) {
  let selectedColour = backgroundColor.value;
  if (activeCell) {
    activeCell.style.backgroundColor = selectedColour;
    activeOptionState.backgroundColor = selectedColour;
  }
}
