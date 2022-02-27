<script setup lang="ts">
import Header from "@/components/parts/Header.vue";
import Breadcrumb from "@/components/elements/Breadcrumb.vue";

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
  {
    name: "Do Yan Seafood - Sumbersekar",
  },
]);
</script>

<template>
  <Header></Header>
  <main>
    <div class="max-w-7xl mx-auto px-8 mt-12">
      <Breadcrumb :items="breadcrumbs"></Breadcrumb>
    </div>
  </main>
</template>
