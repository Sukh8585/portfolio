// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    multiplier: 1,
    class: 'is-reveal'
});

// Update ScrollTrigger's scroll proxy to use Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// GSAP Animations with ScrollTrigger
gsap.from(".hero-content h1", {
    scrollTrigger: {
        trigger: ".hero-content",
        start: "top 80%",
        scroller: "[data-scroll-container]",
    },
    duration: 1.5,
    y: -50,
    opacity: 0,
    ease: "bounce.out"
});

gsap.from(".hero-content p", {
    scrollTrigger: {
        trigger: ".hero-content",
        start: "top 75%",
        scroller: "[data-scroll-container]",
    },
    duration: 1.5,
    y: -30,
    opacity: 0,
    delay: 0.5,
    ease: "power2.out"
});

gsap.from(".hero-button", {
    scrollTrigger: {
        trigger: ".hero-button",
        start: "top 70%",
        scroller: "[data-scroll-container]",
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 1,
    ease: "back.out(1.7)"
});

gsap.from("#about h2", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        scroller: "[data-scroll-container]",
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from("#about p", {
    scrollTrigger: {
        trigger: "#about",
        start: "top 75%",
        scroller: "[data-scroll-container]",
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

gsap.from("#projects h2", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top 80%",
        scroller: "[data-scroll-container]",
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".project-gallery",
        start: "top 80%",
        scroller: "[data-scroll-container]",
    },
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from("#contact h2", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        scroller: "[data-scroll-container]",
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from("#contact form", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top 75%",
        scroller: "[data-scroll-container]",
    },
    duration: 1.5,
    y: 50,
    opacity: 0,
    delay: 0.5,
    ease: "power3.out"
});

// Custom Cursor Functionality
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".custom-cursor");
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("mouseover", () => {
        document.querySelector(".custom-cursor").classList.add("hover");
    });
    el.addEventListener("mouseleave", () => {
        document.querySelector(".custom-cursor").classList.remove("hover");
    });
});

// Smooth Fade-In on Page Load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
