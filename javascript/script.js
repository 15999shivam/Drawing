const body = document.querySelector('body');
const eraserEl = document.querySelector('#eraser');
const sizeInput = document.querySelector('#size');
const randomColorCheckBox = document.querySelector('#randomColorCheckBox');
//eraser size
let size = 5;
const eraser = {
    width:20,
    height:20
}

randomColorCheckBox.addEventListener('change',randomColorFunction)

window.addEventListener('dblclick',undragEraser)
//setting up drawing pen
window.addEventListener('click',toggleDraw);

//settinng up eraser
eraserEl.addEventListener('click',toogleDrag);
eraserEl.setAttribute('style',`width:${eraser.width}px; height:${eraser.height}px`)

//setting up size changer
window.addEventListener('keypress',sizeFunction)

//setting input for pen size information
sizeInput.value = size
sizeInput.addEventListener('change',updateBrushSize)


