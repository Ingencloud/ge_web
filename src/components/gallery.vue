<template>
  

<div class="my-10">
    <h2 class="mb-10 text-4xl font-bold leading-7 text-center md:text-5xl lg:text-6xl textColor" style="font-family: 'Playfair Display SC', serif;" >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-10 h-10 lg:w-16 lg:h-16 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
</svg>
Gallery</h2>

  <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-2 transition-transform mx-2 mt-4">
    <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/2.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/3.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/14.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/5.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/16.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/12.jpg" alt="">
            </div>
            <!-- <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/13.jpg" alt="">
            </div> -->
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/4.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/15.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/6.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/17.jpg" alt="">
            </div>
            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto  mx-2 rounded-lg" src="../assets/18.jpg" alt="">
            </div>

            <div class="flex flex-col justify-center">         
                <img class="h-auto w-auto mx-2 rounded-lg" src="../assets/19.jpg" alt="">
            </div>
           




   
</div>
</div>



  </template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Gallery',
    components: {

    },
//     data() {
//     return {
//       images: [
//         '1.jpg',
//         '2.jpg',
//         '3.jpg',
//         '4.jpg',
//         '5.jpg',
//         '6.jpg',
//         '7.jpg',
//         '8.jpg',
//         ],
//         translateX: 0,
//     };
//   },
//   methods: {
//     nextImage() {
//       this.translateX -= 100; // Adjust the width of the images
//       if (this.translateX < -100 * (this.images.length - 1)) {
//         this.translateX = 0;
//       }
//     },
//     prevImage() {
//       this.translateX += 100; // Adjust the width of the images
//       if (this.translateX > 0) {
//         this.translateX = -100 * (this.images.length - 1);
//       }
//     },
//   },
//   mounted() {
//     // Set an interval to automatically move images from right to left
//     setInterval(this.nextImage, 5000); // Change the interval as needed (in milliseconds)
//   },
};
</script>

<style scoped>
.bgColor {
  background-color: #d4d4d4 ;
}

.backgroundImage {
  background-image: url("../assets/Flowerswallpaper.jpeg") ;
}
</style>