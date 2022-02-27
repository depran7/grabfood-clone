<script setup>
import IconLocation from "@/components/icons/IconLocation.vue";

import GfButton from "@/components/elements/GfButton.vue";

import { ref } from "vue";

const isClicked = ref(false);
const myinput = ref(null);

function open() {
  isClicked.value = true;
  setTimeout(() => {
    myinput.value.focus();
  }, 200);
}
</script>
<template>
  <GfButton
    v-show="!isClicked"
    class="w-full mx-auto rounded-lg !border-gray-300 gap-2 py-1"
    @click="open"
  >
    <IconLocation />
    <span class="text-gray-400/70">Type your location</span>
  </GfButton>
  <div v-show="isClicked" class="relative">
    <IconLocation class="absolute translate-y-1 left-2" />
    <input
      ref="myinput"
      @blur="isClicked = false"
      type="text"
      placeholder="Type your location"
      class="w-full mx-auto rounded-lg border border-gray-300 gap-2 py-2 group px-12 focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/20"
    />
    <button>
      <img
        src="@/assets/images/icons/icon-geo-button.svg"
        class="absolute translate-y-1 top-1 right-2"
      />
    </button>
  </div>
</template>
