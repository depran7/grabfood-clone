<script setup>
import { ref } from "vue";

import Logo from "@/components/icons/IconLogo.vue";
import GfButton from "@/components/elements/GfButton.vue";
import SearchLocation from "@/components/elements/SearchLocation.vue";

import { XIcon } from "@heroicons/vue/solid";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

let isOpen = ref(false);
function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

<template>
  <header class="relative lg:sticky w-full z-20 top-0 bg-white">
    <div
      class="max-w-7xl h-20 mx-auto px-4 lg:px-8 flex justify-between items-center"
    >
      <Logo class="fill-primary logo"></Logo>
      <div class="hidden lg:flex flex-1">
        <div class="w-1/2">
          <div class="w-5/6 mx-auto">
            <SearchLocation></SearchLocation>
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <GfButton class="hidden md:inline-block" @click="openModal">
          <img
            src="@/assets/images/icons/icon-cart-default-black.svg"
            alt=""
            class="h-4"
          />
        </GfButton>
        <GfButton class="text-sm font-semibold text-gray-500">
          Login/Sign up
        </GfButton>
      </div>
    </div>
  </header>
  <div
    class="bg-white max-w-7xl h-20 mx-auto px-4 lg:px-8 flex justify-between items-center lg:hidden sticky z-20 top-0"
  >
    <div class="w-full">
      <SearchLocation></SearchLocation>
    </div>
  </div>

  <!-- Cart -->
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-30 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-black/40" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-200 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="absolute right-0 inline-block h-full w-full md:max-w-md lg:max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-semibold leading-6 text-gray-900 flex justify-between items-center"
              >
                <button type="button" @click="closeModal">
                  <XIcon class="w-6 h-6 text-gray-400"></XIcon>
                </button>
              </DialogTitle>
              <div
                class="flex flex-col justify-center items-center lg:gap-7 h-full -mt-16"
              >
                <img
                  src="@/assets/images/ilustrations/ilus-basket-empty.svg"
                  alt="Keranjang Kosong"
                  class="h-48"
                />
                <div class="text-center">
                  <h2 class="font-semibold text-xl mb-2">
                    Start Grabbing Food!
                  </h2>
                  <p class="text-xs text-gray-400">
                    Add items to your basket and place order here.
                  </p>
                </div>
                <button
                  class="text-curious-blue font-medium text-sm"
                  @click="closeModal"
                >
                  Continue browsing
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped>
.logo {
  height: 50px;
}
</style>
