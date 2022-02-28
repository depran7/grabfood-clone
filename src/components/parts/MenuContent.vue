<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

import DetailMerchant from "@/models/DetailMerchant";
import IconSquarePlus from "@/components/icons/IconSquarePlus.vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
const props = defineProps<{
  detailMerchant: DetailMerchant;
}>();

const selectedMenu = ref(props?.detailMerchant?.menus[0]);
const refMenuContents = ref(props?.detailMerchant?.menus ?? []);
onMounted(() => {
  window.addEventListener("scroll", scrollSelectMenu);
});
onUnmounted(() => {
  window.removeEventListener("scroll", scrollSelectMenu);
});

function scrollSelectMenu() {
  const menuContents = refMenuContents.value;
  menuContents.forEach((menuContent, index) => {
    const menuEL = document.getElementById(`menu-${index}`);
    if (window.scrollY >= menuEL.offsetTop + 360) {
      selectedMenu.value = menuContent;
    }
  });
}

function selectMenu(item, index) {
  selectedMenu.value = item;
  checkMenuContents(index);
}

function checkMenuContents(index) {
  window.scrollTo({
    top: document.getElementById(`menu-${index}`).offsetTop + 360,
    behavior: "smooth",
  });
}
</script>
<template>
  <!-- tabs -->
  <div class="sticky mt-10 top-20 bg-white z-10">
    <div class="8 bg-white">
      <div class="block overflow-hidden">
        <div class="absolute top-0 w-full bg-white shadow-md">
          <div class="max-w-7xl mx-auto px-4 lg:px-8">
            <div class="flex items-center">
              <button class="h-full p-1 prev-btn relative">
                <ChevronLeftIcon
                  class="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
              <div class="overflow-hidden">
                <div class="whitespace-nowrap">
                  <template
                    v-for="(category, index) in detailMerchant.menus"
                    :key="index"
                  >
                    <button
                      class="px-4 py-2 inline-block"
                      :class="{
                        'border-b-2 border-primary text-primary font-bold':
                          selectedMenu.name === category.name,
                      }"
                      @click="selectMenu(category, index)"
                    >
                      {{ category.name }}
                    </button>
                  </template>
                </div>
              </div>
              <button class="h-full p-1 next-btn relative">
                <ChevronRightIcon
                  class="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- menus -->
  <div class="relative top-0 lg:bg-gray-100 pt-20 pb-10" id="menus-container">
    <div
      v-for="(category, index) in detailMerchant.menus"
      :key="index"
      :id="`menu-${index}`"
      class="max-w-7xl mx-auto pb-10 lg:pt-10 px-4 lg:px-8"
    >
      <h2
        class="text-xl lg:text-4xl font-semibold mb-2 lg:mb-12 lg:mt-0"
        :class="{ 'mt-10': index > 0 }"
      >
        {{ category.name }}
      </h2>
      <!-- card items category -->
      <div class="grid lg:grid-cols-3 lg:gap-4">
        <div
          class="bg-white rounded py-4 lg:px-4 flex gap-4 border-b lg:border-b-0 lg:hover:ring-2 box-border lg:hover:ring-primary hover:cursor-pointer"
          v-for="(item, index) in category.items"
          :class="{ 'opacity-50': !item.available }"
          :key="index"
        >
          <div class="w-48">
            <img :src="item.imgUrl" alt="item.name" class="w-full rounded-md" />
          </div>
          <div class="flex flex-col w-full">
            <div class="h-full">
              <h3 class="text-lg text-gray-800">{{ item.name }}</h3>
              <p class="text-gray-400 text-sm">{{ item.description }}</p>
            </div>
            <div class="text-right">
              <button class="rounded w-8 h-8">
                <IconSquarePlus class="fill-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- noted -->
    <div class="text-center text-xs">
      <span
        >We're always working to get the most accurate information.
        <a href="/" class="text-curious-blue">Let us know</a> if you come across
        anything that's outdated!</span
      >
    </div>
  </div>
</template>

<style>
.prev-btn:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 100%;
  top: 0;
  right: -16px;
  background: linear-gradient(270deg, hsla(0, 0%, 100%, 0), #fff);
}
.next-btn:before {
  content: "";
  position: absolute;
  width: 16px;
  height: 100%;
  top: 0;
  left: -16px;
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff);
}
</style>
