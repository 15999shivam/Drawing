//for toggeling the for drawing
let flagDraw= false
const toggleDraw = function(e){
    if(flagDraw)
    {
        //console.log("hii")
        //console.log('hii')
        window.removeEventListener('mousemove',draw)
         flagDraw=false;
    }
    else{
        window.addEventListener('mousemove',draw)
        flagDraw = true;
    }
 }

//for toggling drag of eraser
let flagErase=false;
const toogleDrag = (e)=>{
    console.log('byee')
    if(flagErase)
     {
         flagDraw=true;
         window.addEventListener('click',toggleDraw);
         window.removeEventListener('mousemove',drag)
         flagErase=false;
     }
     else{
        window.addEventListener('mousemove',drag)
        window.removeEventListener('click',toggleDraw);
        window.removeEventListener('mousemove',draw)
        flagErase = true;
     }
 }


 //for drag of eraser
 const drag = function(e)
 {
         eraserEl.removeEventListener('click',toogleDrag);
         eraserEl.style.top = `${e.y}px`
         eraserEl.style.left = `${e.x}px`
         window.addEventListener('click',eraseToggle);
 }

 //for erasing the elements
 const erase = function(e)
 {
     const div = document.createElement('div');
     div.setAttribute('class',`erase`);
     div.setAttribute('style',`top:${e.y}px; left:${e.x}px;z-index:10;width: ${eraserEl.style.width};
     height: ${eraserEl.style.height};`);
 
     body.appendChild(div)
 }

 //for toggling the eraser
 let eraseflag = false;
 const eraseToggle = function(e)
 {
     if(eraseflag)
     {
        window.removeEventListener('mousemove',erase)
        eraseflag = false;
     }
     else
     {   
       window.addEventListener('mousemove',erase);
       eraseflag = true
     }
 }

 //for drawing elements
const draw = function(e)
{
    const div = document.createElement('div');
    div.setAttribute('class',`div`);
    div.setAttribute('style',`top:${e.y}px; left:${e.x}px;z-index:10;width: ${size}px;
    height: ${size}px;`);
    body.appendChild(div);
}

//to modify the sizes of drawing pen and eraser nad handle every key press event like rubber placement
const sizeFunction = (e)=>{
   // console.log(e);
    if(e.shiftKey && e.key == '+')
    {
       // console.log(parseInt(eraserEl.style.width)+1)
        eraserEl.style.width = `${parseInt(eraserEl.style.width)+1}px`
        eraserEl.style.height = `${parseInt(eraserEl.style.height)+1}px`
       
    }
    else
    if(e.shiftKey && e.key == '-')
    {
        eraserEl.style.width = `${parseInt(eraserEl.style.width)-1}px`
        eraserEl.style.height = `${parseInt(eraserEl.style.height)-1}px`
      
    }
    
    else
    if(e.key=='+')
    {
        size+=1;
        sizeInput.value = size

    }
} 

//update size of input in Enter Size box
const updateBrushSize = ()=>{
    size = sizeInput.value;
}

//function for undrag eraser
const undragEraser = ()=>{
    console.log("hii")
  window.removeEventListener('mousemove',erase)
    window.removeEventListener('click',eraseToggle);
    window.removeEventListener('mousemove',drag)
    eraserEl.addEventListener('click',toogleDrag);
    window.addEventListener('click',toggleDraw);

    flagErase = false;
    eraseflag = false;

}
