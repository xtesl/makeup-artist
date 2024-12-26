<template>
    <section class="py-16 bg-white text-pink-900">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-dancing font-bold text-pink-900">Showcase</h2>
        <p class="mt-2 text-lg md:text-xl font-lora text-pink-700">A glimpse into my artistry and passion.</p>
      </div>
  
      <!-- Showcase Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        <!-- Image 1 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/images/fashion_3.jpg" 
            alt="Makeup Art 1" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
  
        <!-- Video 1 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/images/image_2.jpg" 
            alt="Makeup Art 2" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
  
        <!-- Image 2 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/images/fashion_2.jpg" 
            alt="Makeup Art 2" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
  
        <!-- Image 3 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/images/event_1.jpg" 
            alt="Makeup Art 3" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
  
        <!-- Video 2 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <video 
            src="/videos/bg_vid.mp4" 
            autoplay 
            loop 
            muted 
            playsinline 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          ></video>
          <div class="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
  
        <!-- Image 4 -->
        <div class="relative group overflow-hidden rounded-lg shadow-lg">
          <img 
            src="/images/event_2.jpg" 
            alt="Makeup Art 4" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lora:wght@400;600&display=swap');
  
  .font-dancing {
    font-family: 'Dancing Script', cursive;
  }
  
  .font-lora {
    font-family: 'Lora', serif;
  }
  </style>
  