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
                In just a few months, we'll be embarking on our forever adventure, and we're overjoyed that you'll be a part of it. What began with a simple act of kindness—Edi lending a laptop—has blossomed into years filled with friendship, love, and sheer happiness.
              </p>
              <img src="../assets/23.jpg" class="rounded-lg mt-4" alt="">

              <p class="mb-4 mt-4 text-lg lg:text-2xl font-medium  leading-8 text-left text-black" >
                Our journey traces back to our first semester at Ashesi when our paths crossed over a written and oral assignment. In a quirky twist of fate, Edi, somewhat assertively, convinced Gilbert to handle our assignment. Soon enough, we realized that our friendship circles intertwined, making Edi's room (Room 202) a regular hangout spot between classes—a place to catch a nap or simply chill during off periods.
               </p>
               <img src="../assets/22.jpg" class="rounded-lg" alt="">

            </div>
          </div>
          <div class="relative isolate px-6 pt-2 lg:px-8 animate-fade-in-right" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
            <p class="mb-4 text-lg leading-8 lg:text-2xl font-medium  text-left text-black">
              As our conversations evolved from campus buzz to personal interests, we discovered that we were polar opposites; Edi cherished Disney Shows, while Gilbert was all about sports. Yet, during our summer school days, we found common ground in our love for music and the undeniable craving for milkshakes, even if being lactose intolerant tried to intervene.
                 </p>
                 <img src="../assets/11.jpg" class="rounded-lg"  alt="">
                 <p class="mt-6 text-lg lg:text-2xl font-medium  leading-8 text-left text-black">
                  This period marked the commencement of our journey to graduation, teaching us that by embracing each other's uniqueness, we could navigate life's twists and turns together. Despite enduring a year-plus of long-distance (Weija to Sakumono totally qualifies), we find ourselves a step closer to our most significant day yet, and we can hardly wait to celebrate it with you.              </p>
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
