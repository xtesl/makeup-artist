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
           @click="openModal(index)"
           class="relative group cursor-pointer">
        <!-- First image with caption below -->
        <div v-if="index === 0" class="flex flex-col">
          <div class="rounded-lg shadow-lg overflow-hidden aspect-[4/5]">
            <img
              :src="item.src"
              :alt="item.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div class="mt-4 text-center">
            <h3 class="font-dancing text-2xl font-bold text-pink-900">Sandra Owusu Boakye</h3>
          </div>
        </div>
        <!-- Other gallery items -->
        <div v-else class="rounded-lg shadow-lg overflow-hidden aspect-[4/5]">
          <img
            v-if="item.type === 'image'"
            :src="item.src"
            :alt="item.alt"
            v-bind:class="{ 'opacity-0': !isImageLoaded }"
            @load="onImageLoaded"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <video
            v-else-if="item.type === 'video'"
            :src="item.src"
            v-bind:class="{ 'opacity-0': !isVideoLoaded }"
            @loadeddata="onVideoLoaded"
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
    </div>

    <!-- Modal -->
    <Transition name="fade">
  <div v-if="isModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
    <div class="relative w-full max-w-5xl max-h-[90vh] flex items-center">
      <button @click="closeModal" class="absolute -top-12 right-0 text-white hover:text-pink-500 transition-colors z-10">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <button @click="prevItem" class="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-500 transition-colors z-10">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button @click="nextItem" class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-pink-500 transition-colors z-10">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div class="w-full h-full flex flex-col">
        <div class="relative w-full h-full flex items-center justify-center bg-black rounded-lg overflow-hidden">
          <video v-if="currentModalItem.type === 'video'"
            :src="currentModalItem.src"
            class="max-w-full max-h-[80vh] object-contain"
            autoplay
            loop
            muted
            playsinline
            controls
          ></video>
          <img v-else
            :src="currentModalItem.src"
            :alt="currentModalItem.alt"
            class="max-w-full max-h-[80vh] object-contain"
          >
          
          <div v-if="currentModalItem.title || currentModalItem.description" 
            class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
            <h3 v-if="currentModalItem.title" class="text-lg font-dancing font-bold">{{ currentModalItem.title }}</h3>
            <p v-if="currentModalItem.description" class="text-sm font-lora">{{ currentModalItem.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Transition>

    <!-- Gallery Controls -->
    <div class="text-center mt-12 space-y-4">
      <button
        v-if="hasMoreItems"
        @click="loadMore"
        class="group inline-flex items-center justify-center px-8 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <span class="mr-2">View More</span>
        <span class="text-sm opacity-75">({{ remainingItems }} more)</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 transform transition-transform duration-300 group-hover:translate-y-1 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <button
        v-if="canShowLess"
        @click="showLess"
        class="group inline-flex items-center justify-center px-8 py-3 bg-white text-pink-900 border-2 border-pink-500 rounded-full hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        <span class="mr-2">Show Less</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1 ml-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>

    <!-- Portfolio Link Section -->
    <div class="text-center mt-16">
      <p class="text-lg font-lora text-pink-700 mb-4">Want to see more of my work?</p>
      <RouterLink
        to="/portfolio" 
        class="inline-flex items-center justify-center px-8 py-3 bg-white text-pink-900 border-2 border-pink-500 rounded-full hover:bg-pink-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
      >
        <span class="mr-2 font-dancing text-lg font-bold">View Full Portfolio</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </RouterLink>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      initialItems: 6,
      loadMoreItems: 3,
      currentPage: 1,
      isModalOpen: false,
      currentModalIndex: 0,
      isVideoLoaded: false,
      isImageLoaded: false,
      observer: null,
      isLoading: true,
      intersectionOptions: {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      },
      galleryItems: [
        {
          type: 'image',
          src: '/images/fashion_3.jpg',
          alt: 'Sandra Owusu Boakye',
          title: 'Sandra Owusu Boakye',
          description: 'Sandra Owusu Boakye'
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
        {
          type: 'image',
          src: '/images/bridal_2.jpg',
          alt: 'Bridal Makeup',
          title: 'Bridal Beauty',
          description: 'Timeless bridal looks'
        },
        {
          type: "video",
          src: "/videos/beforeafter_1.mp4",
          alt: "before/after",
          title: "",
          description: ""
        },
        {
          type: "video",
          src: "/videos/beforeafter_2.mp4",
          alt: "before/after",
          title: "",
          description: ""
        },
        {
          type: "video",
          src: "/videos/beforeafter_3.mp4",
          alt: "before/after",
          title: "",
          description: ""
        },
        {
          type: "video",
          src: "/videos/natural_beauty.mp4",
          alt: "natural beauty",
          title: "",
          description: ""
        },
        {
          type: "video",
          src: "/videos/vid_1.mp4",
          alt: "natural beauty",
          title: "",
          description: ""
        },
        {
          type: "video",
          src: "/videos/masterclass_2.mp4",
          alt: "masterclass",
          title: "Masterclass",
          description: ""
        },
        {
          type: "video",
          src: "/videos/beforeafter_5.mp4",
          alt: "before/after",
          title: "",
          description: ""
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
  mounted() {
    this.setupIntersectionObserver()
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  computed: {
    visibleItems() {
      const itemsToShow = this.initialItems + (this.currentPage - 1) * this.loadMoreItems
      return this.galleryItems.slice(0, itemsToShow)
    },
    hasMoreItems() {
      return this.visibleItems.length < this.galleryItems.length
    },
    remainingItems() {
      return this.galleryItems.length - this.visibleItems.length
    },
    canShowLess() {
      return this.visibleItems.length > this.initialItems
    },
    currentModalItem() {
      return this.galleryItems[this.currentModalIndex]
    }
  },
  methods: {
    onModalImageLoad() {
    this.isLoading = false;
  },
  openModal(index) {
    this.currentModalIndex = index;
    this.isModalOpen = true;
    this.isLoading = true;
  },
    loadMore() {
      this.currentPage += 1
    },
    showLess() {
      this.currentPage = 1
    },
    openModal(index) {
      this.currentModalIndex = index
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    nextItem() {
      this.currentModalIndex = (this.currentModalIndex + 1) % this.galleryItems.length
    },
    prevItem() {
      this.currentModalIndex = (this.currentModalIndex - 1 + this.galleryItems.length) % this.galleryItems.length
    },
    setupIntersectionObserver() {
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const mediaElement = entry.target
            if (mediaElement.tagName === 'VIDEO') {
              mediaElement.load()
            }
            this.observer.unobserve(mediaElement)
          }
        })
      }, this.intersectionOptions)

      this.$nextTick(() => {
        const mediaElements = document.querySelectorAll('video, img')
        mediaElements.forEach(el => this.observer.observe(el))
      })
    },
    onVideoLoaded() {
      this.isVideoLoaded = true
    },
    onImageLoaded() {
      this.isImageLoaded = true
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

::-webkit-media-controls-timeline {
  margin-left: 10px;
  margin-right: 10px;
}

video::-webkit-media-controls-panel {
  background-image: linear-gradient(transparent, transparent) !important;
}

.group-hover\:scale-110 {
  will-change: transform;
}

/* Use transform instead of opacity for transitions */
.fade-enter-active,
.fade-leave-active {
  will-change: transform, opacity;
}
</style>