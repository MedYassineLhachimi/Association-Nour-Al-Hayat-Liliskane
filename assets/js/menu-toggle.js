const menuBtns = document.querySelectorAll(".menu-btn svg")
const navBarList = document.querySelector(".landing nav ul")

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        menuBtns[0].classList.toggle("hidden")
        menuBtns[1].classList.toggle("hidden")
        navBarList.classList.toggle("visible")
    })
})