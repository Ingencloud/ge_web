// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="overflow-hidden py-24 sm:py-32" id="ourStorySection">
      <div class="mx-auto max-w-7xl px-6 lg:px-8" style="z-index: 2;">
        <div class="lg:pr-4">
          <div class="mx-auto w-auto">
            <h2 class="mb-4 text-4xl font-bold leading-7 text-left md:text-5xl lg:text-8xl textColor" style="font-family: 'Playfair Display SC', serif;" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#6a1c91" class="w-10 h-10 lg:w-16 lg:h-16 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>
Our Story

             </h2>
            
            </div>
</div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 text-lg lg:text-xl font-bold">
          <div class="lg:pt-2 animate-fade-in-left">
            
            <div class="lg:max-w-lg text-justify" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
              <p class="text-lg lg:text-2xl font-medium text-left leading-8 text-black">
                In just a few months, the grand adventure of 'forever' begins, and we're jumping with joy to have you right there with us! Our story started with a sweet act of kindness—Edi lending me a laptop to complete an assignment because mine just wouldn’t work—and from there, it bloomed into years filled with laughter, love, and bliss.              </p>
              <img src="../assets/23.jpg" class="rounded-lg mt-4" alt="">

              <p class="mb-4 mt-4 text-lg lg:text-2xl font-medium  leading-8 text-left text-black" >
                Being our first semester at Ashesi and taking several classes together, we were constantly in each other's space. In a hilarious twist of fate, Edi, 
                with a hint of persuasion, talked me into completing more essay assignments for her. But we got closer, and soon our friend circles meshed, and Edi's room (Room 202) 
                became the go-to place for a nap or a chill spot between classes.               </p>
               <img src="../assets/22.jpg" class="rounded-lg" alt="">

            </div>
          </div>
          <div class="relative isolate px-6 pt-2 lg:px-8 animate-fade-in-right" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
            <p class="mb-4 text-lg leading-8 lg:text-2xl font-medium  text-left text-black">
              Ultimately, we started to have more conversations with each other than with the friend groups. Our chats shifted from campus gossip to personal quirks, and we realized we were total opposites; Edi was all about TV Shows and lounging while I was all about sports. But hold on, during our summer school escapades, we discovered common ground in our love for music and an unstoppable craving for milkshakes,
               even though both of us were lactose intolerant.
               
</p>                 <img src="../assets/11.jpg" class="rounded-lg"  alt="">
                 <p class="mt-6 text-lg lg:text-2xl font-medium  leading-8 text-left text-black">
                  This summer marked the start of our journey till date, and the moments we have shared kept teaching us that embracing each other's quirks was the secret sauce for navigating life's rollercoaster together. To be fair, having survived doing a five-year-plus long-distance relationship (Weija to Sakumono, if you're measuring), we're excited that we are now just a hop, skip, and a jump away from our big day.
                </p> 
                <p class="mt-6 text-lg lg:text-2xl font-medium  leading-8 text-left text-black">
                  Get ready to join us in the celebration—we can't wait to make memories with you!                </p> 
              
              </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  


  export default {
  name: 'OurStory',
 
  components: {

  },
data () {
          return {
           }
},
}


  </script>

  <style scoped>

  .textColor {
    color:#6a1c91;
  }
/* 
  .bgImage {

  } */
  .bgColor {
  background-color: #d4d4d4 ;
}
@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-right {
  animation: fade-in-right 3s ease-out;
}

@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 3s ease-out;
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 3s ease-out;
}

/* .backgroundImage {
  background-image: url("../assets/Flowerswallpaper.jpeg") ;
} */
</style>
