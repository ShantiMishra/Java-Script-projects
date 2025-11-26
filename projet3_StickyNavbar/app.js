const navbar= document.querySelector(".navbar");
const topContainer= document.querySelector(".top-container");
const bottomContainer = document.querySelector(".bottom-container");



window.addEventListener("scroll", () =>{
    if(
        window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight - 50
    )
    {
       navbar.classList.add("active");
    }
    else{
        navbar.classList.remove("active");
    }
})