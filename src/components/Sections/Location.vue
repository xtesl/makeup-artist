<template>
    <section class="relative w-full h-screen">
      <!-- Title and Description -->
      <div class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <h2 class="text-4xl font-bold text-white drop-shadow-lg">Our Location</h2>
        <p class="text-lg text-gray-200 drop-shadow-md">
          Easily find us on Google Maps.
        </p>
      </div>
  
      <!-- Google Maps Embed -->
      <div class="w-full h-full">
        <iframe
          class="w-full h-full"
          :src="googleMapUrl"
          frameborder="0"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        googleMapUrl:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0580238805765!2d-1.6272769999999996!3d6.639717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb91057984b9c5%3A0x1636c6a7e3a64794!2sAtimatim%20Maase!5e0!3m2!1sen!2sgh!4v1735156332952!5m2!1sen!2sgh",
      };
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Enhance the appearance of the overlay text */
  .drop-shadow-lg {
    text-shadow: 2px 4px 6px rgba(0, 0, 0, 0.6);
  }
  .drop-shadow-md {
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);
  }
  </style>
  