const boxes  = document.querySelectorAll(".box")
const drinks = document.querySelectorAll(".drink")

//버튼 하나가 눌리면 그전에 눌린 버튼는 다시 비활성화되도록함.
boxes.forEach((box)=>{
  
    box.addEventListener('click',()=>{
      
        boxes.forEach((e)=>{
          //하나만 선택되도록 기존의 효과를 지움.
            e.classList.remove('show');
        })
        
      // 선택된 요소만 효과를 넣음.
      box.classList.add('show');

  })
})


let current = 0 ;

//버튼을 누를 때 그에 해당하는 콘텐츠만 나오도록 함.
boxes[0].addEventListener("click", function(){
    drinks[0].classList.add("show");

    //해당하지 않는 콘텐츠가 함께 나오지 않도록 지움. 
    drinks[1].classList.remove("show");
    drinks[2].classList.remove("show");
    drinks[3].classList.remove("show");
    drinks[4].classList.remove("show");
    drinks[5].classList.remove("show");
})
boxes[1].addEventListener("click", function(){
    drinks[1].classList.add("show");
       
    drinks[0].classList.remove("show");
    drinks[2].classList.remove("show");
    drinks[3].classList.remove("show");
    drinks[4].classList.remove("show");
    drinks[5].classList.remove("show");
})
boxes[2].addEventListener("click", function(){
    drinks[2].classList.add("show");
       
    drinks[0].classList.remove("show");
    drinks[1].classList.remove("show");
    drinks[3].classList.remove("show");
    drinks[4].classList.remove("show");
    drinks[5].classList.remove("show");
})
boxes[3].addEventListener("click", function(){
    drinks[3].classList.add("show");
       
    drinks[0].classList.remove("show");
    drinks[1].classList.remove("show");
    drinks[2].classList.remove("show");
    drinks[4].classList.remove("show");
    drinks[5].classList.remove("show");
})
boxes[4].addEventListener("click", function(){
    drinks[4].classList.add("show");
       
    drinks[0].classList.remove("show");
    drinks[1].classList.remove("show");
    drinks[2].classList.remove("show");
    drinks[3].classList.remove("show");
    drinks[5].classList.remove("show");
})
boxes[5].addEventListener("click", function(){
    drinks[5].classList.add("show");
       
    drinks[0].classList.remove("show");
    drinks[1].classList.remove("show");
    drinks[2].classList.remove("show");
    drinks[3].classList.remove("show");
    drinks[4].classList.remove("show");
})