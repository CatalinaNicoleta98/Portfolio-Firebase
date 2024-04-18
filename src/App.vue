<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Expertise from './components/Expertise.vue'
import Portfolio from './components/Portfolio.vue'
import Footer from './components/Footer.vue'
import Sound from './components/Sound.vue'
import Contact from './components/Contact.vue'





</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      

      <nav>

        <ul>
          <li> <RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>

      </nav>
    </div>
  </header>

  <RouterView />  content that changes based on bavigation pages -->

<Home />
<About />
<Expertise />
<Portfolio />
<Contact />
<Sound />
<Footer />


 
  
  

</template>


