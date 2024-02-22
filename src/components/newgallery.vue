<template>
     <section id="gallerySection" class="relative isolate justify-center overflow-hidden px-6 py-24 sm:py-32 lg:py-8 lg:px-8 my-10 ">
<div class="mx-auto  p-4  sm:p-8">
  <h2 class="mb-10 text-4xl font-bold leading-7 text-center md:text-5xl lg:text-8xl textColor" style="font-family: 'Playfair Display SC', serif;" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-10 h-10 lg:w-16 lg:h-16 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
Gallery</h2>
<Carousel :itemsToShow="4" :wrapAround="true" :transition="500">
      <Slide v-for="image in images" :key="image.id" class="mx-2 h-540px lg:h-740px">
        <img :src="image.url" class="carousel__item" @click="openModal(image)">
      </Slide>
    </Carousel>

    <div v-if="modalOpen" @click="closeModal" class="modal fixed inset-0 z-10 w-screen overflow-y-auto">
      <img :src="selectedImage.url" class="modal-image" @click.stop />
    </div>
</div>
    </section>
  </template>
  
  <script>
  // import { defineComponent } from 'vue';
  import { Carousel, Slide } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Newgallery',
    components: {
      Carousel,
      Slide,
    },
    data() {
      return {
        images: [
        { id: 1, url: '/assets/15.jpg' },
          { id: 2, url: '/assets/12.jpg' },
          { id: 3, url: '../assets/13.jpg' },
          { id: 4, url: '../assets/14.jpg' },
          { id: 5, url: '../assets/17.jpg' },
          { id: 6, url: '../assets/18.jpg' },
          { id: 7, url: '/assets/19.jpg' },
          { id: 8, url: '../assets/3.jpg' },
          { id: 9, url: '../assets/4.jpg' },
          { id: 10, url: '../assets/7.jpg' },
          { id: 11, url: '../assets/8.jpg' },
          // Add more image objects with unique IDs and URLs
        ],
        modalOpen: false,
      selectedImage: null,
      };
    },
    methods: {
    openModal(image) {
      this.selectedImage = image;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
};
  </script>
  
  <style scoped>
  .carousel__item {
    padding: 5px;
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
    /* height:740px; */
  }
  
  .carousel__slide--active ~ .carousel__slide .carousel__item {
    transform: rotateY(20deg) scale(0.9);
  }
  
  .carousel__slide--prev .carousel__item {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
  }
  
  .carousel__slide--next .carousel__item {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
  }
  
  .carousel__slide--active .carousel__item {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
  }

  .modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  justify-content: center;
  align-items: center;
}
  .modal-image {
  max-width: 50%;
  max-height: 50%;
}

  @media screen {
    
  }
  </style>
  