<script setup>
import Logo from "@/components/icons/IconLogo.vue";
import GfButton from "@/components/elements/GfButton.vue";
import SearchLocation from "@/components/elements/SearchLocation.vue";
</script>

<template>
  <header class="relative lg:sticky w-full z-20 top-0 bg-white">
    <div class="max-w-7xl h-20 mx-auto px-8 flex justify-between items-center">
      <Logo class="fill-primary logo"></Logo>
      <div class="hidden lg:flex flex-1">
        <div class="w-1/2">
          <SearchLocation class="w-5/6"></SearchLocation>
        </div>
      </div>
      <div class="flex gap-2">
        <GfButton>
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
    <div
      class="max-w-7xl h-20 mx-auto px-8 flex justify-between items-center lg:hidden"
    >
      <div class="w-full">
        <SearchLocation></SearchLocation>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo {
  height: 50px;
}
</style>
