<script setup lang="ts">
import { ref } from "vue";
import DetailMerchant from "@/models/DetailMerchant";
import DetailMerchantPromo from "./DetailMerchantPromo.vue";

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

import { SelectorIcon } from "@heroicons/vue/solid";

const props = defineProps<{
  detailMerchant: DetailMerchant;
}>();

const selectedDeliveryDate = ref(props?.detailMerchant?.deliveryDate[0]);
const selectedDeliveryTime = ref(props?.detailMerchant?.deliveryTime[0]);
</script>
<template>
  <!-- preferred merchant label -->
  <div class="flex gap-1 text-primary mt-4">
    <img
      src="@/assets/images/icons/icon-preferred-merchant.svg"
      alt="preferred merchant"
    />
    <span v-if="detailMerchant.isPreffered" class="text-sm font-medium">
      Preferred Merchant
    </span>
  </div>

  <h1 class="text-4xl font-semibold mt-2">{{ detailMerchant.name }}</h1>
  <h3 class="text-gray-500 mt-2">{{ detailMerchant.cuisine }}</h3>

  <!-- rating & distance -->
  <div class="text-gray-500 flex gap-8 mt-1">
    <div class="flex gap-2">
      <img src="@/assets/images/icons/icon-star.svg" alt="preferred merchant" />
      <span>{{ detailMerchant.rating }}</span>
    </div>
    <span>{{ detailMerchant.distance }}</span>
  </div>

  <!-- opening hours -->
  <div class="text-gray-500 flex gap-8 mt-1 items-center">
    <div class="font-semibold">Opening Hours</div>
    <div class="flex gap-2 items-center">
      <template v-if="!detailMerchant.isOpen">
        <div>Today Closed</div>
        <div class="text-sm py-1 px-2 bg-danger rounded text-white">Closed</div>
      </template>
      <template v-else>
        <div>Today {{ detailMerchant.openingHours }}</div>
      </template>
    </div>
  </div>

  <!-- promo -->
  <DetailMerchantPromo
    :promotions="detailMerchant.promotions"
  ></DetailMerchantPromo>

  <!-- order fee -->
  <div class="text-gray-700">
    <div
      class="flex flex-row-reverse justify-end items-center bg-gray-100 rounded p-2 text-sx gap-2 md:justify-start md:flex-row md:text-base md:p-0 md:bg-white"
    >
      <img
        src="@/assets/images/icons/icon-info.svg"
        alt="Promo Tag"
        class="h-4 md:h-6"
      />
      <p>{{ detailMerchant.orderFee }}</p>
    </div>
  </div>

  <!-- delivery -->
  <div v-if="detailMerchant.isOpen" class="relative flex gap-4">
    <div class="w-full md:w-1/3 relative top-0 mt-2 mb-8">
      <Listbox v-model="selectedDeliveryDate">
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded border border-gray-200 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary focus-visible:ring-offset-2 focus-visible:border-primary hover:border-primary transition-colors sm:text-sm"
          >
            <div class="flex items-center gap-2">
              <img src="@/assets/images/icons/icon-calendar.svg" alt="" />
              <span class="block truncate">{{
                selectedDeliveryDate.name
              }}</span>
            </div>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="DeliveryDate in deliveryDate"
                :key="DeliveryDate.name"
                :value="DeliveryDate"
                as="template"
              >
                <li
                  :class="[
                    active ? 'text-primary/90 bg-primary/10' : 'text-gray-900',
                    'cursor-default select-none relative py-2 px-4',
                    selected ? 'bg-gray-100' : '',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-bold' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ DeliveryDate.name }}</span
                  >
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
    <div class="w-full md:w-1/3 relative top-0 mt-2 mb-8">
      <Listbox v-model="selectedDeliveryTime">
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full py-3 pl-3 pr-10 text-left bg-white rounded border border-gray-200 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-primary focus-visible:ring-offset-2 focus-visible:border-primary hover:border-primary transition-colors sm:text-sm"
          >
            <div class="flex items-center gap-2">
              <img src="@/assets/images/icons/icon-calendar.svg" alt="" />
              <span class="block truncate">{{
                selectedDeliveryTime.name
              }}</span>
            </div>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute z-20 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-slot="{ active, selected }"
                v-for="DeliveryTime in deliveryTime"
                :key="DeliveryTime.name"
                :value="DeliveryTime"
                as="template"
              >
                <li
                  :class="[
                    active ? 'text-primary/90 bg-primary/10' : 'text-gray-900',
                    'cursor-default select-none relative py-2 px-4',
                    selected ? 'bg-gray-100' : '',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-bold' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ DeliveryTime.name }}</span
                  >
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
  </div>
</template>
