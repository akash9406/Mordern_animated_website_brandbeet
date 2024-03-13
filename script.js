const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-1",
    start: "50% 50%",
    end: "250% 50%",
    scrub: true,
    // markers: true,
    pin: true,
  },
});
tl.to(
  ".rotate-div",
  {
    rotate: -15,
    scale: 0.7,
  },
  "a"
);
tl.to(
  "#row-div-2",
  {
    marginTop: "0%",
  },
  "a"
);
tl.to(
  "#row-div-3",
  {
    marginTop: "-3%",
  },
  "a"
);
tl.to(
  "#row-div-4",
  {
    marginTop: "-2%",
  },
  "a"
);
tl.to(
  "#row-div-5",
  {
    marginTop: "-8%",
  },
  "a"
);

tl.to(
  ".overlay-div h1",
  {
    opacity: "1",
    delay: 0.2,
  },
  "a"
);
tl.to(
  ".overlay-div",
  {
    backgroundColor: "#000000b4",
  },
  "a"
);

tl.to(
  ".scrolling",
  {
    width: "100%",
  },
  "a"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-2",
    start: "0% 70%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.to(".rounded-div-wrapper", {
  height: 0,
  marginTop: 0,
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-2",
    start: "20% 50%",
    end: "100% 50%",
    // markers: true,
    scrub: 1,
  },
});
tl3.to(".text-area-hover h1", {
  width: "100%",
});
tl3.to(".text-area-hover h2", {
  delay: -0.4,
  width: "100%",
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-4",
    start: "top top",
    endTrigger: ".rght-part-4",
    end: "bottom 50%",
    // markers: true,
    pin: ".lft-part-4",
    scrub: 1,
  },
});

tl4.to(
  "#c-1",
  {
    opacity: "1",
  },
  "sx"
);

tl4.to(
  "#c-2",
  {
    opacity: "1",
  },
  "sx2"
);

tl4.to(
  "#c-1",
  {
    opacity: "0",
  },
  "sx2"
);

tl4.to(
  "#c-3",
  {
    opacity: "1",
  },
  "sx3"
);

tl4.to(
  "#c-2",
  {
    opacity: "0",
  },
  "sx3"
);

tl4.to(
  "#c-3",
  {
    opacity: "0",
  },
  "sx4"
);
tl4.to(
  ".cir-part-4",
  {
    marginLeft: "90%",
    rotate: 360,
  },
  "sx4"
);

let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".content-5",
    start: "20% 50%",
    end: "100% 50%",
    // markers: true,
    scrub: 1,
  },
});

tl5.to(".text-area-hover-5 h1", {
  width: "100%",
});
tl5.to(".text-area-hover-5 h2", {
  delay: -0.4,
  width: "100%",
});
tl5.to(
  ".rounded-div-wrapper-5",
  {
    height: 0,
    marginTop: 0,
  },
  "s"
);

let tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-6",
    start: "top top",
    endTrigger: ".endtrigger",
    end: "bottom 50%",
    pin: true,
    scrub: 1,
    // markers: true,
  },
});

tl6.to(
  ".right-upper",
  {
    x: "70%",
    y: "50%",
  },
  "sm"
);
tl6.to(
  ".lft-upper",
  {
    x: "-70%",
    y: "-50%",
  },
  "sm"
);
tl6.to(
  ".cover1",
  {
    height: 0,
  },
  "sm"
);
tl6.to(
  ".cover2",
  {
    marginTop: "14%",
    height: 0,
  },
  "sm"
);
tl6.to(
  ".real-content",
  {
    marginTop: "-140%",
  },
  "sm2"
);

const myText = new SplitType(".final1");

var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".final1",
    start: "top 50%",
    end: "bottom 40%",
    // markers: true,
    toggleActions: "play none play reverse",
  },
});

tl8.to(".final1 .char", {
  y: 0,
  stagger: 0.05,
  duration: 0.01,
});
