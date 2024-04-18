// modals from about section


import { ref } from 'vue';

export const modals = ref([
  { title: "//Video CV", source: "https://www.youtube.com/embed/3p2HhEIpnqI" },
  { title: "//Download CV", source: "../img/CV.pdf", link: "https://drive.google.com/file/d/1H0607ulG-F9Wehm19RwMVPuex-7l-YVB/view?usp=sharing"},
  { title: "//Certificates", source: "../img/Certificates.pdf", link:"https://drive.google.com/file/d/1FXb9lfwAN-vdSjTv0i6XMjS7LN3uuRRF/view?usp=sharing" },
]);

export const currentSlide = ref(0);
export const images = ref([
  { picture: "../img/read.jpeg", title: "Reading" },
  { picture: "../img/pizza.jpg", title: "Cooking" },
  { picture: "../img/painting.jpg", title: "Painting" },
  { picture: "../img/outdoors.jpg", title: "Outdoors" },
  { picture: "../img/music.png", title: "Music" },
  { picture: "../img/coding.jpeg", title: "Coding" },

]);
