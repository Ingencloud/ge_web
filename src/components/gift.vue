<template>
  <section id="giftSection" class="relative isolate justify-center overflow-hidden px-6 py-24 sm:py-32 lg:py-8 lg:px-8 my-10 ">
<div class="mx-auto max-w-screen-xl  p-4 border border-gray-200 rounded-lg shadow-lg sm:p-8 bg-gray-900">
  <div class="text-center">
   
<h5 class="mb-10 text-4xl font-extrabold tracking-tight leading-none text-white lg:text-6xl dark:text-white" style="font-family: 'Playfair Display SC', serif;" >
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-14 h-14 inline">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
</svg>
  Gifting the Couple</h5>

  </div>
 
    <p class="mb-5 text-base text-white font-bold italic lg:text-2xl dark:text-white" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
      “ Your presence and good wishes are the greatest gifts we could ask for on our special day. If you're considering a tangible gift, your warm contribution towards our future together would be truly appreciated. Your love and support mean everything to us.”       

    </p>
    <p class="mb-5 text-base text-white font-bold italic lg:text-2xl dark:text-white" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
      “Thank you for being a part of our celebration! ”       

    </p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
      <!-- <a href="https://wa.me/+233552567317" class="w-full sm:w-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-700"  style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
                <div class="mb-1 text-xs"> Message couple</div>
        </a> -->
 
      <div @click="openModal()" class="w-full sm:w-auto bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-700"  style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
                <div class="mb-1 text-xs"> Send Gift</div>
</div>
    </div>

    <div v-if="modalOpen"  @click="closeModal" class="modal fixed inset-0 z-10 w-screen overflow-y-auto">
    <div @click.stop>
     <h5 class="text-xl text-white">Bank Name: </h5> <p class="text-lg text-white">Standard Chartered Bank </p> 
     <h5 class="text-xl text-white">Bank Account Number:</h5><p class="text-lg text-white"> 0101042542300</p>
     <h5 class="text-xl text-white">Account Holder Name:</h5><p class="text-lg text-white"> Gilbert Nii Tackie</p>
      <h5 class="text-xl text-white">Branch:</h5><p class="text-lg text-white">West hills mall</p>
      <br>
     <h5 class="text-xl text-white">Bank Name: </h5> <p class="text-lg text-white">Stanbic Bank </p> 
     <h5 class="text-xl text-white">Bank Account Number:</h5><p class="text-lg text-white"> 9040007936391</p>
     <h5 class="text-xl text-white">Account Holder Name:</h5><p class="text-lg text-white">  Edinam Ama Tettey</p>
      <h5 class="text-xl text-white">Branch:</h5><p class="text-lg text-white">West hills mall</p>
    </div>
    </div>
</div>
</section>

 

  </template>

  <script>
 export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Gift',
    data() {
      return {
        modalOpen: false,
      };
    },
    methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
  },
 }
</script>

<style scoped>
.bgColor {
  background-color: #d4d4d4 ;
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
/* .backgroundImage {
  background-image: url("../assets/view.jpeg");
  background-size: cover; /* or background-size: contain; 
} */
</style>