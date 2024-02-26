<template>
  <section id="gallerySection" class="relative isolate justify-center overflow-hidden px-6 py-24 sm:py-32 lg:py-8 lg:px-8 my-10">
    <div class="mx-auto p-4 sm:p-8">
      <h2 class="mb-10 text-4xl font-bold leading-7 text-center md:text-5xl lg:text-8xl textColor" style="font-family: 'Playfair Display SC', serif;">Gallery</h2>
      <Carousel :itemsToShow="4" :wrapAround="true" :transition="500">
        <Slide v-for="image in images" :key="image.id" class="mx-2 h-540px lg:h-740px">
          <img :src="image.url" class="carousel__item" @click="openModal(image)">
        </Slide>
      </Carousel>

      <div v-if="modalOpen" class="modal fixed inset-0 z-10 w-screen h-screen flex items-center justify-center">
        <div class="modal-content">
          <img :src="selectedImage.url" class="modal-image" @click.stop />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';

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

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
}

.modal-image {
  max-width: 75%;
  max-height: 75%;
  border-radius: 5px;
  display: block;
  margin: 0 auto;
}
</style>
