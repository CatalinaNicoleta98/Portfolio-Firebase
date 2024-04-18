<template>
   <div  id="home" class="header">

    

<!-- NAVIGATION, MAKE STICKY -->
 <nav class="flex flex-row lg:items-center lg:justify-center md:items-center md:justify-center justify-start mx-auto w-[100%]  bg-black bg-opacity-50 z-10 fixed">
     
         <ul class=" hidden md:flex lg:flex flex-row text-md mt-7 mb-5">
             <li class="ml-7 mr-6"><a class="font-bold text-orange-300 hover:text-rose-300" href="#home">01//home</a></li>
             <li class="mr-6"><a class="font-bold text-orange-300 hover:text-rose-300" href="#about">02//about</a></li>
             <li class="mr-6"><a class="font-bold text-orange-300 hover:text-rose-300" href="#expertise">03//expertise</a></li>
             <li class="mr-6"><a class="font-bold text-orange-300 hover:text-rose-300" href="#portfolio">04//portfolio</a></li>
             <li class="mr-11"><a class="font-bold text-orange-300 hover:text-rose-300" href="#contact">05//contact</a></li>
         </ul>



         <!-- burger menu -->
         <div class="lg:hidden md:hidden">
      <button class="navbar-burger flex items-center text-orange-300 hover:text-rose-300 p-3" @click="toggleMenu">
        <i class="fa-solid fa-bars text-4xl"></i>
      </button>
    </div>

    <div class="navbar-menu relative z-50" :class="{ 'hidden': !menuOpen }">
      <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-[80vw] h-[70vh] py-6 px-6 bg-black bg-opacity-50">
        <div class="flex items-center mb-8">
          <button class="navbar-close" @click="toggleMenu">
            <i class=" text-end text-6xl text-transparent fa-solid fa-x"></i>
          </button>
        </div>
        <div>
          <ul class="flex flex-col">
            <li class="mb-10">
              <a class=" text-xl font-bold  text-orange-300 hover:text-rose-300" href="#home" @click="closeMenu">01//home</a>
            </li>
            <li class="mb-10">
              <a class=" text-xl font-bold  text-orange-300 hover:text-rose-300" href="#about" @click="closeMenu">02//about</a>
            </li>
            <li class="mb-10">
              <a class=" text-xl font-bold  text-orange-300 hover:text-rose-300" href="#expertise" @click="closeMenu">03//expertise</a>
            </li>
            <li class="mb-10">
              <a class=" text-xl font-bold  text-orange-300 hover:text-rose-300" href="#portfolio" @click="closeMenu">04//portfolio</a>
            </li>
            <li class="mb-10">
              <a class=" text-xl font-bold  text-orange-300 hover:text-rose-300" href="#contact" @click="closeMenu">05//contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
     
 </nav>
 
 
 <div class="center flex flex-col justify-center items-center  ">

     <!-- THIS IS NAME-->

     <div  class=" name flex flex-col justify-center items-center mt-72  bg-black bg-opacity-50 w-[100vw] h-48 lg:h-60 md:h-60  ">

         <h1 class=" text-rose-300 text-4xl lg:text-8xl md:text-7xl font-black"><span class="mr-1 font-outline-2">{{name}}</span> </h1>
         <h2 class=" text-white text-lg lg:text-4xl md:text-2xl font-bold mt-4">{{ ocupation }}</h2>

         
         
         
     </div>

     <!-- THIS IS THE ARROW MOUSE SVG -->

         <a class="flex justify-center items-baseline animate-bounce" href="#about">
             <svg xmlns="http://www.w3.org/2000/svg" class="w-11 h-11  mt-32 lg:mt-20" viewBox="0 0 24 24"><path class="down" d="M12 2c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6s-6-2.691-6-6v-8c0-3.309 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8v8c0 4.418 3.582 8 8 8s8-3.582 8-8v-8c0-4.418-3.582-8-8-8zm0 9c-.829 0-1.5-.672-1.5-1.5s.671-1.5 1.5-1.5 1.5.672 1.5 1.5-.671 1.5-1.5 1.5z"fill="#FFCDAB"/></svg>
         
         </a>
     

 </div>




</div>
</template>


<!-- scoped style only for this component -->
<style scoped>.cls-1{fill:#ffffff;font-family:SpaceGrotesk-Regular, 'Space Grotesk';font-size:12px;font-variation-settings:'wght' 400;stroke:#000000;stroke-width:.5px;}.cls-1,.cls-2{stroke-miterlimit:10;}.cls-2{fill:#fef0b6;font-family:SpaceGrotesk-Medium, 'Space Grotesk';font-size:24px;font-variation-settings:'wght' 500;font-weight:500;stroke:#be5b5d;}.cls-3{letter-spacing:-.01em;}

/* image background css */

.header{
    width: 100vw;
    height: 100vh;
    background-image: url('../img/lo-fi.png');
    background-size: cover;
    background-position: center;
    
    
  
  };


</style>


<script setup>
 import { ref } from 'vue';

const name = 'CATALINA VRINCEANU';
const ocupation = 'Front-End Developer | Multimedia Designer';

// Burger menu function

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};



</script>