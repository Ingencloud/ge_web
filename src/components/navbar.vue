<template>
<nav class="bg-transparent border-gray-200 fixed " id="navbar" :class="{ 'bgColor': isScrolled }">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
      <div class="flex items-start rtl:space-x-reverse top-0">
        <img src="../assets/logo2.png" class="h-20" alt="Flowbite Logo" />
        <!-- <span class="self-center text-sm lg:text-lg font-semibold whitespace-nowrap dark:text-white italic" style="font-family: 'Gill Sans';">Becoming..... TheTackies</span> -->
      </div>
      <button @click="toggleMobileNav" type="button" class="flex items-end p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="true">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div :class="{ 'hidden': !isMobileNavOpen }" class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex text-lg flex-col p-4 md:p-0 mt-4 border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
          <router-link to="#home-section" @click="scrollTo('homeSection')" class="block py-2 px-3 text-white rounded md:bg-transparent lg:text-white md:p-0 dark:text-white lg:dark:text-white" aria-current="page">Home</router-link>
          <router-link to="#ourstory-section" @click="scrollTo('ourStorySection')" class="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent">Our Story</router-link>
          <router-link to="#schedule-section" @click="scrollTo('scheduleSection')" class="block py-2 px-3 text-white rounded   md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-white dark:hover:text-white md:dark:hover:bg-transparent">Schedule</router-link>
          <router-link to="#gallery-section" @click="scrollTo('gallerySection')" class="block py-2 px-3 text-white rounded   md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent">Gallery</router-link>
          <router-link to="#playlist-section" @click="scrollTo('playlistSection')" class="block py-2 px-3 text-white rounded  md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent">Playlist</router-link>
          <router-link to="#gift-section" @click="scrollTo('giftSection')" class="block py-2 px-3 text-white rounded md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-white  dark:hover:text-white md:dark:hover:bg-transparent">Gift the Couple</router-link>
    
    
    
   
   
    </ul>
     
    </div>
  </div>
</nav>

</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  data() {
    return {
      isMobileNavOpen: false,
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
   scrollTo(section) {
      const targetSection = document.getElementById(section);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error(`Section with id '${section}' not found.`);
      }
    },
  },
}
</script>

<style scoped>
#navbar.fixed {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Adjust the z-index as needed */
}
.bgColor {
  background-color: #00071a ;
}

</style>