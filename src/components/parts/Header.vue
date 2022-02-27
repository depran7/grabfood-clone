<script setup>
import Logo from "@/components/icons/IconLogo.vue";
import GfButton from "@/components/elements/GfButton.vue";
</script>

<template>
  <header class="sticky w-full z-20 top-0 bg-white">
    <div class="max-w-7xl h-20 mx-auto px-8 flex justify-between items-center">
      <Logo class="fill-primary logo"></Logo>
      <div class="hidden lg:flex flex-1">
        <div class="w-1/2">
          <GfButton
            class="w-5/6 mx-auto rounded-lg !border-1 !border-gray-200 gap-2"
          >
            <img
              src="@/assets/images/icons/icon-cart-default-black.svg"
              alt=""
              class="h-4"
            />
            <span class="text-gray-400/70">Type your location</span>
          </GfButton>
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
        <GfButton
          class="w-full mx-auto rounded-lg !border-1 !border-gray-200 gap-2"
        >
          <img
            src="@/assets/images/icons/icon-cart-default-black.svg"
            alt=""
            class="h-4"
          />
          <span class="text-gray-400/70">Type your location</span>
        </GfButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.logo {
  height: 50px;
}
</style>
