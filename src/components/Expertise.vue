<template>
     <!-- EXPERTISE STARTS -->

     <div id="expertise" class="expertise mt-72 pt-4 w-[100vw] h-auto ">

        <h1 class="fade-in lg:text-7xl md:text-7xl text-5xl mx-auto mb-32 flex justify-center font-black text-orange-400 items-center content-center">03//expertise</h1>
       <div>


  
       </div>
<!-- content table starts -->


<div class="content m-6 px-10 flex flex-col justify-center items-center lg:flex-row">

    <!--card -->

    <div v-for="table in tables" :key="table" class="move-in w-[80vw] h-[55vh] lg:h-[75vh] md:h-[60vh]  sm:mb-2 bg-transparent py-12 m-2  border-8 border-white shadow flex justify-center items-center flex-col">


        <!-- title  -->
        <div class="title flex flex-row items-center">
            <img :src="table.image" alt="" style="width: 20%;">
            <div>
                <p class=" mx-6 mt-6 border-b-4 border-orange-400 font-semibold text-xl md:text-3xl">{{table.title1}}</p>
                        
                 <p class=" mx-6  font-semibold text-xl md:text-3xl">{{table.title2}}</p>
            </div>


        </div>

        <!-- content -->
        
        <div class=" p-6 mt-2 mb-5 mx-3 box border-l-4 border-orange-400">
            
            <br>
            <p class="text-md md:text-xl flex items-center  font-medium">{{table.content}}</p>

        </div>
        
    </div>

    

</div>



</div>


<!-- EXPERTISE ENDS -->





</template>

<script setup>


//import the tables from the expertise.js module
import { tables } from '@/modules/expertise.js';

</script>

