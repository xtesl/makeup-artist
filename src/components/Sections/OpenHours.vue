<
    <template>

<section class="py-8 bg-gradient-to-r from-pink-500 to-pink-700 text-white relative">
    <div class="max-w-4xl mx-auto px-4">
      <!-- Section Title -->
      <h2 class="text-4xl font-bold text-center mb-2">Opening Hours</h2>
      <div class="flex justify-center">
        <div class="w-20 h-1 bg-white rounded-full"></div>
      </div>
  
      <!-- Content -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        <!-- Monday to Saturday -->
        <div class="flex items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg relative">
          <i class="pi pi-calendar text-3xl text-pink-500 mr-4"></i>
          <div>
            <p class="font-semibold text-xl">Monday - Saturday</p>
            <p class="text-lg">7:00 AM - 7:00 PM</p>
          </div>
          <!-- Blinking Light -->
          <div class="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
          <div class="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <!-- Sunday -->
        <div class="flex items-center bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <i class="pi pi-calendar-times text-3xl text-pink-500 mr-4"></i>
          <div>
            <p class="font-semibold text-xl">Sunday</p>
            <p class="text-lg">Closed</p>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Decorative Background (Signature Style) -->
    <div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 to-pink-500/10 pointer-events-none">
      <div class="absolute inset-0 grid grid-cols-12 gap-2 opacity-20">
        <div class="col-span-1 bg-white/10"></div>
        <div class="col-span-1 bg-transparent"></div>
        <div class="col-span-1 bg-white/10"></div>
        <div class="col-span-1 bg-transparent"></div>
        <div class="col-span-1 bg-white/10"></div>
        <div class="col-span-1 bg-transparent"></div>
        <div class="col-span-1 bg-white/10"></div>
        <div class="col-span-1 bg-transparent"></div>
        <div class="col-span-1 bg-white/10"></div>
        <div class="col-span-1 bg-transparent"></div>
        <div class="col-span-1 bg-white/10"></div>
        <div class="col-span-1 bg-transparent"></div>
      </div>
    </div>
  </section>
  
    </template>
   