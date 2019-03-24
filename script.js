let flag= false
window.addEventListener('click',function(e){
   if(flag)
   {
       window.removeEventListener('mousemove',draw)
        flag=false;
   }
   else{
       window.addEventListener('mousemove',draw)
       flag = true;
   }
})

const body = document.querySelector('body');

const draw = function(e)
{
    const div = document.createElement('div');
    div.setAttribute('style',`top:${e.y}px; left:${e.x}px;`);
    div.setAttribute('class',`div`);

    body.appendChild(div);
}