const box = document.querySelectorAll(".box")
const mat = document.querySelectorAll(".mat")
const topping = document.querySelector(".topping")
const tostart = document.querySelector(".button")
const start = document.querySelector(".start")
const cup = document.querySelector(".cup")



box[0].addEventListener("click", function(){
    mat[0].style.height=`150px`;
    box[1].style.opacity=`1`;
})
box[1].addEventListener("click", function(){
    mat[1].style.height=`130px`;
    box[2].style.opacity=`1`;
})

box[2].addEventListener("click", function(){
    mat[2].style.height=`66px`;
    box[3].style.opacity=`1`;
})


tostart.addEventListener("click", function(){
    tostart.style.display=`none`;

    console.log("dd")
    if(tostart.style.display === `none`){
        box[0].style.opacity=`1`;
        box[1].style.opacity=`0.3`;
        box[2].style.opacity=`0.3`;

        cup.style.display=`block`;
    } 

})


tostart.addEventListener("click", function(){
    tostart.style.display=`none`;

    console.log("dd")
    if(tostart.style.display === `none`){
        box[0].style.opacity=`1`;
        box[1].style.opacity=`0.3`;
        box[2].style.opacity=`0.3`;

        cup.style.display=`block`;
    } 

})