// eslint-disable-next-line vue/multi-word-component-names
<template>


<section id="scheduleSection" class="relative isolate justify-center overflow-hidden px-6 py-24 sm:py-32 lg:py-8 lg:px-8 my-10 ">
  <div class="text-center">
    <div class=" max-w-2xl gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none animate-fade-in-up">
          <div class="lg:pt-4">
            <h2 class="mb-10 text-4xl font-bold leading-7 text-center md:text-5xl lg:text-8xl textColor" style="font-family: 'Playfair Display SC', serif;" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#6a1c91" class="w-10 h-10 lg:w-16 lg:h-16 mb-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
            Event Details</h2>
           

            <h2 class="mb-10 text-black text-2xl  lg:text-6xl font-extrabold dark:text-black"  style="font-family: 'Playfair Display SC', serif;" >Wednesday 1st May, 2024</h2>
            </div>
            </div>


            <div class="grid sm:grid-cols-1 lg:grid-cols-3" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
              <div class=" p-4 rounded-lg md:p-8 " id="services" role="tabpanel" aria-labelledby="services-tab">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#6a1c91" class="w-10 h-10 lg:w-16 lg:h-16 mb-2 inline">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                       <h2 class="mb-5 text-xl  lg:text-2xl font-extrabold tracking-tight text-black dark:text-black">
                          <span class="font-extrabold">Time:</span> 14:30 GMT</h2>
                   
              </div>
              
          <div class=" p-4 rounded-lg md:p-8 " id="services" role="tabpanel" aria-labelledby="services-tab">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#6a1c91" class="w-10 h-10 lg:w-16 lg:h-16 mb-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
            <h2 class="mb-5 text-xl  lg:text-2xl font-extrabold tracking-tight text-black dark:text-black">
          

Attire: Cocktail            </h2>
<p class="mb-3 text-lg  lg:text-2xl text-black dark:text-black">
  <span class="font-bold"> Colors:</span> A touch of purple, navy blue or white.
</p>
           
        </div>
        <div class=" p-4 rounded-lg md:p-8 " id="services" role="tabpanel" aria-labelledby="services-tab">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#6a1c91" class="w-10 h-10 lg:w-16 lg:h-16 mb-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
            <h2 class="mb-5 text-xl  lg:text-2xl font-extrabold tracking-tight text-black dark:text-black">
             
              THE HUB FITNESS CENTRE, NMAI DZORM - ADJIGARNOR ROAD            </h2>
            <button @click="redirectToMap" type="submit" class="w-auto text-white bg-purple-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-lg text-lg px-5 py-2.5 text-center dark:bg-purple-900 dark:hover:bg-gray-700 dark:focus:ring-gray-800" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">Get directions</button>
        </div>
  
        </div>
        </div>
</section>

</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Schedule',
  components: {
  },
  methods: {
    redirectToMap() {
      window.location.href = 'http://maps.google.com/?q=5.668627,-0.125869&q=5.6686270,-0.1258690&entry=gps&lucs=,47071704,47069508,47084304,94206604&g_ep=CAISDTYuMTAyLjMuNDI5MjAYACDXggMqJCw0NzA3MTcwNCw0NzA2OTUwOCw0NzA4NDMwNCw5NDIwNjYwNEICR0g%3D&g_st=i';
    }
  }
}
</script>

<style>
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 5s ease-out;
}

.bgColor {
  background-color: #d4d4d4 ;
}

.textColor {
    color:#6a1c91;
    font-family: 'demo';
  }

  /* .backgroundImage {
  background-image: url("../assets/Flowerswallpaper.jpeg") ;
} */
</style>