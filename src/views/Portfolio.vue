<template>
    <section class="relative py-16 bg-gradient-to-br from-pink-50 to-white">
      <!-- Background Decoration -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-0 w-64 h-64 transform -translate-x-1/2 -translate-y-1/2 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 transform translate-x-1/2 translate-y-1/2 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div class="relative container mx-auto px-4">
        <!-- Header -->
        <div class="text-center mb-12">
          <h2 class="text-4xl md:text-5xl font-dancing font-bold text-pink-900 mb-4">Portfolio</h2>
          <p class="text-lg text-pink-700 font-lora mb-8">Discover the artistry of transformation</p>
          
          <!-- Filter Buttons -->
          <div class="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              v-for="category in categories" 
              :key="category"
              @click="currentCategory = category"
              :class="[
                'px-6 py-2 rounded-full transition-all duration-300',
                currentCategory === category 
                  ? 'bg-pink-500 text-white shadow-lg' 
                  : 'bg-white text-pink-500 hover:bg-pink-100'
              ]"
            >
              {{ category }}
            </button>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(item, index) in filteredItems" 
               :key="index"
               class="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
               @click="openLightbox(index)">
            
            <!-- Image/Video Container -->
            <div class="aspect-[3/4] overflow-hidden bg-pink-100">
              <!-- Video Item -->
              <video v-if="item.type === 'video'"
                     class="w-full h-full object-cover"
                     :src="item.src"
                     muted
                     loop
                     autoplay
                     playsinline>
              </video>
              <!-- Image Item -->
              <img v-else
                   :src="item.src"
                   :alt="item.title"
                   class="w-full h-full object-cover">
            </div>

            <!-- Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 class="text-xl font-dancing font-bold">{{ item.title }}</h3>
                <p class="text-sm font-lora">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="text-center mt-12">
          <button @click="loadMore" 
                  class="px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Load More
          </button>
        </div>

        <!-- Enhanced Lightbox -->
        <div v-if="selectedIndex !== null" 
             class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
             @click="closeLightbox"
             @keydown="handleKeypress">
          <div class="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center" @click.stop>
            <!-- Close Button -->
            <button @click="closeLightbox" 
                    class="absolute top-4 right-4 text-white text-3xl hover:text-pink-500 z-20">
              ×
            </button>
            
            <!-- Navigation Buttons -->
            <button @click="previousItem" 
                    class="absolute left-4 text-white text-4xl hover:text-pink-500 z-20"
                    v-show="selectedIndex > 0">
              ‹
            </button>
            <button @click="nextItem" 
                    class="absolute right-4 text-white text-4xl hover:text-pink-500 z-20"
                    v-show="selectedIndex < filteredItems.length - 1">
              ›
            </button>
            
            <!-- Media Container -->
            <div class="w-full h-full flex flex-col items-center justify-center">
              <div class="relative w-full h-[80vh] flex items-center justify-center">
                <video v-if="currentItem.type === 'video'"
                       class="max-w-full max-h-full object-contain"
                       :src="currentItem.src"
                       controls
                       autoplay
                       playsinline>
                </video>
                <img v-else
                     :src="currentItem.src"
                     :alt="currentItem.title"
                     class="max-w-full max-h-full object-contain">
              </div>
              
              <!-- Caption -->
              <div class="text-white text-center mt-4 p-4">
                <h3 class="text-xl font-dancing font-bold">{{ currentItem.title }}</h3>
                <p class="text-sm font-lora mt-2">{{ currentItem.description }}</p>
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
      currentCategory: 'All',
      selectedIndex: null,
      visibleItems: 9,
      categories: ['All', 'Bridal', 'Fashion', 'Events', 'Before/After', 'Masterclass', "Behind the Glam", "Others"],
      portfolioItems: [
      {
          type: 'image',
          src: '/images/bridal_2.jpg',
          title: 'Bridal Glamour',
          category: 'Bridal',
          description: 'Elegant bridal makeup with a natural glow'
        },
        {
          type: 'image',
          src: '/images/bridal_6.jpg',
          title: 'Bridal Glamour',
          category: 'Bridal',
          description: 'Elegant bridal makeup with a natural glow'
        },
        
        {
          type: 'image',
          src: '/images/event_7.jpeg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        },
        {
          type: 'image',
          src: '/images/event_8.jpeg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        }, {
          type: 'image',
          src: '/images/event_9.jpeg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        }, {
          type: 'image',
          src: '/images/event_10.jpeg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        }, {
          type: 'image',
          src: '/images/event_11.jpeg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        }, {
          type: 'image',
          src: '/images/event_12.jpeg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        }, {
          type: 'image',
          src: '/images/event_13.jpeg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        },

        {
          type: 'image',
          src: '/images/bridal_7.jpg',
          title: 'Bridal Glamour',
          category: 'Bridal',
          description: 'Elegant bridal makeup with a natural glow'
        },
        {
          type: 'image',
          src: '/images/bridal_9.jpg',
          title: 'Bridal Glamour',
          category: 'Bridal',
          description: 'Elegant bridal makeup with a natural glow'
        },
        {
          type: 'image',
          src: '/images/masterclass_1.jpg',
          title: 'Makeup Transformation',
          category: 'Masterclass',
          description: 'A masterclass makeup art'
        },
        {
          type: 'image',
          src: '/images/masterclass_2.jpg',
          title: 'Makeup Transformation',
          category: 'Masterclass',
          description: 'A masterclass makeup art'
        },
        {
          type: 'image',
          src: '/images/masterclass_3.jpg',
          title: 'Makeup Transformation',
          category: 'Masterclass',
          description: 'A masterclass makeup art'
        },
        {
          type: 'image',
          src: '/images/event_5.jpg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        },
        {
          type: 'image',
          src: '/images/bridal_5.jpg',
          title: 'Bridal Glamour',
          category: 'Bridal',
          description: 'Elegant bridal makeup with a natural glow'
        },
        {
          type: 'image',
          src: '/images/bridal_8.jpg',
          title: 'Bridal Glamour',
          category: 'Bridal',
          description: 'Elegant bridal makeup with a natural glow'
        },



        {
          type: 'image',
          src: '/images/event_2.jpg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        },
        {
          type: 'image',
          src: '/images/event_3.jpg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        },
        {
          type: 'image',
          src: '/images/others_1.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'image',
          src: '/images/others_8.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'image',
          src: '/images/natural_1.jpg',
          title: 'Fashion Editorial',
          category: 'Fashion',
          description: 'Bold editorial look for magazine shoot'
        },
        {
          type: 'image',
          src: '/images/others_2.jpg',
          title: '',
          category: 'Others',
          description: ''
        },

        {
          type: 'image',
          src: '/images/others_7.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'image',
          src: '/images/others_9.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'image',
          src: '/images/others_3.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'image',
          src: '/images/others.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'image',
          src: '/images/others_4.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'image',
          src: '/images/others_5.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'image',
          src: '/images/others_6.jpg',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'video',
          src: '/videos/beforeafter_3.mp4',
          title: 'Makeup Transformation',
          category: 'Masterclass',
          description: 'A masterclass makeup art'
        },
        {
          type: 'video',
          src: '/videos/masterclass_2.mp4',
          title: 'Makeup Transformation',
          category: 'Masterclass',
          description: 'A masterclass makeup art'
        },
        {
          type: 'video',
          src: '/videos/beforeafter_1.mp4',
          title: 'Makeup Transformation',
          category: 'Before/After',
          description: 'Complete makeup transformation process'
        },
       
        {
          type: 'video',
          src: '/videos/behind_the_glam.mp4',
          title: 'Makeup Transformation',
          category: 'Behind the Glam',
          description: 'Complete makeup transformation process'
        },
        {
          type: 'video',
          src: '/videos/beforeafter_5.mp4',
          title: 'Makeup Transformation',
          category: 'Before/After',
          description: 'Complete makeup transformation'
        },
        {
          type: 'video',
          src: '/videos/beforeafter_2.mp4',
          title: 'Makeup Transformation',
          category: 'Before/After',
          description: 'Complete makeup transformation process'
        },
        {
          type: 'video',
          src: '/videos/behind_the_glam_1.mp4',
          title: 'Makeup Transformation',
          category: 'Behind the Glam',
          description: 'Complete makeup transformation process'
        },
        {
          type: 'image',
          src: '/images/fashion_1.jpg',
          title: 'Fashion Editorial',
          category: 'Fashion',
          description: 'Bold editorial look for magazine shoot'
        },
        {
          type: 'image',
          src: '/images/fashion_3.jpg',
          title: 'Fashion Editorial',
          category: 'Fashion',
          description: 'Bold editorial look for magazine shoot'
        },
      
        {
          type: 'image',
          src: '/images/fashion_2.jpg',
          title: 'Fashion Editorial',
          category: 'Fashion',
          description: 'Bold editorial look for magazine shoot'
        },
        // Add more items as needed...
        {
          type: 'image',
          src: '/images/event_4.jpg',
          title: 'Evening Glam',
          category: 'Events',
          description: 'Sophisticated evening makeup'
        },
        
        {
          type: 'video',
          src: '/videos/behind_the_glam_2.mp4',
          title: 'Makeup Transformation',
          category: 'Behind the Glam',
          description: 'Complete makeup transformation process'
        },
        {
          type: 'image',
          src: '/images/bridal_4.jpg',
          title: 'Bridal Process',
          category: 'Bridal',
          description: 'Behind the scenes of bridal makeup'
        },
        {
          type: 'video',
          src: '/videos/bridal_1.mp4',
          title: 'Bridal Beauty',
          category: "Bridal",
          description: 'Timeless bridal looks'
        },
        {
          type: 'video',
          src: '/videos/bridal_2.mp4',
          title: 'Bridal Beauty',
          category: "Bridal",
          description: 'Timeless bridal looks'
        },
        {
          type: 'video',
          src: '/videos/bridal_3.mp4',
          title: 'Bridal Beauty',
          category: "Bridal",
          description: 'Timeless bridal looks'
        },
        {
          type: 'video',
          src: '/videos/behind_the_glam_3.mp4',
          title: 'Makeup Transformation',
          category: 'Behind the Glam',
          description: 'Complete makeup transformation process'
        },
        {
          type: 'video',
          src: '/videos/event_1.mp4',
          title: 'Event Beauty',
          category: "Events",
          description: 'Elegant event makeup'
        },
        {
          type: 'image',
          src: '/images/beforeafter_1.jpg',
          title: 'Natural Beauty',
          category: 'Before/After',
          description: 'Natural makeup enhancement'
        },
        {
          type: 'video',
          src: '/videos/natural_beauty.mp4',
          title: '',
          category: 'Others',
          description: ''
        },
        {
          type: 'video',
          src: '/videos/vid_1.mp4',
          title: 'Makeup Transformation',
          category: 'Before/After',
          description: 'Amazing makeup transformation'
        },
        {
          type: 'video',
          src: '/videos/bg_vid.mp4',
          title: '',
          category: 'Others',
          description: ''
        },
        // ... rest of your items ...
      ]
    }
  },
  mounted() {
    document.title = "Sandys___Glam | Portfolio";
    const descriptionMetaTag = document.querySelector('meta[name="description"]');
    if (descriptionMetaTag) {
      descriptionMetaTag.setAttribute('content', "Explore the beauty and elegance of Sandys___Glam.");
    }
  },
  computed: {
    filteredItems() {
      const filtered = this.currentCategory === 'All'
        ? this.portfolioItems
        : this.portfolioItems.filter(item => item.category === this.currentCategory)
      return filtered.slice(0, this.visibleItems)
    },
    currentItem() {
      return this.selectedIndex !== null ? this.filteredItems[this.selectedIndex] : null
    }
  },
  methods: {
    loadMore() {
      this.visibleItems += 6
    },
    openLightbox(index) {
      this.selectedIndex = index
      document.body.classList.add('overflow-hidden')
    },
    closeLightbox() {
      this.selectedIndex = null
      document.body.classList.remove('overflow-hidden')
    },
    previousItem() {
      if (this.selectedIndex > 0) {
        this.selectedIndex--
      }
    },
    nextItem() {
      if (this.selectedIndex < this.filteredItems.length - 1) {
        this.selectedIndex++
      }
    },
    handleKeypress(event) {
      switch(event.key) {
        case 'ArrowLeft':
          this.previousItem()
          break
        case 'ArrowRight':
          this.nextItem()
          break
        case 'Escape':
          this.closeLightbox()
          break
      }
    }
  },
  beforeUnmount() {
    document.body.classList.remove('overflow-hidden')
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

/* Hover Effects */
.group:hover img,
.group:hover video {
  transform: scale(1.1);
  transition: transform 0.6s ease;
}

/* Smooth Transitions */
img, video {
  transition: transform 0.6s ease;
}

/* Animation for items appearing */
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

.grid > div {
  animation: fadeInUp 0.6s ease backwards;
  animation-delay: calc(var(--index) * 0.1s);
}
</style>