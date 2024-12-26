<template>
  <section class="relative w-full py-16 text-pink-900 static-background">
    <!-- Static Grid Background -->
    <div class="static-grid-background"></div>
    
    <div class="container mx-auto px-4 md:px-8 relative">
      <!-- Section Header -->
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-5xl font-dancing font-bold text-pink-900">Book Me</h2>
        <p class="mt-2 text-lg md:text-xl font-lora text-pink-700">Let's create something beautiful together.</p>
      </div>

      <!-- Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Contact Information -->
        <div class="flex flex-col justify-center items-center md:items-start bg-white/80 backdrop-blur-sm rounded-lg p-6">
          <h3 class="text-2xl font-bold mb-4 font-lora text-pink-900">Contact Info</h3>
          <p class="text-lg font-lora flex items-center mb-2">
            <i class="pi pi-envelope text-pink-500 mr-2"></i>
            <span>Email:</span> makeupartist@example.com
          </p>
          <p class="text-lg font-lora flex items-center">
            <i class="pi pi-phone text-pink-500 mr-2"></i>
            <span>Phone:</span> (123) 456-7890
          </p>
        </div>

        <!-- Booking Form -->
        <div>
          <form @submit.prevent="handleSubmit" class="p-6 rounded-lg shadow-lg border border-pink-200 bg-white/80 backdrop-blur-sm">
            <div class="mb-4">
              <label for="name" class="block text-lg font-lora mb-2 text-pink-900">Your Name</label>
              <input
                id="name"
                type="text"
                class="w-full px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your name"
                required
              />
            </div>
            <div class="mb-4">
              <label for="email" class="block text-lg font-lora mb-2 text-pink-900">Your Email</label>
              <input
                id="email"
                type="email"
                class="w-full px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Enter your email"
                required
              />
            </div>
            <div class="mb-4">
              <label for="message" class="block text-lg font-lora mb-2 text-pink-900">Your Message</label>
              <textarea
                id="message"
                rows="4"
                class="w-full px-4 py-2 rounded-lg border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full py-2 px-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg font-bold transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    handleSubmit() {
      alert("Message sent! Thank you for reaching out.");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lora:wght@400;600&display=swap');

.font-dancing {
  font-family: 'Dancing Script', cursive;
}

.font-lora {
  font-family: 'Lora', serif;
}

.static-background {
  background: linear-gradient(to right, #fff5f7, #ffffff);
  position: relative;
  overflow: hidden;
}

.static-grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, rgba(237, 100, 166, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(237, 100, 166, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.static-grid-background::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at 50% 50%, rgba(237, 100, 166, 0.1) 0%, transparent 10%);
  background-size: 60px 60px;
  opacity: 0.7;
}

/* Subtle hover effect for form containers */
form, .flex {
  position: relative;
  transition: transform 0.3s ease;
}

form:hover, .flex:hover {
  transform: translateY(-2px);
}

/* Smooth transitions for interactive elements */
button, input, textarea {
  transition: all 0.3s ease;
}
</style>