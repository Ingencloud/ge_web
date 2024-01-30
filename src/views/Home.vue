<template>
  <div class="backgroundImage">
    <Navbar />
    <div id="home-section" ref="homeSection">
      <LandingPage />
    </div>
    <div id="ourstory-section" ref="ourStorySection">
      <OurStory />
    </div>
    <div id="schedule-section" ref="scheduleSection">
      <Schedule />
    </div>
    <div id="gallery-section" ref="gallerySection">
      <!-- <Gallery /> -->
      <Newgallery />
      <!-- <Thegallery /> -->
    </div>
    <div id="playlist-section" ref="playlistSection">
      <Playlist />
    </div>
    <div id="gift-section" ref="giftSection">
      <Gift />
    </div>
    <Footer />
  </div>
</template>


<script>
  import LandingPage from '../components/landingPage.vue'
  import OurStory from '../components/ourstory.vue'
  import Schedule from '../components/schedule.vue'
  import Playlist from '../components/playlist.vue'
  import Gift from '../components/gift.vue'
  import Footer from '../components/footer.vue'
  // import Gallery from '../components/gallery.vue'
  import Navbar from '../components/navbar.vue'
  // import Schedule2 from '../components/theschedule.vue'
  import Newgallery from '../components/newgallery.vue'
// import Thegallery from '@/components/thegallery.vue'
  // import Divide from '../components/divider.vue'



   

    
     export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
      components: {
        LandingPage,
        OurStory,
        Schedule,
        Playlist,
        Gift,
        Footer,
        // Gallery,
        Navbar,
        // Schedule2,
        Newgallery,
            // Thegallery
        // Divide
           
      },
      methods: {
    scrollTo(section) {
      const targetSection = this.$refs[section];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
    }


</script>

<style>
.home {
  background-color: transparent;
}

.backgroundImage {
  background-image: url("../assets/bg.jpeg") ;
}
</style>