let container=document.querySelector('.container');
container.style.display="flex";
container.style.justifyContent="center";
container.style.aligniItems="center";
let box=document.querySelector('.box');
box.style.display="flex";
box.style.flexDirection="column";
box.style.alignItems="center"
box.style.gap="2px";
for(let i=1;i<=16;i++){
    let outerdiv=document.createElement('div');
    outerdiv.style.display="flex";
    // outerdiv.style.backgroundColor="yellow";
    outerdiv.style.width="730px";
    outerdiv.style.border="2px solid black";
    outerdiv.style.gap="2px";
    box.appendChild(outerdiv);
    for(let j=1;j<=16;j++){
        let innerdiv=document.createElement('div');
        innerdiv.style.height="40px";
        innerdiv.style.width="40px";
        innerdiv.style.backgroundColor="white";
        innerdiv.style.border="2px solid red";
        outerdiv.appendChild(innerdiv);
        let colors=randomColor();
        innerdiv.addEventListener('mouseover',()=>{
        innerdiv.style.backgroundColor=colors;
})
        function randomColor()
        {
            color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';

            return color;
        }

    }

}

