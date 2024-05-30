import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//gsap.to()... infinity and beyond!
gsap.registerPlugin(ScrollTrigger);
const containerWidth = document.querySelector(".eye-container").scrollWidth;
const eyeWidth = document.querySelector(".eyes").scrollWidth;

console.log(containerWidth);
//To learn more about using GreenSock's bonus plugins for free on CodePen visit: https://gsap.com/trial
gsap.to(".eye-container", {
  x: -(containerWidth - eyeWidth),
  scrollTrigger: {
    trigger: ".pinned-container",
    scrub: 0,
    start: "top top",
    end: "bottom bottom",
  },
});
