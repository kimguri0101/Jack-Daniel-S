const scrollContainer = document.querySelector("main");
const productbox = document.querySelectorAll(".text")

scrollContainer.addEventListener("wheel", (evt) => {
    /*delta를 통해 가로 스크롤 구현.
    delta를 통해 가로스크롤이 되는 것이 완벽히 이해되지는 않았지만 필요한 기능이기에 검색을 통해 나온것을 넣었습니다.*/
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY*8;

    productbox.forEach(box =>{
        /* setTimeout을 통해 스크롤이 정지되었을 때의 함수를 만듦.
        멈췄을 때는 skewX 값을 0으로 해 문단이 원래 형태로 돌아오게 만듦.
        
        setTimeout이라는 개념을 완벽히 이해하지는 못했지만 스크롤이 멈췄을 때의 이벤트를 구현하고 싶어 검색을 통해 나온 것을 넣었습니다.*/
        let wheeling;
        clearTimeout(wheeling);
        wheeling = setTimeout(() => {
            console.log('stop wheeling!');
            box.style.transform = "skewX(0deg)"
            wheeling = undefined;
        }, 400);

        /*evt.deltaY*6 값이 '0'보다 큰지 작은지 판단하게 하여 스크롤이 오른쪽으로 되는지 왼쪽으로 되는지 인식할 수 있게 만들고 방향에 따라 skewX값을 다르게 줌.*/
        if(evt.deltaY*6 > 0){
            console.log("ss")
            box.style.transform = "skewX(-10deg)"
        }else if(evt.deltaY*6 <0){
            box.style.transform = "skewX(10deg)"
        }
    })

});