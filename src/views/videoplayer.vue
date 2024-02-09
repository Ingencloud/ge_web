<template>
        

    <video-player
    class="videoSize object-fill bg-black lg:bg-white shadow-xl ring-1 ring-gray-400/10 md:mr-4 lg:mr-0"
    src="/assets/vid.mp4"
    controls
     playsinline 
     autoplay
     :loop="true" 
     :volume="0.6" 
     @mounted="onVideoPlay"
    @ready="onVideoPlay" 
     @play="onVideoPlay" 
     @ended="onVideoEnd"
    />
  </template>
  
  <script>
    import { defineComponent } from 'vue'
    import { VideoPlayer } from '@videojs-player/vue'
  
    export default defineComponent({
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'video',
      components: {
        VideoPlayer
      }
    })
  </script>

<style scoped>
@media (max-width: 768px) {
  /* Mobile styles */

  /* Center the content */
  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  /* Adjust video size for mobile */
  .videoSize {
    width: 100vw;
    height: 100vh;
  }

  /* Overlay image on the video */
  .video-container {
    position: fixed;
  }

  .overlay-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: fill;
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
  animation: fade-in-up 3s ease-in-out;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  /* Add any other mobile-specific styles here */
}
 #app {
min-height: 100vh;
max-height: 100vh;
} 

.videoSize{
  height: 100vh;
  width: 100vw;
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
/* @media (max-width: 768px) {
.flex-1 {
  flex: 1;
}
} */
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
  animation: fade-in-up 3s ease-in-out;
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