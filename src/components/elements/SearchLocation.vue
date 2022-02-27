<script setup>
import IconLocation from "@/components/icons/IconLocation.vue";

import GfButton from "@/components/elements/GfButton.vue";
</script>
<template>
  <GfButton
    class="w-full mx-auto rounded-lg !border-1 !border-gray-200 gap-2 py-1"
  >
    <IconLocation />
    <span class="text-gray-400/70">Type your location</span>
  </GfButton>
</template>
