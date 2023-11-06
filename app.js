const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {

        // toggle nav
        nav.classList.toggle("nav-active");


        // animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ""
            }
    
            else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // burger animation
        burger.classList.toggle("toggle")

    });

    

}

navSlide();

const timeline = gsap.timeline({defaults: {duration: 0.5}})

timeline.fromTo('.animation-brains', {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.5})
timeline.fromTo('.fastLearner', {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.5})
timeline.fromTo('.animation-tinker', {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.5})
timeline.fromTo('.diy', {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.5})
timeline.fromTo('.animation-coder', {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.5})
timeline.fromTo('.codeWriter', {opacity: 0, x: 100}, {opacity: 1, x: 0, duration: 0.5})

