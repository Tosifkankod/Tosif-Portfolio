let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
  .to(".marquee-w", 4, { y: -200 })
  .to(".arrow", 4, {y: -50}, "-=4")
  .to(".changingtext-wrapper", 4, {y: -100}, "-=4")
  .fromTo(".skills_text_container", { opacity: 0 }, { opacity: 1, duration: 4 })
  .fromTo(".about_me_line", { opacity: 0 }, { opacity: 1, duration: 5 })
  .fromTo(".paragraph", { opacity: 0 }, { opacity: 1, duration: 6 })
  .to(".skill1", 10, { y: 200 }, "-=5")
  

let scene = new ScrollMagic.Scene({
  triggerElement: "section",
  duration: "300%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin("main")
  .addTo(controller);
