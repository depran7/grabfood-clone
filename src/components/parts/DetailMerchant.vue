<script setup lang="ts">
interface Promotion {
  name: string;
  desc: string[];
}
interface DetailMerchant {
  _id: string;
  isPreffered: boolean;
  name: string;
  cuisine: string;
  rating: number;
  distance: string;
  isOpen: boolean;
  openingHours: string;
  promotions: Promotion[];
  orderFee: string;
}
defineProps<{
  detailMerchant: DetailMerchant;
}>();
</script>
<template>
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
  <div class="text-gray-500 flex gap-8 mt-1">
    <div class="flex gap-2">
      <img src="@/assets/images/icons/icon-star.svg" alt="preferred merchant" />
      <span>{{ detailMerchant.rating }}</span>
    </div>
    <span>{{ detailMerchant.distance }}</span>
  </div>
  <div class="text-gray-500 flex gap-8 mt-1 items-center">
    <div class="font-semibold">Opening Hours</div>
    <div class="flex gap-2 items-center">
      <template v-if="!detailMerchant.isOpen">
        <div>Today Closed</div>
        <div class="text-sm py-1 px-2 bg-danger rounded text-white">Closed</div>
      </template>
    </div>
  </div>
  <!-- promo -->
  <div id="promo" class="mt-2 flex items-end text-gray-700">
    <div>
      <div
        v-for="(promo, index) in detailMerchant.promotions"
        :key="index"
        class="flex gap-2"
      >
        <img src="@/assets/images/icons/icon-promo-tag.svg" alt="Promo Tag" />
        <p>{{ promo.name }}</p>
      </div>
    </div>
    <button class="text-curious-blue font-semibold">See details</button>
  </div>
  <div class="text-gray-700">
    <div class="flex gap-2">
      <img
        src="@/assets/images/icons/icon-info.svg"
        alt="Promo Tag"
        class="h-6"
      />
      <p>{{ detailMerchant.orderFee }}</p>
    </div>
  </div>
</template>
