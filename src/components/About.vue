<template>
      <!-- HERE STARTS about SECTION -->

  <div  class=" about pt-72 w-[100vw] h-auto bg-gradient-to-b from-[#2C0916] to-black">

              <h1  id="about" class=" fade-in lg:text-7xl md:text-7xl font-black text-orange-400 text-5xl mb-32 mx-auto flex justify-center items-center content-center">02//about</h1>


      <!-- ABOUT ME -->

      <div class="about my-2">
          <div class="flex flex-col p-10 lg:flex-row md:flex-col justify-center items-center">

              <div id="modals" class="  photo mx-4 w-[100%] lg:w-[50%] md:w-[80%] mb-5"><img class="fade-in" src="/public/img/cartoon.jpg" alt="">


                <div class="flex flex-row lg:flex-row md:flex-row ">

                                  <!-- BTN -->

                                  <a v-for="(modal, index) in modals" :key="index" @click="openModal(index)" href="#modals" class="mt-11 lg:mr-5 md:mr-5 mr-2 font-bold  hover:text-rose-300 text-orange-200 ">{{modal.title}}</a>
          
                                  <!-- Modal -->
                                <div v-if="selectedModal !== null" class="fixed inset-0 z-10 flex items-center justify-center bg-slate-500 bg-opacity-50">
                                  <div class="bg-black p-8 rounded-lg w-[90%] h-[90vh] flex flex-col justify-center items-center  border-orange-300 border-2 ">
                                     
                                  
                                      <!--iframe -->
                                      <iframe class=" w-[100%] h-[100vh] lg:w-[90%] lg:h-[100vh] md:w-[90%] md:h[100vh] " :src="modals[selectedModal].source" frameborder="0" allowfullscreen></iframe>


                                      <!-- download pdf -->
                                      
                                      <div class=" lg:hidden md:hidden flex mt-5 justify-center items-center" v-if="modals[selectedModal].link">
                                          <button><a :href="modals[selectedModal].link" class="font-bold text-xl hover:text-rose-300 text-orange-200">// Download</a></button>
                                      </div>

                                       <!-- Close button -->
                                      <button @click="closeModal" class="text-xl font-bold mt-5 hover:text-rose-300 text-orange-200">//Close</button>
                                  </div>
                                </div>
                  

                              




                </div>

              </div>

              <div class=" fade-in mx-4 w-[100%] lg:w-[50%] md:w-[80%] mb-5">
                  <p class="text-xl mb-20 ">My name is Catalina and I am a 25 year old multimedia-design student, focusing on learning skills that will help me become a front-end developer.
                  I grew up in Romania, but I have been calling Denmark home for the past couple of years.
                  I am passionate about coding, design and learning new things. <span v-if="!isParagraphVisible"  class="animate-pulse text-2xl">...</span>
                  </p><br>
                 
                  <p class="text-xl mb-20" v-if="isParagraphVisible" >I love reading and immersing myself in fantastical worlds as well as recreating nature on canvas as seen through my eyes. <br>I am a very curious person and I love to explore new places and cultures. One of my good traits is that, while i thrive working independently, I am also a good team player. As a professional, I appreaciate a calm and organized working space, but I discovered that I do some of my best work under pressure.
                  <br>I believe we could collaborate and create something amazing together! </p>
                  <button class="hover:text-rose-300 text-orange-200 font-bold" @click="toggleParagraphVisibility" v-if="!isParagraphVisible">//Read more</button>
                  <button class="hover:text-rose-300 text-orange-200 font-bold" @click="toggleParagraphVisibility" v-if="isParagraphVisible">//Read less</button>
          
                  
              </div>



          </div>
  </div>


  <!-- HOBBIES -->
  
  <h1 class="fade-in p-10 my-32 lg:text-7xl md:text-7xl text-5xl font-bold text-rose-300 text-center">//hobbies</h1>

  <p class="fade-in mx-4 p-10 text-xl font-medium">While my professional focus is on development, in my free time I have simple yet relatable hobbies that help keeping me busy and entertained.</p>


  <!--  carousel -->



      <div class="fade-in flex justify-center items-center h-96 md:h-[70vh] lg:h-screen">
          <div class="mt-3 w-[80vw] lg:h-[80vh] md:h-[50vh] h-[30vh] relative overflow-hidden">
            <div class="flex" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(image, index) in images" :key="index" class="flex-shrink-0 w-full relative">
                <h1 class=" absolute font-blackabsolute inset-0 flex justify-center items-center text-white font-bold text-4xl lg:text-8xl md:text-6xl shadow-lg">{{ image.title }}</h1>
                <img :src="image.picture" alt="Carousel Slide" class="w-[80vw] lg:h-[80vh] md:h-[50vh] h-[30vh]">
                
              </div>
            </div>
            <button @click="prevSlide" class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-35 hover:bg-opacity-80 p-2 rounded-full shadow-md">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button @click="nextSlide" class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-35 hover:bg-opacity-80 p-2 rounded-full shadow-md">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
          </div>
      </div>

</div>

<!-- ABOUT ENDS HERE -->
</template>

<script setup>
import { ref } from 'vue';

import { modals, currentSlide, images } from '@/modules/about.js';





// read more/read less

const isParagraphVisible = ref(false);

const toggleParagraphVisibility = () => {
  isParagraphVisible.value = !isParagraphVisible.value;
};



// open-close modal function
const selectedModal = ref(null);

const openModal = (index) => {
  document.body.classList.add('modal-open');
  selectedModal.value = index;
};

const closeModal = () => {
  document.body.classList.remove('modal-open');
  selectedModal.value = null;
};
  
// download pdf








// carousel js

let intervalId = null;

const prevSlide = () => {
  clearInterval(intervalId); // Stop automatic sliding
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = () => {
  clearInterval(intervalId); // Stop automatic sliding
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
};

// Automatically switch to the next slide every 3 seconds
intervalId = setInterval(() => {
  currentSlide.value = (currentSlide.value + 1) % images.value.length;
}, 3000);

</script>

<style scoped>


</style>
