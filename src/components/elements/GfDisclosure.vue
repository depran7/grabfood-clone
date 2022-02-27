<script setup lang="ts">
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

defineProps({
  title: {
    type: String,
    default: "",
  },
  items: {
    type: Object,
    default() {
      return [];
    },
  },
});

const isOpen = ref(false);
</script>
<template>
  <div>
    <div
      class="cursor-pointer lg:cursor-default lg:mb-4 font-bold text-gray-600 flex justify-between"
      @click.prevent="isOpen = !isOpen"
    >
      <div>{{ title }}</div>
      <ChevronDownIcon
        class="w-5 h-5 ml-2 -mr-1 text-gray-600 lg:hidden"
        aria-hidden="true"
      />
    </div>
    <ul
      class="flex-col gap-1 text-sm text-gray-700 lg:flex"
      :class="{ hidden: !isOpen }"
    >
      <li v-for="(item, index) in items" :key="index">
        <a :href="item.slug" class="hover:underline">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>
