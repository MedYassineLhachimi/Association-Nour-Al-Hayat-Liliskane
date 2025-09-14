window.addEventListener('load',function(){
  let swiper = new Swiper (".swiper", { effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 4,
  loop: true,
  speed: 600,
  preventClicks: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100, 
    modifier: 2.5,
    slideShadows: false,
  },
  on: {
    click(event) {
    swiper.slideTo(this.clickedIndex);
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
});