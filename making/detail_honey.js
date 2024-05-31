const box = document.querySelectorAll(".box")
const mat = document.querySelectorAll(".mat")
const topping = document.querySelector(".topping")
const tostart = document.querySelector(".button")
const start = document.querySelector(".start")
const cup = document.querySelector(".cup")


box[0].addEventListener("click", function(){
    mat[0].style.height=`97px`;
    box[1].style.opacity=`1`;
})
box[1].addEventListener("click", function(){
    mat[1].style.height=`38px`;
    box[2].style.opacity=`1`;
})
box[2].addEventListener("click", function(){
    mat[2].style.height=`20px`;
    box[3].style.opacity=`1`;
})
box[3].addEventListener("click", function(){
    mat[3].style.height=`20px`;
    box[4].style.opacity=`1`;
})

box[4].addEventListener("click", function(){
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
        box[4].style.opacity=`0.3`;

        cup.style.display=`block`;
    } 

})


const ice = document.querySelectorAll(".ice")

ice.forEach(cube =>{
    let current = 1;
    current++;
    cube.style.margin=`20px`;

    ice[0].style.transform=`translate(102px, 98px) rotate(20deg)`;

    ice[1].style.transform=`translate(8px, 100px)rotate(-10deg)`;

    ice[2].style.transform=`translate(8px, 128px)rotate(-122deg)`;

    ice[3].style.transform=`translate(154px, -108px)rotate(28deg)`;

    ice[4].style.transform=`translate(150px, -50px)rotate(30deg)`;
})