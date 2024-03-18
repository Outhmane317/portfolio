/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
      // reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".work__img, .contact__input", { interval: 200 });

//*===== TAG CLOUD =====*/

var entries = [
  {
    label: "Javascript",
  },
  {
    label: "Express",
  },
  {
    label: "Typescript",
  },
  {
    label: "MongoDB",
  },
  {
    label: "CSS5",
  },
  { label: "Html" },
  { label: "NoSQL" },
  { label: "Api" },
  { label: "JSON" },
];

var settings = {
  entries: entries,
  width: 400,
  height: 400,
  radius: "65%",
  radiusMin: 75,
  bgDraw: true,
  bgColor: "transparent",
  opacityOver: 1.0,
  opacityOut: 0.05,
  opacitySpeed: 6,
  fov: 700,
  speed: 0.6,
  fontFamily: "Oswald, Arial, sans-serif",
  fontSize: "23",
  fontColor: "white",
  fontWeight: "bold", //bold
  fontStyle: "normal", //italic
  fontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  fontToUpperCase: true,
};
$(".content").svg3DTagCloud(settings);
