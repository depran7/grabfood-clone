<script setup>
import Logo from "@/components/icons/IconLogoMono.vue";

defineProps({
  frequentlySearch: {
    type: Object,
    default() {
      return [];
    },
  },
  popularCuisines: {
    type: Object,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <footer class="pb-10 relative top-20 w-full bg-mystic">
    <div class="max-w-7xl mx-auto px-8 pt-6">
      <div class="flex justify-between items-center border-b border-gray-300">
        <Logo class="fill-gray-800 logo"></Logo>
        <button class="text-sm">EN</button>
      </div>
      <div class="grid lg:grid-cols-4 mt-8">
        <div>
          <div class="mb-4 font-bold text-gray-600">Frequently Searched</div>
          <ul class="flex flex-col gap-1 text-sm text-gray-700">
            <li v-for="(item, index) in frequentlySearch" :key="index">
              <a :href="item.slug" class="hover:underline">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div>
          <div class="mb-4 font-bold text-gray-600">Popular Cuisines</div>
          <ul class="flex flex-col gap-1 text-sm text-gray-700">
            <li v-for="(item, index) in popularCuisines" :key="index">
              <a :href="item.slug" class="hover:underline">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div>
          <div class="mb-4 font-bold text-gray-600">About Grab</div>
          <ul class="flex flex-col gap-1 text-sm text-gray-700">
            <li><a href="" class="hover:underline">About Grab</a></li>
            <li><a href="" class="hover:underline">About Grab Food</a></li>
            <li><a href="" class="hover:underline">Blog</a></li>
            <li><a href="" class="hover:underline"></a></li>
          </ul>
        </div>
        <div>
          <div class="mb-4 font-bold text-gray-600">Support</div>
          <ul class="flex flex-col gap-1 text-sm text-gray-700">
            <li><a href="" class="hover:underline">Help</a></li>
            <li><a href="" class="hover:underline">FAQs</a></li>
            <li>
              <a href="" class="hover:underline">Be a GrabFood Merchant</a>
            </li>
            <li><a href="" class="hover:underline">Drive With Grab</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  height: 70px;
}
</style>
