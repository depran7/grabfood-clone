<script setup lang="ts">
import Header from "@/components/parts/Header.vue";
import NewFooter from "@/components/parts/NewFooter.vue";
import FooterDark from "@/components/parts/FooterDark.vue";
import Breadcrumb from "@/components/elements/Breadcrumb.vue";
import DetailMerchant from "@/components/parts/DetailMerchant.vue";
import MenuContent from "@/components/parts/MenuContent.vue";

// data dummy
import detailMerchant from "@/data/detail-merchant.json";
import frequentlySearch from "@/data/frequently-search.json";
import popularCuisines from "@/data/popular-cuisines.json";

import { ref } from "vue";

const breadcrumbs = ref([
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Restaurant",
    url: "/restaurants",
  },
]);
const aboutGrab = ref([
  {
    title: "About Grab",
    slug: "/about",
  },
  {
    title: "About GrabFood",
    slug: "/food",
  },
  {
    title: "Blog",
    slug: "/blog",
  },
]);

const supports = ref([
  {
    title: "Help",
    slug: "/help",
  },
  {
    title: "FAQs",
    slug: "/faqs",
  },
  {
    title: "Be a GrabFood Merchant",
    slug: "/grabfood",
  },
  {
    title: "Drive With Grab",
    slug: "/driver/food",
  },
]);

breadcrumbs.value.push({ name: detailMerchant.name });
</script>

<template>
  <Header></Header>
  <main>
    <img
      :src="detailMerchant.merchantPhoto"
      :alt="detailMerchant.name"
      class="w-full md:hidden"
    />
    <div class="max-w-7xl mx-auto px-3 md:px-8 mt-12">
      <Breadcrumb :items="breadcrumbs"></Breadcrumb>
      <DetailMerchant :detailMerchant="detailMerchant"></DetailMerchant>
    </div>
    <MenuContent :detailMerchant="detailMerchant"></MenuContent>
  </main>
  <NewFooter
    :frequentlySearch="frequentlySearch"
    :popularCuisines="popularCuisines"
    :aboutGrab="aboutGrab"
    :supports="supports"
  ></NewFooter>
  <FooterDark></FooterDark>
</template>
