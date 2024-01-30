<template>
    <Carousel id="gallery" :items-to-show="1" :autoplay="2000" :wrap-around="false" v-model="currentSlide" class="mx-auto max-w-screen-xl  p-4 bg-white border border-gray-200 rounded-lg shadow-lg sm:p-8 bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <Slide v-for="image in images" :key="image.id">
            <img :src="image.url"  class="carousel__item">
      </Slide>
    </Carousel>
  
    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url"  class="carousel__item" @click="slideTo(slide - 1)">
      </Slide>
    </Carousel>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'TheGallery',
    components: {
      Carousel,
      Slide,
    //   Navigation,
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
          // Add more image objects with unique IDs and URLs
        ],
        currentSlide: 0,

      };
    },
    methods: {
      slideTo(val) {
        this.currentSlide = val
      },
    },
  })
  </script>
  