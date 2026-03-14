const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i){

slides.forEach(slide => slide.classList.remove("active"));
dots.forEach(dot => dot.classList.remove("active"));

slides[i].classList.add("active");
dots[i].classList.add("active");

index = i;

}

function nextSlide(){

index++;

if(index >= slides.length){
index = 0;
}

showSlide(index);

}

function prevSlide(){

index--;

if(index < 0){
index = slides.length - 1;
}

showSlide(index);

}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

dots.forEach((dot,i)=>{

dot.addEventListener("click",()=>{

showSlide(i);

});

});

setInterval(nextSlide,5000);