

window.addEventListener("scroll", function () {
    const scrollBlurElement = document.getElementById("navbar-scroll");
    
    if (window.scrollY > 0) {
        scrollBlurElement.classList.remove("bg-[#F9F7F3]"); 
    } else {
        scrollBlurElement.classList.add("bg-[#F9F7F3]"); 
    }
});
