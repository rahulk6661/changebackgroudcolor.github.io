const button1=document.querySelector(".id1");
const button2=document.querySelector(".id2");
const button3=document.querySelector(".id3");
const h1=document.querySelector("h1");
const body=document.querySelector("body");
function randomcolorgenerator()
{
    const c1 = Math.floor(Math.random()*256);
    let c2 = Math.floor(Math.random()*256);
    let c3 = Math.floor(Math.random()*256);
    const randomval=`rgb(${c1},${c2},${c3})`;
    return randomval;
}

button1.addEventListener('click',(e)=>
{
console.log(e.currentTarget.textContent);
    p=randomcolorgenerator()
    body.style.backgroundColor=p;
    h1.textContent=p;
});
var changeid;
button2.addEventListener('click',()=>
{
     changeid=setInterval(() => {
        p=randomcolorgenerator()
        body.style.backgroundColor=p;
        h1.textContent=p;  
    }, 500);
});
button3.addEventListener('click',()=>
{
    clearInterval(changeid);
    const p=body.style.backgroundColor;
    h1.textContent=p;
})