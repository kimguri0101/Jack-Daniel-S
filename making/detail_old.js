//'detail'이라는 단어가 붙는 js파일을 모두 클릭을 통해 직접 음료를 만들며 레시피를 배우는 페이지입니다.
//때문에 같은 코드들이 반복되기 때문에 주석은 해당 js파일에만 달았습니다.



const box = document.querySelectorAll(".box")
const mat = document.querySelectorAll(".mat")
const topping = document.querySelector(".topping")
const tostart = document.querySelector(".button")
const start = document.querySelector(".start")
const cup = document.querySelector(".cup")

//'box'는 넣어야하는 재료가 쓰여있는 문단이고 'mat'는 material을 줄인 말로 컵에 담기는 재료입니다.

box[0].addEventListener("click", function(){
    //첫번째 순서의 문단이 눌리면 그에 해당하는 재료가 컵에 담김.
    mat[0].style.opacity=`1`;
    mat[0].style.animation=`ice 2s ease`;
    //첫번째 순서의 문단을 누르면 불투명했던 다음단계의 문단이 선명해짐.
    box[1].style.opacity=`1`;
})
box[1].addEventListener("click", function(){
    //height가 높아지는 것으로 컵에 음료가 차오르는 것을 표현함.
    mat[1].style.height=`560px`;
    box[2].style.opacity=`1`;
})
box[2].addEventListener("click", function(){
    mat[2].style.height=`84px`;
    box[3].style.opacity=`1`;
})

box[3].addEventListener("click", function(){
    //음료 위에 올라는 토핑은 display를 통해 사라지게했다가 나타나게하고, 애니메이션을 통해 액체 위에 고체가 둥둥뜨는 것을 표현함.
    topping.style.display=`block`;
    
    topping.style.animation=`cherry 2s ease`;
})

//해당 페이지는 처음에 음료이름과 들어가는 재료만 보이고 나머지 요소는 보이지 않음.
//시작 버튼을 누르면 그제서야 컵과 만드는 과정이 불투명하게 나타남.
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

//div에 넓이와 높이를 주어 얼음을 표현함. 
//얼음 각각에 위치값을 부여하여 컵 안에 전체적으로 펴져있도록함.
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