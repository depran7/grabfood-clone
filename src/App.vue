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

breadcrumbs.value.push({ name: detailMerchant.name });
</script>

<template>
  <Header></Header>
  <main>
    <div class="max-w-7xl mx-auto px-8 mt-12">
      <Breadcrumb :items="breadcrumbs"></Breadcrumb>
      <DetailMerchant :detailMerchant="detailMerchant"></DetailMerchant>
    </div>
    <MenuContent :detailMerchant="detailMerchant"></MenuContent>
  </main>
  <NewFooter
    :frequentlySearch="frequentlySearch"
    :popularCuisines="popularCuisines"
  ></NewFooter>
  <FooterDark></FooterDark>
</template>
