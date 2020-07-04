const intro = document.querySelector(".intro");
const canvas = intro.querySelector("canvas");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Apple images
const frameCount = 148;

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);


//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });


let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
  })
    .setTween(textAnim)
    .addTo(controller);



//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos/33.7;
    console.log("scroll possition: " + scrollpos);
  });

  setInterval(() => {
      delay +=(scrollpos - delay) * accelamount;
    //   console.log(scrollpos, delay);
      //call img with integer of delay
      //delay to int
  }, 33.3)