const nextBtn = document.querySelector(".next-btn");
const preBtn = document.querySelector(".prev-btn");
const pags = document.querySelectorAll(".pag li");
const imgContainer = document.querySelector(".img-container");
let currentValue = 1;
let data = [
    {img : "./imaages/download (1).jpg" , id:1},
    {img : "./imaages/download (2).jpg" , id:2},
    {img : "./imaages/download (3).jpg" , id:3},
    {img : "./imaages/download (4).jpg" , id:4},
    {img : "./imaages/download (5).jpg" , id:5},
    {img : "./imaages/download (1).jpg" , id:6},
    {img : "./imaages/download (2).jpg" , id:7},
    {img : "./imaages/download (3).jpg" , id:8},
    {img : "./imaages/download (4).jpg" , id:9},
]


//pagination-page
const activeLink = ()=>{
    pags.forEach((pag)=>{
        pag.classList.remove("active");    
    })
    event.target.classList.add("active");
    currentValue = event.target.value;
    imgContainer.innerHTML = "";
    imgContainer.innerHTML = `<img src="${data[currentValue-1].img}"  />`
    
}

//next-btn-change
nextBtn.onclick = ()=>{
    if(currentValue < 9){
        pags.forEach((pag)=>{
            pag.classList.remove("active");    
        })
        currentValue++;
        pags[currentValue-1].classList.add("active");
        imgContainer.innerHTML = "";
        imgContainer.innerHTML = `<img src="${data[currentValue-1].img}"  />`
    }
}

//previous-btn-change
preBtn.onclick = ()=>{
    if(currentValue > 1){
        pags.forEach((pag)=>{
            pag.classList.remove("active");    
        })
        currentValue--;
        pags[currentValue-1].classList.add("active");
        imgContainer.innerHTML = "";
        imgContainer.innerHTML = `<img src="${data[currentValue-1].img}"  />`
    }
}