<template>
    <div id="app" class="font-sans text-center h-screen relative">
      <div class="md:flex hidden">
        <!-- Desktop View: Image on the left, Form on the right -->
        <div class="w-1/2 bg-image"></div>
        <div class="w-1/2 login-form flex items-center justify-center">
          <div class="w-full p-8 bg-white">
            <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="md:mx-auto md:w-full md:max-w-md">
      <img class="mx-auto h-56 w-auto" src="../assets/logo.png" alt="Your Company" />
      <h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">Welcome to Our Wedding</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" v-on:submit.prevent="submitForm" method="POST">
        

        <div>
          <div class="flex items-center justify-between">
            <label for="number" class="block text-lg font-bold leading-6 text-gray-900">Phone Number</label>
          </div>
          <div class="mt-2">
            <input id="number" name="number" v-model="login.number" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-purple-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign in</button>
        </div>
        <div v-if="showError" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="font-medium">Failed to login</span> 
</div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not registered?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-purple-800 hover:text-purple-500">Register</a>
      </p>
    </div>
  </div>
          </div>
        </div>
      </div>
      <div class="md:hidden">
        <!-- Mobile View: Form overlay on the image -->
        <div class="bg-image absolute inset-0"></div>
        <div class="login-form absolute inset-0 flex items-center justify-center">
          <div class="w-auto xl:max-w-xl p-6 space-y-8 md:p-8 rounded-lg shadow-xl " style="background-color: rgba(17, 24, 39, 0.5);">
            <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-56" src="../assets/logo2.png" alt="Your Company" />
      <h2 class="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-white">Welcome to Our Wedding</h2>
    </div>

    <div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" v-on:submit.prevent="submitForm" method="POST">
      

        <div>
          <div class="flex items-center justify-between">
            <label for="number" class="block text-md font-bold leading-6 text-white">Phone number</label>
          </div>
          <div class="mt-2">
            <input v-model="login.number" name="number" type="text" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-purple-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600">Sign in</button>
        </div>
        <div v-if="showError" class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="font-medium">Failed to login</span> 
</div>
      </form>

      <p class="mt-10 text-center text-sm text-white">
        Not registered?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-purple-600 hover:text-purple-500">Register</a>
      </p>
    </div>
  </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import axios from 'axios';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    components: {
    },
    data() {
    return {
      login: {number: ""},
      showError: false,

    };
  },
    methods: {
    submitForm(){
      const extAPI = axios.create({
        baseURL: "https://engage.becomingthetackies.site/api",
        headers: {
          "ALLOW-ORIGIN": "*",
          "control-allow-headers": "*",
          "control-allow-origin": "*",
        },
      });

      extAPI
        .post("/login", {
          number: this.login.number
        })
        .then((response) => {
          console.log(response.data);
          this.$router.push("/home");
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
#app {
  min-height: 100vh;
}
.bg-image {
  background: url('../assets/1.jpg') center/cover;
  min-height: 100vh;
  z-index: -1;
}

.bgColor {
  background-color: #7d1665 ;
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
</style>