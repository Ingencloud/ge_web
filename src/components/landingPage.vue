<template>
    <div id="homeSection" class="bg-white app" :style="{ backgroundImage: getBackgroundImage() }">
     
  
      <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 animate-fade-in-up">
          <div class="text-center sm:mb-8 sm:justify-center lg:justify-center">
         
            <div class="text-2xl font-bold leading-7 lg:text-6xl mt-44 lg:mt-96 ">
              <div class="w-auto max-w-2xl lg:max-w-4xl p-6 space-y-8 md:p-8 rounded-lg shadow-xl " style="background-color: rgba(17, 24, 39, 0.5);">
                <h2 class="text-white mt-10 lg:text-6xl" style="font-family: 'Playfair Display SC', serif;">Gilbert 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6a1c91" class="w-10 h-10 lg:w-16 lg:h-16 inline">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>

                  Edinam</h2>
                <h2 class="text-2xl lg:text-4xl font-bold text-white opacity-100 dark:text-white opac">
                   Wednesday 1st May, 2024
                </h2>
              <Countdown />
            </div>
            </div>
            <!-- <p class="lg:mt-6 md:mb-8 text-xl font-semibold italic leading-8 text-white">Welcome to our little corner of the web where all the wedding magic is happening! We're beyond excited to announce our union and we believe your presence will make this celebration extra special.
</p> -->
<!-- 
            <div class="flex items-center justify-center inset-x-0 bottom-0  gap-x-6 mt-10">
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="#6a1c91" 
            class="w-16 h-16 animate-bounce">
  <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
</div> -->
          </div>
  

        </div>
       
      </div>
    </div>
  </template>
  
  <script>
  
  const navigation = [
    { name: 'Our Story', href: 'ourstory' },
    { name: 'Schedule', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'GIFT', href: '#' },
  ]
  
  const mobileMenuOpen = ref(false)
  // @ is an alias to /src
  import { ref } from 'vue'
 
  import Countdown from '../components/countdown.vue'
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'LandingPage',
    components: {
    
      Countdown
    },
  data () {
            return {
              navigation,
              mobileMenuOpen,
              isScrolled: false,
              desktopImage: require('../assets/lg.jpg'),
    mobileImage: require('@/assets/28.jpg'),
             }
  },
  computed: {
  currentImage() {
    return window.innerWidth >= 767 ? `url('${this.desktopImage}')` : `url('${this.mobileImage}')`;
  },
},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.updateBackgroundImage);
    this.updateBackgroundImage(); // Initial setup
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.updateBackgroundImage);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    updateBackgroundImage() {
    this.$forceUpdate(); // Force a re-render
  },
  getBackgroundImage() {
    return window.innerWidth >= 767 ? `url('${this.desktopImage}')` : `url('${this.mobileImage}')`;
  },
  },
};
  
  </script>

  <style scoped>
.app {
  min-height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* @media (min-width: 767px) {
  #app {
    background-image: var(--desktop-image);
  }
}

@media (max-width: 766px) {
  #app {
    background-image: var(--mobile-image);
  }
} */

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
</style>