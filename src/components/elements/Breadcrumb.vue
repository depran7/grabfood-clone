<script setup lang="ts">
interface BreadcrumbItem {
  name: string;
  url?: string;
}
defineProps<{
  items: BreadcrumbItem[];
}>();
</script>

<template>
  <ul class="flex gap-2">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="flex items-center gap-2"
    >
      <template v-if="index < items.length - 1">
        <a
          :href="item.url"
          class="text-curious-blue hover:text-primary transition-colors"
          >{{ item.name }}
        </a>
        <!-- divider -->
        <span v-if="index < items.length - 1"
          ><img src="@/assets/images/icons/icon-next.svg" alt="icon next"
        /></span>
      </template>
      <template v-else>
        <span>{{ item.name }}</span>
      </template>
    </li>
  </ul>
</template>
