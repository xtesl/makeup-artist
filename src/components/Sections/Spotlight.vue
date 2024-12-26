<template>
  <section class="py-16 bg-white text-pink-900">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-dancing font-bold text-pink-900">Spotlight</h2>
      <p class="mt-2 text-lg md:text-xl font-lora text-pink-700">A glimpse into my artistry and passion.</p>
    </div>

    <!-- Showcase Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
      <!-- Gallery Items -->
      <div v-for="(item, index) in visibleItems" 
           :key="index"
           class="relative group overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
        <img
          v-if="item.type === 'image'"
          :src="item.src"
          :alt="item.alt"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <video
          v-else
          :src="item.src"
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        ></video>
        <div class="absolute inset-0 bg-gradient-to-t from-pink-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 class="text-lg font-dancing font-bold">{{ item.title }}</h3>
            <p class="text-sm font-lora">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- View More Button -->
    <div class="text-center mt-12" v-if="hasMoreItems">
      <button 
        @click="loadMore" 
        class="group inline-flex items-center justify-center px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <span class="mr-2">View More</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-5 w-5 transform transition-transform duration-300 group-hover:translate-y-1" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
data() {
  return {
    itemsPerPage: 6,
    currentPage: 1,
    galleryItems: [
      {
        type: 'image',
        src: '/images/fashion_3.jpg',
        alt: 'Makeup Art 1',
        title: 'Fashion Editorial',
        description: 'High-fashion makeup artistry'
      },
      {
        type: 'image',
        src: '/images/image_2.jpg',
        alt: 'Makeup Art 2',
        title: 'Natural Beauty',
        description: 'Enhancing natural features'
      },
      {
        type: 'image',
        src: '/images/fashion_2.jpg',
        alt: 'Makeup Art 3',
        title: 'Fashion Look',
        description: 'Creative fashion makeup'
      },
      {
        type: 'image',
        src: '/images/event_1.jpg',
        alt: 'Makeup Art 4',
        title: 'Event Glamour',
        description: 'Special event makeup'
      },
      {
        type: 'video',
        src: '/videos/bg_vid.mp4',
        title: 'Natural Beauty',
        description: 'Elegant makeup'
      },
      {
        type: 'image',
        src: '/images/event_2.jpg',
        alt: 'Makeup Art 5',
        title: 'Event Beauty',
        description: 'Elegant event makeup'
      },
      // Add more items here as needed
      {
        type: 'image',
        src: '/images/bridal_2.jpg',
        alt: 'Bridal Makeup',
        title: 'Bridal Beauty',
        description: 'Timeless bridal looks'
      },
      {
        type: 'image',
        src: '/images/fashion_1.jpg',
        alt: 'Fashion Makeup',
        title: 'Fashion Forward',
        description: 'Trendsetting looks'
      },
    
    ]
  }
},
computed: {
  visibleItems() {
    return this.galleryItems.slice(0, this.itemsPerPage * this.currentPage)
  },
  hasMoreItems() {
    return this.visibleItems.length < this.galleryItems.length
  }
},
methods: {
  loadMore() {
    this.currentPage += 1
  }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Lora:wght@400;600&display=swap');

.font-dancing {
font-family: 'Dancing Script', cursive;
}

.font-lora {
font-family: 'Lora', serif;
}

/* Add smooth animation for new items */
.grid > div {
animation: fadeInScale 0.5s ease-out;
}

@keyframes fadeInScale {
from {
  opacity: 0;
  transform: scale(0.9);
}
to {
  opacity: 1;
  transform: scale(1);
}
}
</style>