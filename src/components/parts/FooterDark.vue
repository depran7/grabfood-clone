<script setup>
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconTwitter from "@/components/icons/IconTwitter.vue";

// import ref from vue
import { ref } from "vue";
const countries = ref([
  "Indonesia",
  "Philippines",
  "Thailand",
  "Vietnam",
  "Singapore",
  "Malaysia",
  "Myanmar",
]);
</script>
<template>
  <footer class="relative pt-2 pb-12 lg:pb-4 w-full bg-tuna text-white">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 pt-6">
      <div class="flex flex-col items-center lg:flex-row lg:justify-between">
        <div class="text-center lg:text-left">
          <div class="font-semibold">Countries with GrabFood</div>
          <div class="flex mt-4 mb-10 flex-wrap justify-center">
            <a
              href=""
              v-for="(item, index) in countries"
              :key="index"
              class="after:mx-2 after:text-gray-500 text-sm hover:underline"
              :class="{ 'after:content-[\'|\']': index < countries.length - 1 }"
            >
              {{ item }}
            </a>
          </div>
        </div>
        <div class="flex gap-8 mb-4">
          <a href=""><IconFacebook class="h-7 fill-white" /></a>
          <a href=""><IconInstagram class="h-7 fill-white" /></a>
          <a href=""><IconTwitter class="h-7 fill-white" /></a>
        </div>
      </div>
      <div
        class="flex flex-col justify-center lg:flex-row lg:justify-between items-center"
      >
        <div class="text-center lg:text-left">
          <div class="text-white/70">© Grab 2022</div>
          <div class="flex mt-4 mb-10 items-center gap-2 text-md">
            <a href="" class="text-sm hover:underline"> Terms of Service </a>
            <span>•</span>
            <a href="" class="text-sm hover:underline"> Privacy Policy </a>
          </div>
        </div>
        <div class="flex gap-6">
          <img
            src="@/assets/images/logo-appstore.svg"
            alt="Logo AppStore"
            class="h-10"
          />
          <img
            src="@/assets/images/logo-playstore.svg"
            alt="Logo Playstore"
            class="h-10"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
