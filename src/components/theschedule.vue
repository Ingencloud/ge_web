<template>
   

    <section class="bgColor backgroundImage mt-16">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 ">
            <!-- <div class="flex flex-col justify-center">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Leave a message for the Couple.</h1>
            </div> -->
            <div>
                <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-gray-50 rounded-lg shadow-xl dark:bg-gray-900">
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                       Add a song to our wedding playlist
                    </h2>
                    <form class="mt-8 space-y-6" v-on:submit.prevent="submitForm" method="POST">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Artist</label>
                            <input type="text" v-model="playlist.artist" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Drake">
                        </div>
                        <div>
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Song Title</label>
                            <input type="text" v-model="playlist.title" name="title" id="title" placeholder="Started from the bottom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        </div>
                        <div>
    
    <label for="message" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">Leave Gibby & Edi a message</label>
    <textarea id="message" v-model="playlist.message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    
                        </div>
                        
                        <button type="submit" class="w-full px-5 py-3 text-base font-medium text-center text-white bg-gradient-to-r from-violet-500 to-fuchsia-500">Send Message & Song</button>
                        <div v-if="showError" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg>
      <span class="font-medium">Failed to add to playlist</span> 
    </div>
    <div v-if="showSuccess" class="p-4 mb-4 text-sm text-green-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-green-400" role="alert">
        <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
      </svg> 
      <span class="font-medium">Sent successfully</span> 
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
            name: 'Schedule2',
          components: {
       
            // Gallery,
               
          },
          data() {
        return {
          playlist: {artist: "", title: "", message: ""},
          showError: false,
          showSuccess: false
    
        };
      },
        methods: {
        submitForm(){
          const extAPI = axios.create({
            baseURL: "http://127.0.0.1:3000/",
            headers: {
              "ALLOW-ORIGIN": "*",
              "control-allow-headers": "*",
              "control-allow-origin": "*",
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
      background-image: url("../assets/view.jpeg") ;
      background-size: cover;
    }
    </style>