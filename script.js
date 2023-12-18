let formBtn = document.querySelector('#login-btn');

formBtn.addEventListener('click', () =>{
  loginForm.classList.add('active');
});




var swiper = new Swiper(".furneture-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });