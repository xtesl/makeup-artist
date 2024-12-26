<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="nav-background fixed w-full z-20 top-0 start-0 border-b border-pink-100 transition-all duration-300 hover:shadow-lg">
    <div class="nav-overlay">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <RouterLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse group">
          <img src="/logo.png" class="h-8 transition-transform duration-300 group-hover:scale-110" alt="logo" />
          <span class="self-center text-2xl font-dancing font-semibold whitespace-nowrap text-pink-800 transition-colors duration-300 group-hover:text-pink-600">Sandys_Glam</span>
        </RouterLink>
        
        <div class="flex md:order-2 items-center space-x-4">
          <div class="hidden md:flex space-x-4">
            <a href="#" class="text-pink-600 hover:text-pink-800 transition-colors duration-300">
              <i class="pi pi-instagram text-xl"></i>
            </a>
            <a href="#" class="text-pink-600 hover:text-pink-800 transition-colors duration-300">
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a href="#" class="text-pink-600 hover:text-pink-800 transition-colors duration-300">
              <i class="pi pi-twitter text-xl"></i>
            </a>
            <a href="#" class="text-pink-600 hover:text-pink-800 transition-colors duration-300">
              <i class="pi pi-tiktok text-xl"></i>
            </a>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-pink-500 rounded-lg md:hidden hover:bg-pink-100/50 focus:outline-none focus:ring-2 focus:ring-pink-200" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <!-- Desktop Menu -->
          <ul class="hidden md:flex md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row">
            <li>
              <RouterLink to="/" class="block py-2 px-3 text-pink-800 md:p-0 relative group" aria-current="page">
                Home
                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </RouterLink>
            </li>
            <li>
              <router-link to="/#about-section" class="block py-2 px-3 text-pink-800 md:p-0 relative group transition-colors duration-300 hover:text-pink-900">
                About
                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </router-link>
            </li>
            <li>
              <RouterLink to="/portfolio" class="block py-2 px-3 text-pink-800 md:p-0 relative group transition-colors duration-300 hover:text-pink-900">
                Portfolio
                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </RouterLink>
            </li>
            <li>
              <router-link to="/#booking-section" class="block py-2 px-3 text-pink-800 md:p-0 relative group transition-colors duration-300 hover:text-pink-900">
                Booking
                <span class="absolute inset-x-0 bottom-0 h-0.5 bg-pink-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </router-link>
            </li>
          </ul>

          <!-- Mobile Menu -->
          <div class="md:hidden mobile-menu-container">
            <ul class="flex flex-col gap-2 p-4 mt-4 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg border border-pink-100">
              <li>
                <RouterLink to="/" class="flex items-center gap-3 p-3 rounded-xl text-pink-800 hover:bg-pink-50 transition-all duration-300">
                  <i class="pi pi-home text-lg"></i>
                  <span>Home</span>
                </RouterLink>
              </li>
              <li>
                <router-link to="/#about-section" class="flex items-center gap-3 p-3 rounded-xl text-pink-800 hover:bg-pink-50 transition-all duration-300">
                  <i class="pi pi-user text-lg"></i>
                  <span>About</span>
                </router-link>
              </li>
              <li>
                <RouterLink to="/portfolio" class="flex items-center gap-3 p-3 rounded-xl text-pink-800 hover:bg-pink-50 transition-all duration-300">
                  <i class="pi pi-images text-lg"></i>
                  <span>Portfolio</span>
                </RouterLink>
              </li>
              <li>
                <router-link to="/#booking-section" class="flex items-center gap-3 p-3 rounded-xl text-pink-800 hover:bg-pink-50 transition-all duration-300">
                  <i class="pi pi-calendar text-lg"></i>
                  <span>Booking</span>
                </router-link>
              </li>
              <li class="mt-2 pt-4 border-t border-pink-100">
                <div class="flex justify-center gap-6">
                  <a href="#" class="p-2 rounded-full text-pink-600 hover:text-pink-800 hover:bg-pink-50 transition-all duration-300">
                    <i class="pi pi-instagram text-xl"></i>
                  </a>
                  <a href="#" class="p-2 rounded-full text-pink-600 hover:text-pink-800 hover:bg-pink-50 transition-all duration-300">
                    <i class="pi pi-facebook text-xl"></i>
                  </a>
                  <a href="#" class="p-2 rounded-full text-pink-600 hover:text-pink-800 hover:bg-pink-50 transition-all duration-300">
                    <i class="pi pi-twitter text-xl"></i>
                  </a>
                  <a href="#" class="p-2 rounded-full text-pink-600 hover:text-pink-800 hover:bg-pink-50 transition-all duration-300">
                    <i class="pi pi-tiktok text-xl"></i>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lora:wght@400;600&display=swap');
 
.font-dancing {
  font-family: 'Dancing Script', cursive;
}
.nav-background {
  background: linear-gradient(-45deg, #ffe5f0, #fff0f5, #fff5fa, #fff8f8);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  position: relative;
}

.nav-overlay {
  background: radial-gradient(circle at 50% -20%, rgba(255, 182, 193, 0.15) 0%, transparent 75%);
  position: relative;
}

.nav-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(circle at 80% 40%, rgba(255, 192, 203, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.mobile-menu-container {
  animation: slideDown 0.3s ease-out;
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
</style>