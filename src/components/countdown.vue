<template>
    <div class="countdown">
      
      <div>
            
                <div class="countdown-item mb-4 animate-pulse">
        <span class="countdown-value border border-gray-500 p-2">{{ days }}
        </span>

        <span class="font-bold text-md">:</span>
     
        <span class="countdown-value border border-gray-500 p-2">{{ hours }}</span>
        <span class="font-bold text-md">:</span>
     
        <span class="countdown-value border border-gray-500 p-2">{{ minutes }}</span>
        <span class="font-bold text-md">:</span>
      
        <span class="countdown-value border border-gray-500 p-2">{{ seconds }}</span>
      </div>
            </div>
        </div>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Countdown',
    data() {
      return {
        targetDate: new Date("2024-05-01T14:30:59"),
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    },
    mounted() {
      this.calculateTime();
      setInterval(this.calculateTime, 1000);
    },
    methods: {
      calculateTime() {
        const now = new Date();
        const difference = this.targetDate - now;
  
        this.days = Math.floor(difference / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((difference % (1000 * 60)) / 1000);
      },
    },
  };
  </script>
  
  <style scoped>
  .countdown {
    display: flex;
    justify-content: space-around;
    font-family: 'Arial', sans-serif;
    flex-wrap: wrap; 
/* Allow items to wrap to the next line on smaller screens */
  }
  
  .countdown-item {
    text-align: center;
    color: white;
    flex: 1; /* Equal width for all items */
    margin: 10px;
  }
  
  .countdown-value {
    font-size: auto;
    font-weight: bold;
  }
  
  .countdown-title {
    font-size: 15px;
  }
  
  /* Media query for smaller screens (e.g., mobile) */
  @media screen and (max-width: 600px) {
    .countdown-value {
      font-size: 50; /* Adjust font size for smaller screens */
    }
  
    .countdown-title {
      font-size: 16; /* Adjust font size for smaller screens */
    }
  }
  </style>
  