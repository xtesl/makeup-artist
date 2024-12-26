<template>
    <section class="relative py-16 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 background-pattern">
        <div class="floating-shapes">
          <div v-for="n in 6" :key="n" 
               class="shape" 
               :style="{ 
                 '--delay': `${n * 2}s`,
                 '--size': `${Math.random() * 100 + 50}px`,
                 left: `${Math.random() * 100}%`
               }">
          </div>
        </div>
        <div class="gradient-overlay"></div>
      </div>

      <div class="relative z-10">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-dancing font-bold text-pink-900">Our Services</h2>
          <p class="mt-2 text-lg md:text-xl font-lora text-pink-900">Tailored Beauty Services to Suit Your Every Need</p>
        </div>
    
        <!-- Services Cards -->
        <div class="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, index) in services" :key="index" 
               class="service-card group"
               :style="{ 'animation-delay': `${index * 0.1}s` }">
            <div class="relative p-6 bg-white/90 backdrop-blur-sm rounded-xl shadow transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-pink-100 overflow-hidden">
              <div class="card-background absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div class="relative z-10">
                <div class="flex justify-center mb-4 service-icon">
                  <i :class="`pi ${service.icon} text-4xl text-pink-500`"></i>
                </div>
                <h3 class="text-2xl font-dancing text-pink-900">{{ service.title }}</h3>
                <p class="text-lg text-pink-700 mt-4">{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
  
<script>
export default {
  data() {
    return {
      services: [
        {
          icon: 'pi-heart',
          title: 'Bridal Makeup',
          description: 'Specialized bridal makeup services to make your big day unforgettable. From classic to modern looks, we ensure you look stunning.'
        },
        {
          icon: 'pi-camera',
          title: 'Photoshoot Makeup',
          description: "We create flawless looks for photoshoots, ensuring that you look your best on camera, whether it's for fashion, portraits, or commercial shoots."
        },
        {
          icon: 'pi-calendar',
          title: 'Event Makeup',
          description: "Whether it's a party, gala, or corporate event, we offer professional makeup services to help you look your best for any occasion."
        },
        {
          icon: 'pi-globe',
          title: 'Destination Makeup',
          description: 'We offer destination makeup services for weddings and events, ensuring that you look beautiful no matter where your event takes you.'
        },
        {
          icon: 'pi-star',
          title: 'Special Occasion Makeup',
          description: 'Perfect for birthdays, anniversaries, or any special occasion where you want to feel and look your best.'
        },
        {
          icon: 'pi-heart',
          title: 'Makeup Lessons',
          description: 'Learn the art of makeup with personalized lessons tailored to your needs. Perfect for beginners or those looking to enhance their skills.'
        }
      ]
    }
  }
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

/* Background Pattern */
.background-pattern {
  background: linear-gradient(135deg, #FDF2F8, #FCE7F3);
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  top: -100px;
  width: var(--size);
  height: var(--size);
  background: radial-gradient(circle at center, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0) 70%);
  border-radius: 50%;
  animation: float 20s infinite linear;
  animation-delay: var(--delay);
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, 
    transparent 0%, 
    rgba(253, 242, 248, 0.8) 70%
  );
}

/* Card Animations */
.service-card {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.card-background {
  background: radial-gradient(
    circle at var(--mouse-x, center) var(--mouse-y, center),
    rgba(236, 72, 153, 0.1) 0%,
    transparent 60%
  );
}

.service-icon {
  position: relative;
}

.service-icon::after {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(120vh) rotate(180deg);
  }
  100% {
    transform: translateY(240vh) rotate(360deg);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(1); opacity: 0.8; }
}

/* Interactive hover effect */
.service-card:hover .service-icon i {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

/* Add card interaction on hover */
.service-card > div:hover {
  box-shadow: 0 20px 25px -5px rgba(236, 72, 153, 0.1), 
              0 10px 10px -5px rgba(236, 72, 153, 0.04);
}
</style>