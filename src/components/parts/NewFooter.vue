<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

import Logo from "@/components/icons/IconLogoMono.vue";

import GfDisclosure from "@/components/elements/GfDisclosure.vue";

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
  aboutGrab: {
    type: Object,
    default() {
      return [];
    },
  },
  supports: {
    type: Object,
    default() {
      return [];
    },
  },
});
</script>

<template>
  <footer class="pb-10 relative top-0 w-full bg-mystic">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 pt-6">
      <div class="flex justify-between items-center border-b border-gray-300">
        <Logo class="fill-gray-800 logo"></Logo>
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <MenuButton
              class="inline-flex justify-center w-full px-4 py-2 text-sm text-gray-600"
            >
              EN
              <ChevronDownIcon
                class="w-5 h-5 ml-2 -mr-1 text-gray-600"
                aria-hidden="true"
              />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-primary/20 ' : 'text-gray-900',
                      'group flex  items-center w-full px-2 py-2 text-sm transition-colors',
                    ]"
                  >
                    Bahasa Indonesia
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <button
                    :class="[
                      active ? 'bg-primary/20 ' : 'text-gray-900',
                      'group flex  items-center w-full px-2 py-2 text-sm transition-colors',
                    ]"
                  >
                    English
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="grid lg:grid-cols-4 mt-8 gap-4">
        <GfDisclosure title="Frequently Search" :items="frequentlySearch" />
        <GfDisclosure title="Popular Cuisines" :items="popularCuisines" />
        <GfDisclosure title="About Grab" :items="aboutGrab" />
        <GfDisclosure title="Support" :items="supports" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  height: 70px;
}
</style>
