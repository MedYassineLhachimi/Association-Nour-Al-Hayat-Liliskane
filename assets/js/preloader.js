window.addEventListener('load',function(){
  document.querySelector('.preloader').classList.add("fade-out")
  setTimeout(()=> {
    document.querySelector('.preloader').classList.add("hidden")
  }, 800)
});
