const intro = document.querySelector(".intro");
const text = intro.querySelector("h1");
const paragraph = intro.querySelector("p");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Apple images
const frameCount = 148;

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 7000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);


//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

const pAnim =  TweenMax.fromTo(paragraph, 3, { opacity: 1 }, { opacity: 0 });


let scene2 = new ScrollMagic.Scene({
    duration: 2000,
    triggerElement: intro,
    triggerHook: 0.5
  })
    .setTween(textAnim)
    .addTo(controller);

let scene3 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
    })
    .setTween(pAnim)
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

  //getting img from apple and displaying them on the canvas

const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

// const frameCount = 148;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)

//preload a black picture if needed
// const preloadImages = () => {
//   for (let i = 1; i < frameCount; i++) {
//     const img = new Image();
//     img.src = currentFrame(i);
//   }
// };

// var oldIndex = 1;
const img = new Image()
img.src = currentFrame(1);
canvas.width=1158;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
    // if(oldIndex !== index){
    //     if(oldIndex < index ){
    //         canvas.width=canvas.width - 1;
    //         canvas.height=canvas.height - 1;
    //        }
    //        else {
    //         canvas.width=canvas.width + 1;
    //         canvas.height=canvas.height + 1;
    //        }
    //        oldIndex = index;
    // }
   
console.log("current index" + index);
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()