const box = document.querySelectorAll(".box")
const mat = document.querySelectorAll(".mat")
const topping = document.querySelector(".topping")
const tostart = document.querySelector(".button")
const start = document.querySelector(".start")
const cup = document.querySelector(".cup")


box[0].addEventListener("click", function(){
    mat[0].style.opacity=`1`;
    mat[0].style.animation=`ice 2s ease`;
    box[1].style.opacity=`1`;
})
box[1].addEventListener("click", function(){
    mat[1].style.height=`270px`;
    box[2].style.opacity=`1`;
})
box[2].addEventListener("click", function(){
    mat[2].style.height=`30px`;
    box[3].style.opacity=`1`;
})
box[3].addEventListener("click", function(){
    topping.style.display=`block`;
    
    topping.style.animation=`cherry 2s ease`;
})

tostart.addEventListener("click", function(){
    tostart.style.display=`none`;

    console.log("dd")
    if(tostart.style.display === `none`){
        box[0].style.opacity=`1`;
        box[1].style.opacity=`0.3`;
        box[2].style.opacity=`0.3`;
        box[3].style.opacity=`0.3`;

        cup.style.display=`block`;
    } 

})


const ice = document.querySelectorAll(".ice")

ice.forEach(cube =>{
    let current = 1;
    current++;
    cube.style.margin=`20px`;

    ice[0].style.transform=`translate(156px, 98px) rotate(20deg)`;

    ice[1].style.transform=`translate(8px, -4px)rotate(-10deg)`;

    ice[2].style.transform=`translate(8px, -3px)rotate(-122deg)`;

    ice[3].style.transform=`translate(174px, -175px)rotate(28deg)`;

})