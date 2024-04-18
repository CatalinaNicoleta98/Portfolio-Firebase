<template>
  <div>
    <div id="portfolio" class="portfolio my-72 py-4 w-[100vw] h-auto">
      <!-- PORTFOLIO PROJECTS STARTS -->
      <h1 class="fade-in lg:text-7xl md:text-7xl text-5xl mb-32 mx-auto flex justify-center font-black text-orange-400 items-center content-center">04//portfolio</h1>
      <!-- Filter  -->

      <ul id="filter-buttons" class="move-in flex lg:flex-row md:flex-row flex-wrap text-md mt-7 mx-4 lg:p-10 md:p-10 mb-5">
              <li class="lg:ml-7 mr-6 mt-2 text-orange-300">Filter by</li>
              <li class="mr-7 mt-2" :key="identifier" @click="filterCards('')"><a class="text-orange-300  hover:text-rose-300 cursor-pointer">// All</a></li>
              <li class="mr-7 mt-2" :key="identifier" @click="filterCards('development')"><a class="text-orange-300  hover:text-rose-300 cursor-pointer">01// Development</a></li>
              <li class="mr-7 mt-2" :key="identifier" @click="filterCards('ux')"><a class="text-orange-300  hover:text-rose-300 cursor-pointer">02// UI/UX</a></li>
              <li class="mr-7 mt-2" :key="identifier" @click="filterCards('creation')"><a class="text-orange-300  hover:text-rose-300 cursor-pointer">03// Content Creation</a></li>
              
        </ul>

     
      <div id="mywork" class="portfolio m-4 px-10 flex flex-col justify-center items-center lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap">
        <!-- cards -->
        <div v-for="card in filteredCards" :key="card.title" :id="card.identifier" class="moving-border w-96 h-auto mt-4 bg-gray-900 sm:mb-2 p-2 m-5 rounded-lg shadow flex justify-start items-start flex-col">
          <a href="#card" @click="openModal(card)">
            <img class="rounded-lg hover:scale-[101%] w-96 h-96" :src="card.image" alt="">
          </a>
          <div class="p-5">
            <h5 class="text-3xl mt-4 font-black tracking-tight text-white">{{ card.title }}</h5>
            <p class="mb-2 text-md font-light tracking-tight text-white">{{ card.category }}</p>
            <button @click="openModal(card)" class="hover:scale-110 mt-5 hover:text-rose-300 text-orange-200 text-xl">Show Project</button>
          </div>
          <!-- modal here -->
          <div v-if="card.modalVisible" class="fixed inset-0 z-50 overflow-y-auto">
            <div class="flex items-center justify-center bg-slate-500 bg-opacity-50 h-auto">
              <div class="bg-black m-1 p-10 rounded-lg shadow-lg w-[95%] h-auto border-orange-300 border-2">
                <div class="flex flex-col justify-center py-5">
                  <p class="mb-2 text-lg font-semibold text-left">| {{ card.modal_category }}</p>
                  <div class="flex flex-row justify-between">
                    <p class="text-xl text-left font-medium mb-10 text-rose-300">{{ card.modal_tools }}</p>
                    <div v-if="card.modal_repository"><a :href="card.modal_repository"><i class="fa-brands fa-github text-4xl text-orange-300 hover:text-rose-300"></i></a></div>
                    <div v-else=""></div>
                  </div>
                  <h1 class="mb-10">{{ card.modal_description }}</h1>
                  <div class="flex justify-center items-center">
                    <iframe class="mb-10 w-[100vw] lg:h-[80vh] md:h-[50hv] h-[50vh]" :src="card.modal_source" allow="autoplay"></iframe>
                  </div>
                  <div class="flex justify-center items-center" v-if="card.modal_link">
                    <button><a :href="card.modal_link" class="font-bold text-xl hover:text-rose-300 text-orange-200 mt-5">//Visit Project</a></button>
                  </div>
                  <div v-else=""></div>
                  <button @click="closeModal(card)" class="text-xl font-bold mt-5 hover:text-rose-300 text-orange-200">//Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import { onMounted } from 'vue';
import cardsFirebase from '../modules/cardsFirebase';

const { cardList, fetchCards } = cardsFirebase();

const filteredIdentifier = ref('');
const identifiers = computed(() => cardList.value.map(card => card.identifier));
const uniqueIdentifiers = computed(() => [...new Set(identifiers.value)]);

onMounted(() => {
  fetchCards();
});
// filter
const filterCards = (identifier) => {
  filteredIdentifier.value = identifier;
};

const filteredCards = computed(() => {
  if (filteredIdentifier.value === '') {
    return cardList.value;
  } else {
    return cardList.value.filter(card => card.identifier === filteredIdentifier.value);
  }
});
// modal
const openModal = (card) => {
  document.body.classList.add('modal-open');
  card.modalVisible = true;
};

const closeModal = (card) => {
  document.body.classList.remove('modal-open');
  card.modalVisible = false;
};
</script>
