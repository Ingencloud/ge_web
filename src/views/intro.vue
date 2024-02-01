<template>
  <div id="app" class="font-sans text-center">
    <!-- <div class="absolute inset-0">
    <div class="w-full lg:w-1/2 justify-center">
      <video 
      controls 
      autoplay 
      muted 
      loop 
      class="lg:w-full w-full lg:h-100px object-cover shadow-xl ring-1 ring-gray-400/10 md:mr-4 lg:mr-0">
        <source src="../assets/ge.mp4" type="video/mp4" />
      </video>
    </div>
    <div class=" absolute inset-0 items-center justify-center">
        <div v-if="showLogo" class="w-96 mt-6 p-8 animate-fade-in-up">
          <img class="mb-2 md:mb-10" src="../assets/logo.png" alt="" />
        </div>
        <div v-if="showText" class="w-full p-8 animate-fade-in-up">
          <h2 class="text-2xl lg:text-4xl mb-2 lg:mb-10 text-white font-bold"  >We are becoming...  <p class="font-bold" style="font-style: italic; font-family: sans-serif;" > the Tackies!!</p></h2>
          <p class="mb-2 md:mb-6 text-white font-bold">And over all these virtues put on love, which binds them all together in perfect unity</p> <br> <p class="mb-2 md:mb-6 text-white">Colossians 3:14 </p>
          
        </div>
      </div>
      <div v-if="showModal" class="modal fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="modal-content">
        <div class="w-auto xl:max-w-xl p-6 space-y-8 md:p-8 rounded-lg shadow-xl " style="background-color: rgba(17, 24, 39, 0.5);">
                <h2 class="text-2xl font-bold text-gray-900 opacity-100 dark:text-white opac">
                   Becoming the Tackies
                </h2>        <h2 class="text-xl md:mb-6 text-white" >Wednesday 1st May,2024</h2>

              <Countdown />        <p class="mb-4">Kindly Let us know if you will be in attendance</p>
              <div>
          <router-link to="/code">
          <button class="bg-green-700 p-2 mx-2 rounded-lg" >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
</button>
</router-link>
          <button class="bg-red-700 p-2 mx-2 my-2 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
</svg>

</button>
        </div>
        <router-link to="/login">
        <p class="m-2" >Already Registered? Login</p>
        </router-link>
      </div>
            </div>
</div>
    </div> -->


    <div >
      <div class="absolute inset-0 " >          
        <video
        autoplay
        loop
        class="w-full h-full  object-cover shadow-xl ring-1 ring-gray-400/10"
      >
        <!-- Use your video source URL here -->
        <source src="../assets/vid.mp4" type="video/mp4" />
      </video>
      </div>
      <div class="absolute inset-0 items-center justify-center">
        <div v-if="showLogo" class="w-full animate-fade-in-up">
          <img class="mb-2 lg:mb-10" src="../assets/logo.png" alt="" />
        </div>
        <div v-if="showText" class="w-full p-8 animate-fade-in-up">
          <h2 class="text-2xl lg:text-4xl mb-2 lg:mb-10 text-white font-bold"  style="font-style: italic; font-family: sans-serif;">We are becoming..... TheTackies!!</h2>
          <p class="mb-2 md:mb-6 text-white font-bold">And over all these virtues put on love, which binds them all together in perfect unity</p> <br> <p class="mb-2 md:mb-6 text-white">Colossians 3:14 </p>
          
        </div>
      </div>
      <div v-if="showModal" class="modal fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="modal-content">
        <div class="w-auto xl:max-w-xl p-6 space-y-8 md:p-8 rounded-lg shadow-xl " style="background-color: rgba(17, 24, 39, 0.5);">
                <h2 class="text-2xl font-bold text-gray-900 opacity-100 dark:text-white opac">
                   Becoming..... TheTackies
                </h2>        <h2 class="text-xl md:mb-6 text-white" >Wednesday 1st May,2024</h2>

              <Countdown />        <p class="mb-4">Kindly Let us know if you will be in attendance</p>
              <div>
          <router-link to="/code">
          <button class="bg-green-700 p-2 mx-2 rounded-lg" >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
</button>
</router-link>
          <button class="bg-red-700 p-2 mx-2 my-2 rounded-lg" @click="noEvent()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
</svg>

</button>
        </div>
        <router-link to="/login">
        <p class="m-2" >Already Registered? Login</p>
        </router-link>
      </div>
            </div>

       
    </div>
    <div v-if="showModal1" class="modal fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="modal-content">
        <div class="w-auto xl:max-w-xl p-6 space-y-8 md:p-8 rounded-lg shadow-xl " style="background-color: rgba(17, 24, 39, 0.5);">
          <h2 class="text-2xl font-bold text-gray-900 opacity-100 dark:text-white">
                  We are sorry you can't make it to our union on this date. Your good wishes and thoughts are really appreciated.
                </h2>   
                <h2 class="text-2xl mt-10 font-bold text-gray-900 opacity-100 dark:text-white">
Gilbert & Edinam                </h2> 
                              <div>

        </div>
      </div>
            </div>

       
    </div>
    </div>
  

    <div class="md:hidden">
      <!-- Mobile View: Form overlay on the image -->
      <div class="absolute inset-0" >          
        <video
        autoplay
        muted
        loop
        class="w-full h-full object-cover shadow-xl ring-1 ring-gray-400/10"
      >
        <!-- Use your video source URL here -->
        <source src="../assets/ge.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
      <div class="login-form absolute inset-0 items-center justify-center">
        <div v-if="showLogo" class="w-96 mt-6 p-8 animate-fade-in-up">
          <img class="mb-2 md:mb-10" src="../assets/logo.png" alt="" />
        </div>
        <div v-if="showText" class="w-full p-8 animate-fade-in-up">
          <h2 class="text-2xl lg:text-4xl mb-2 lg:mb-10 text-white font-bold"  >We are becoming...  <p class="font-bold" style="font-style: italic; font-family: sans-serif;" > the Tackies!!</p></h2>
          <p class="mb-2 md:mb-6 text-white font-bold">And over all these virtues put on love, which binds them all together in perfect unity</p> <br> <p class="mb-2 md:mb-6 text-white">Colossians 3:14 </p>
          
        </div>
      </div>
      <div v-if="showModal" class="modal fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="modal-content">
        <div class="w-auto xl:max-w-xl p-6 space-y-8 md:p-8 rounded-lg shadow-xl " style="background-color: rgba(17, 24, 39, 0.5);">
                <h2 class="text-2xl font-bold text-gray-900 opacity-100 dark:text-white opac">
                   Becoming..... TheTackies
                </h2>        <h2 class="text-xl md:mb-6 text-white" >Wednesday 1st May,2024</h2>

              <Countdown />        <p class="mb-4">Kindly Let us know if you will be in attendance</p>
              <div>
          <router-link to="/code">
          <button class="bg-green-700 p-2 mx-2 rounded-lg" >
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
</svg>
</button>
</router-link>
          <button class="bg-red-700 p-2 mx-2 my-2 rounded-lg" @click="noEvent()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-2 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
</svg>

</button>
        </div>
        <router-link to="/login">
        <p class="m-2" >Already Registered? <span class="text-purple-800">Login</span> </p>
        </router-link>
      </div>
            </div>

       
    </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { formatDuration, intervalToDuration } from 'date-fns';
import Countdown from '../components/countdown.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Intro',
  components: {
    Countdown
  },

  data(){
    return {
      showModal1: false
    }
  },
  setup() {
    const showModal = ref(false);
    const showText = ref(false);
    const showLogo = ref(false);
    const weddingDate = new Date('2024-05-01');
    const countdownMessage = ref('');
    const showModal1 = ref(false);


    onMounted(() => {
      // Show text after a delay
      setTimeout(() => {
        showModal.value = true;
        showModal1.value = false;
        showLogo.value = false;
        showText.value = false;
        console.log('Modal should be visible now');
      }, 20000); // 20000 milliseconds = 20 seconds

      setTimeout(() => {
        showText.value = true;
      }, 8000); // 10000 milliseconds = 8 seconds

      setTimeout(() => {
        showLogo.value = true;
      }, 5000); // 8000 milliseconds = 5 seconds

      setInterval(() => {
        const now = new Date();
        const duration = intervalToDuration({ start: now, end: weddingDate, unit: 'seconds' });
        countdownMessage.value = formatDuration(duration);
      }, 1000);
    });

    const closeModal = () => {
      showModal.value = false;
      showModal1.value = false;
    };

    return {
      showModal,
      showText,
      showLogo,
      countdownMessage,
      closeModal,
    };
  },
  methods: {
    formatDuration(duration) {
      const { days, hours, minutes, seconds } = duration;
      return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    },
    noEvent() {
      this.showModal1 = true;
      this.showModal = false;
    }
  },
  // methods: {
  //   formatDuration(duration) {
  //     const { days, hours, minutes, seconds } = duration;
  //     return `${this.formatUnit(days, 'Days')}, ${this.formatUnit(hours, 'Hours')}, ${this.formatUnit(minutes, 'Minutes')}, ${this.formatUnit(seconds, 'Seconds')}`;
  //   },
  //   formatUnit(value, unit) {
  //     return `<span class="duration-value">${value}</span> <span class="duration-unit">${unit}</span>`;
  //   },
  // },
};
</script>


<style scoped>
#app {
min-height: 100vh;
}

.login-form {
background-color: rgba(255, 255, 255, 0.8);
min-height: 100vh;
background: none; /* Remove background color on mobile */
}
@media (min-width: 768px) {
.login-form {
  background-color: rgba(255, 255, 255, 0.8); /* Add background color for larger screens */
}
}
@media (max-width: 768px) {
.flex-1 {
  flex: 1;
}
}
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.modal-content {
  padding: 20px;
  border-radius: 10px;
  color: white;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
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

.duration-text {
  font-size: 14px;
  font-weight: bold; /* Adjust the size according to your design */
}

.duration-value {
  font-weight: bold;
}

.duration-unit {
  font-size: 12px; /* Adjust the size according to your design */
}
</style>