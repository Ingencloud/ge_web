<template>
<div v-if="loading">
  <preloader />
  </div>
  <div v-else>
    <router-view :key="$route.fullPath"></router-view>
  </div>
  <!-- <router-view :key="$route.fullPath"/> -->
</template>

<script>
import Preloader from '@/components/preloader.vue';


export default {
  name: 'App',
  components: {Preloader} ,
  data () {
    return {
      loading: true,
    }
  },
  
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 3000);
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

#app {
  font-family: 'Lato', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
