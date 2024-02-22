<template>
   

<section id="playlistSection" class="bgColor backgroundImage mt-16">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
      
        <div class="flex flex-col justify-center items-center">
          <div class="justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-10 h-10 lg:w-16 lg:h-16 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>
          </div>
          <h1 class="mb-4 text-center text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white" style="font-family: 'Playfair Display SC', serif;">
            Leave a message for the Couple.
         
        </h1>
            <!-- <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> -->
        </div>
        <div>
            <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-gray-50 rounded-lg shadow-xl dark:bg-gray-900">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
                   Add a song to our wedding playlist
                </h2>
                <form class="mt-8 space-y-6" v-on:submit.prevent="submitForm" method="POST" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
                    <div>
                        <label for="name" class="block mb-2 text-start text-sm font-bold text-gray-900 dark:text-white">Artist</label>
                        <input type="text" v-model="playlist.artist" name="name" id="name" :disabled="formSubmitted" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Drake">
                    </div>
                    <div>
                        <label for="title" class="block mb-2 text-start text-sm font-bold text-gray-900 dark:text-white">Song Title</label>
                        <input type="text" v-model="playlist.title" name="title" :disabled="formSubmitted" id="title" placeholder="Started from the bottom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    </div>
                    <div>

<label for="message" class="block mb-2 text-md text-start font-bold text-gray-900 dark:text-white">Leave Gibby & Edi a message</label>
<textarea id="message" v-model="playlist.message" rows="4"  :disabled="formSubmitted" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    </div>
                    
                    <button type="submit" :disabled="formSubmitted" class="w-full px-5 py-3 text-base font-bold text-center text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">Send Message & Song</button>
                    <div v-if="showError" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="font-bold">Failed to add to playlist</span> 
</div>
<div v-if="showSuccess" class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400" role="alert">
    <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg> 
  <span class="font-bold">Sent successfully</span> 
</div>
                </form>
            </div>
        </div>
    </div>
</section>

  </template>

  <script>
  
  import axios from 'axios';

export default {
    
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Playlist',
      components: {
   
        // Gallery,
           
      },
      data() {
    return {
      playlist: {artist: "", title: "", message: ""},
      showError: false,
      showSuccess: false,
      formSubmitted: false,
    };
  },
    methods: {
    submitForm(){
      const token = localStorage.getItem('token');
      const extAPI = axios.create({
        withCredentials: true,
        baseURL: "https://engage.becomingthetackies.site/api",
        headers: {
          "Accept": "/",
          "ALLOW-ORIGIN": "*",
          "control-allow-headers": "*",
          "control-allow-origin": "*",
          "Authorization": `Bearer ${token}` 
        },
      });

      extAPI
        .post("/playlist", {
          artist: this.playlist.artist,
          title: this.playlist.title,
          message: this.playlist.message
        })
        .then((response) => {
          console.log(response.data);
          this.showSuccess = true;
          this.formSubmitted = true;
      })
        .catch((error) => {
          this.showError = true;
          console.error('Error logging In user:', error);
        });
    },
    
  }
  }
</script>

<style scoped>
.bgColor {
  background-color: #d4d4d4 ;
}

.backgroundImage {
  background-image: url("../assets/view2.jpg") ;
  background-size: cover;
}
</style>