<template>
    <section class="relative h-screen w-full overflow-hidden">
      <!-- Video Background -->
      <div class="absolute inset-0 w-full h-full">
        <div class="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-pink-500/40 z-10"></div>
        <video 
          class="absolute inset-0 w-full h-full object-cover"
          autoplay 
          loop 
          muted 
          playsinline
        >
          <source src="/videos/bg_vid.mp4" type="video/mp4">
          <!-- Fallback background for when video doesn't load -->
          <div class="absolute inset-0 bg-[url('/path-to-fallback-image.jpg')] bg-cover bg-center"></div>
        </video>
      </div>
  
      <!-- Content Overlay -->
      <div class="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 class="text-white text-4xl md:text-6xl font-bold animate-fade-in font-dancing">
          Welcome to My World
        </h1>
        <p class="text-white text-lg md:text-xl mt-4 animate-fade-in-up font-lora">
          Discover the beauty within.
        </p>
      </div>
  
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <i class="pi pi-arrow-down text-white text-2xl"></i>
      </div>
    </section>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Lora:wght@400;600&display=swap');
  
  .font-dancing {
    font-family: 'Dancing Script', cursive;
  }
  
  .font-lora {
    font-family: 'Lora', serif;
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease-out;
  }
  
  .animate-slide-up {
    animation: slideUp 1s ease-out;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 1.2s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  