<script setup lang="ts">
import { ref } from "vue";
import Promotion from "@/models/Promotion";

import { XIcon } from "@heroicons/vue/solid";

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

defineProps<{
  promotions: Promotion[];
}>();

let isOpen = ref(false);
function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

<template>
  <div id="promo" class="mt-2 md:flex gap-4 items-end text-gray-700">
    <div>
      <div v-for="(promo, index) in promotions" :key="index" class="flex gap-2">
        <img src="@/assets/images/icons/icon-promo-tag.svg" alt="Promo Tag" />
        <p>{{ promo.name }}</p>
      </div>
    </div>
    <button class="text-curious-blue font-semibold" @click="openModal">
      See details
    </button>
  </div>
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
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-semibold leading-6 text-gray-900 flex justify-between items-center mb-6"
              >
                <div class="flex gap-2">
                  Promotions
                  <img src="@/assets/images/icons/icon-promo-tag.svg" alt="" />
                </div>
                <button type="button" @click="closeModal">
                  <XIcon class="w-6 h-6 text-gray-500"></XIcon>
                </button>
              </DialogTitle>
              <div class="flex flex-col gap-4 lg:gap-8">
                <div v-for="(promo, index) in promotions" :key="index">
                  <h4 class="font-medium">{{ promo.name }}</h4>
                  <ul
                    v-for="(item, index) in promo.desc"
                    :key="index"
                    class="list-disc pl-4 text-sm text-gray-500"
                  >
                    <li>{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
