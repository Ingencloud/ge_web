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
      <h4 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">We understand that not everyone can join us on our special day, and we understand that your presence in our lives is what truly matters.
        <br>

Thank you for your love and support and feel free to reach out.</h4>
    </div>
    <div class="items-center mt-10 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
      <a href="https://wa.me/+233552567317" class="w-full sm:w-auto bg-blue-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-blue-500 dark:hover:bg-green-600 dark:focus:ring-green-700"  style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
                <div class="mb-1 text-md font-bold"> Message Gilbert</div>
        </a>
        <a href="https://wa.me/+233541461774" class="w-full sm:w-auto bg-gradient-to-r from-violet-500 to-fuchsia-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-700"  style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
                <div class="mb-1 text-md font-bold"> Message Edinam</div>
        </a>
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
      <h4 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">We understand that not everyone can join us on our special day, and we understand that your presence in our lives is what truly matters.
        <br>

Thank you for your love and support and feel free to reach out.</h4>
    </div>  
    <div class="items-center mt-10 justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
      <a href="https://wa.me/+233552567317" class="w-full sm:w-auto bg-blue-800 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-blue-500 dark:hover:bg-green-600 dark:focus:ring-green-700"  style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
                <div class="mb-1 text-md font-bold"> Message Gilbert</div>
        </a>
        <a href="https://wa.me/+233541461774" class="w-full sm:w-auto bg-gradient-to-r from-violet-500 to-fuchsia-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-green-700 dark:hover:bg-green-600 dark:focus:ring-green-700"  style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>
                <div class="mb-1 text-md font-bold"> Message Edinam</div>
        </a>
        </div>

    </div>
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  // import router from "../router";  
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
      submitForm() {
    const extAPI = axios.create({
        withCredentials: true,
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
            localStorage.setItem('token', response.data.token);
            document.cookie = `jwt=${response.data.token}`;

            this.$router.push("/home");
            // router.push({'name': "Home"})
        })
        .catch((error) => {
            this.showError = true;
            if (error.response) {
                console.error('Error logging in user:', error.response.data);
            } else {
                console.error('Error logging in user:', error.message);
            }
        });
}



    
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