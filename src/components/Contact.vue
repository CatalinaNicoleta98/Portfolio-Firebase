<template>
    <div id="contact" class="expertise my-72 pt-4 w-[100vw] h-auto  ">
        <h1 class="fade-in lg:text-7xl md:text-7xl text-5xl mx-auto mb-32 flex justify-center font-black text-orange-400 items-center content-center">05//contact</h1>


        <!-- contact form -->


<section class="bg-black">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        
        <p class="fade-in mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Did I catch your attention? I am available for projects!</p>
        <form class="space-y-8" action="https://formspree.io/f/xayrljwy" method="POST">
            <div>
                <label for="email" class="move-in block mb-2 text-sm font-medium text-rose-300">//Your Email</label>
                <input name="_replyto" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required>
            </div>
            <div>
                <label for="name" class="move-in block mb-2 text-sm font-medium text-rose-300">//Your Name</label>
                <input name="name" type="text" id="name" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Full Name" required>
            </div>
            <div class="sm:col-span-2">
                <label for="message" class="move-in block mb-2 text-sm font-medium text-rose-300">//Your message</label>
                <textarea name="message" id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
            </div>
            <input type="text" name="_gotcha" style="display:none" />
            <button type="submit" class="move-in py-3 text-lg font-medium text-center hover:text-rose-300 text-orange-200 ">//Send message</button>
        </form>
    </div>
</section>


    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>