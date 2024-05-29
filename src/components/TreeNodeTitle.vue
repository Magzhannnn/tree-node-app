<template>
  <div class="flex items-center">
    <span v-if="hasChildren" class="mr-2 text-gray-700">
      <img :src="isOpen ? expandedIcon : collapsedIcon" alt="arrow" class="w-[15px] h-[15px]">
    </span>
    <span v-else class="mr-2 text-gray-700 text-2xl">-</span>
    {{ title }} {{ hasChildren }}
  </div>
</template>

<script setup lang="ts">
import expandedIcon from "@/assets/image/expand-arrow-30.png"
import collapsedIcon from "@/assets/image/arrow-right-30.png"

const props = defineProps<{
  title: string;
  isOpen: boolean;
  hasChildren: boolean;
}>();
</script>

<style scoped></style>
