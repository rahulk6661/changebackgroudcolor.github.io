const button=document.querySelector("button");
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
button.addEventListener('click',(e)=>
{
console.log(e.currentTarget.textContent);
    p=randomcolorgenerator()
    body.style.backgroundColor=p;
    h1.textContent=p;
});