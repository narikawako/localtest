const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[i].classList.add("active");
    dots[i].classList.add("active");
    index = i;
}

function nextSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
    });
});

setInterval(nextSlide, 5000);

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.menu-nav');

    if (btn && nav) {
        btn.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
});



// 页面加载时
function setHeaderOffset() {
  const header = document.querySelector('.site-header');
  const main = document.querySelector('.main-content');
  
  if (header && main) {
    const headerHeight = header.offsetHeight; // 获取实际高度
    main.style.marginTop = headerHeight + 'px';
  }
}
// 执行
setHeaderOffset();
// 如果窗口大小改变可能导致 header 高度变化（如响应式换行）
window.addEventListener('resize', setHeaderOffset);