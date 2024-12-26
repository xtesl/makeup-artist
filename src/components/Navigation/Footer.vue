<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Your main content would go here -->
    <div class="flex-grow"></div>
    
    <footer class="footer-background border-t border-pink-100 mt-auto">
      <div class="max-w-screen-xl mx-auto px-4 py-8">
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Brand Section -->
          <div class="text-center md:text-left">
            <h3 class="text-xl font-semibold text-pink-800 mb-4">Sandys___Glam</h3>
            <p class="text-pink-700 text-sm max-w-xs mx-auto md:mx-0">
              Transforming your beauty dreams into reality with professional makeup artistry
            </p>
          </div>

          <!-- Quick Links -->
          <div class="text-center">
            <h4 class="text-lg font-medium text-pink-800 mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li>
                <router-link to="/#booking-section" class="text-pink-600 hover:text-pink-800 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                  <i class="pi pi-calendar text-sm"></i>
                  <span>Book Appointment</span>
                </router-link>
              </li>
              <li>
                <RouterLink to="/portfolio" class="text-pink-600 hover:text-pink-800 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                  <i class="pi pi-images text-sm"></i>
                  <span>Gallery</span>
                </RouterLink>
              </li>
              <li>
                <a href="#" class="text-pink-600 hover:text-pink-800 transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                  <i class="pi pi-dollar text-sm"></i>
                  <span>Services & Pricing</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="text-center md:text-right">
            <h4 class="text-lg font-medium text-pink-800 mb-4">Get in Touch</h4>
            <div class="space-y-2">
              <p class="text-pink-600 flex items-center justify-center md:justify-end gap-2">
                <i class="pi pi-phone"></i>
                <span>+233 (234) 670-049</span>
              </p>
              <p class="text-pink-600 flex items-center justify-center md:justify-end gap-2">
                <i class="pi pi-map-marker"></i>
                <span>Atimatim Maase</span>
              </p>
              <p class="text-pink-600 flex items-center justify-center md:justify-end gap-2">
                <i class="pi pi-envelope"></i>
                <span>sandraowusu3188@gmail.com</span>
              </p>
            </div>
            <!-- Social Links -->
            <div class="flex justify-center md:justify-end space-x-4 mt-4">
              <a href="https://www.instagram.com/sandys___glam/" class="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-100 hover:text-pink-800 transition-all duration-300">
                <i class="pi pi-instagram"></i>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-100 hover:text-pink-800 transition-all duration-300">
                <i class="pi pi-facebook"></i>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-100 hover:text-pink-800 transition-all duration-300">
                <i class="pi pi-twitter"></i>
              </a>
              <a href="#" class="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 hover:bg-pink-100 hover:text-pink-800 transition-all duration-300">
                <i class="pi pi-tiktok"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Copyright -->
        <div class="text-center mt-8 pt-4 border-t border-pink-100">
          <p class="text-pink-600 text-sm">
            © {{ new Date().getFullYear() }} Sandys___Glam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer-background {
  background: linear-gradient(to bottom, #fff5f8, #fff8fa);
}
</style>