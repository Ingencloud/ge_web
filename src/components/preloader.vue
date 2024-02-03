<template>
    <div v-if="loading" class="preloader">
      <img src="@/assets/logo1.png" alt="Logo" class="mb-2 lg:mb-10" />
      <p class="text-black font-bold">Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Preloader",
    props: {
      loading: Boolean,
    },
  };
  </script>
  
  <style scoped>
  .preloader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  </style>
  