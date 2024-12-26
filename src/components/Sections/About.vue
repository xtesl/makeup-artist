<template>
  <section class="relative py-16 overflow-hidden bg-gradient">
    <!-- Static Background Elements -->
    <div class="absolute inset-0 background-elements">
      <div class="static-sparkle sparkle-1"></div>
      <div class="static-sparkle sparkle-2"></div>
      <div class="static-sparkle sparkle-3"></div>
      <div class="static-circle circle-1"></div>
      <div class="static-circle circle-2"></div>
      <div class="static-circle circle-3"></div>
    </div>

    <div class="relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-dancing font-bold text-pink-900 static-glow">About Sandys___Glam</h2>
        <p class="mt-2 text-lg md:text-xl font-lora text-pink-700">Transforming Beauty, One Glam at a Time</p>
      </div>

      <!-- About Content -->
      <div class="max-w-4xl mx-auto px-4 md:px-8 text-left">
        <div class="space-y-6 backdrop-blur-sm bg-white/70 p-8 rounded-2xl shadow border border-pink-100">
          <p class="text-lg md:text-xl font-lora text-pink-700 leading-relaxed">
            Welcome to <span class="font-bold">Sandys___Glam</span>, a professional makeup artistry service based in Ghana, offering top-tier makeup services for all occasions.
          </p>

          <p class="text-lg md:text-xl font-lora text-pink-700 leading-relaxed">
            Founded by <span class="font-bold">Sandra Owusu Boakye</span>, we specialize in creating stunning, personalized looks that enhance your natural beauty and leave you feeling confident.
          </p>

          <p class="text-lg md:text-xl font-lora text-pink-700 leading-relaxed">
            Our services include bridal makeup, photoshoots, special events, and more, all designed to bring out your best self.
          </p>

          <p class="text-lg md:text-xl font-lora text-pink-700 leading-relaxed">
            At Sandys___Glam, we use high-quality products to ensure long-lasting, flawless looks that are tailored to your unique features.
          </p>

          <p class="text-lg md:text-xl font-lora text-pink-700 leading-relaxed">
            We believe makeup is about self-expression, boosting confidence, and helping you feel beautiful inside and out.
          </p>

          <p class="text-lg md:text-xl font-lora text-pink-700 leading-relaxed">
            Join us at <span class="font-bold">Sandys_Glam</span> and let us make your beauty vision a reality. We look forward to being part of your special moments.
          </p>
        </div>
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

.bg-gradient {
background: linear-gradient(135deg, #fff5f7 0%, #fff0f7 25%, #fdf2f8 50%, #fff0f7 75%, #fff5f7 100%);
}

/* Static Sparkles */
.static-sparkle {
position: absolute;
width: 6px;
height: 6px;
background: radial-gradient(circle, rgba(237, 100, 166, 0.8) 0%, rgba(237, 100, 166, 0) 70%);
border-radius: 50%;
opacity: 0.6;
}

.sparkle-1 {
top: 20%;
left: 10%;
}

.sparkle-2 {
top: 60%;
right: 15%;
}

.sparkle-3 {
bottom: 30%;
left: 20%;
}

/* Static Circles */
.static-circle {
position: absolute;
border-radius: 50%;
background: linear-gradient(45deg, rgba(237, 100, 166, 0.1), rgba(237, 100, 166, 0.05));
backdrop-filter: blur(8px);
}

.circle-1 {
width: 200px;
height: 200px;
top: -50px;
right: -50px;
transform: rotate(45deg);
}

.circle-2 {
width: 150px;
height: 150px;
bottom: 100px;
left: -30px;
transform: rotate(-45deg);
}

.circle-3 {
width: 100px;
height: 100px;
top: 50%;
right: 10%;
}

/* Static Glow Effect for Title */
.static-glow {
text-shadow: 0 0 15px rgba(237, 100, 166, 0.4);
}

/* Smooth hover effect for content box */
.backdrop-blur-sm {
transition: transform 0.3s ease;
}

.backdrop-blur-sm:hover {
transform: translateY(-2px);
}
</style>