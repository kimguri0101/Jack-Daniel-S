//div의 상단 끝부분과 화면 상단 끝부분의 거리 값을 통해 스크롤 시 발생하는 이벤트를 구현함.

const intro = document.querySelector(".big_text")
const mainimg = document.querySelector(".main_img")
const pack = document.querySelector(".pack")
const packbox = document.querySelector(".box")

const button = document.querySelector(".button")
const more = document.querySelector(".more")

/*메인 화면의 가장 상단 부분으로 스크롤로 인해 화면이 내려가면 이미지가 돌아감.*/
document.addEventListener("scroll", function(){
    let introTop = intro.getBoundingClientRect().top;

    if(introTop < 80){
        mainimg.style.transform = `translate(-50%, -120px) rotate(0deg)`
    }else{
        mainimg.style.transform = `translate(-50%, -120px) rotate(20deg)`
    }

    /*rotate를 통해 상자가 닫히는 모습을 표현함.*/
    let packTop = pack.getBoundingClientRect().top;
    if(packTop < 100){
        packbox.style.transform = `rotateY(0deg)`  
        button.style.transform = `translateY(-20px)`
        
        button.style.display = `block`  
       
    }else{
        packbox.style.transform = `rotateY(-122deg)`      
        button.style.transform = `translateY(0px)`  
    }

})

/*거리가 300PX보다 좁아졌을 때는 문단들이 오른쪽으로 이동. */
const process = document.querySelector(".process")
const text = document.querySelectorAll(".process .text")
const movetexts = document.querySelector(".move_text")

document.addEventListener("scroll",function(){
    let processTop = process.getBoundingClientRect().top;

        if(processTop < 300){
            movetexts.style.opacity = `1`
            text.forEach(text =>{
                text.style.transform=`translateX(0px)`;
            })

            /*Delay를 통해 문단이 하나씩 차례대로 움직이게 함.*/
           text[1].style.transitionDelay=`0.1s`;
           text[2].style.transitionDelay=`0.2s`;
           text[3].style.transitionDelay=`0.3s`;
        } else {
          
            text[1].style.transform=`translateX(-280px)`;
            text[2].style.transform=`translateX(-560px)`;
            text[3].style.transform=`translateX(-840px)`;
        }
    
})



/*스크롤 시 문단이 나타나면서 위쪽으로 살짝 올라오게함. */
const his = document.querySelector(".history")
const left = document.querySelector(".left")
const right = document.querySelector(".right")

document.addEventListener("scroll",function(){
    let hisTop = his.getBoundingClientRect().top;

        if(hisTop < 500){
            right.style.transform = `translateY(-50px)`
            right.style.opacity = `1`
            left.style.transform = `translateY(-50px)`
            left.style.opacity = `1`
        }else{
            right.style.transform = `translateY(0px)`
            right.style.opacity = `0`
            left.style.transform = `translateY(0px)`
            left.style.opacity = `0`
        }
    
})


