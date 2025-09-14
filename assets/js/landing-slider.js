window.addEventListener('load',function(){
    const slideImgs = document.querySelectorAll(".slide-image")

    let index = 0

    setInterval(() => {
        slideImgs.forEach(slide => {
            slide.classList.remove("active")
        })

        slideImgs[index].classList.add("active")
        index++

        if(index > slideImgs.length - 1) index = 0
    }, 8000)
});
