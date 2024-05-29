<script setup lang="ts">
import { ref, computed } from "vue";
import TreeNode from "./TreeNode.vue";
import TreeNodeTitle from "./TreeNodeTitle.vue";
import type { INode } from "@/types/treeNode";

const props = defineProps<{
  node: INode;
  nodes: INode[];
}>();

const isOpen = ref(false);
const toggle = () => {
  if (children.value.length > 0) {
    isOpen.value = !isOpen.value;
  }
};

const children = computed(() => {
  return props.nodes.filter((n) => n.parent_id === props.node.id);
});

const isRoot = computed(() => {
  return !props.node.parent_id;
});
</script>

<template>
  <li>
    <div
      @click="toggle"
      :class="[
        'cursor-pointer py-1 px-2 flex justify-between items-center w-full',
        isRoot ? 'bg-gray-300' : isOpen ? 'bg-gray-200' : 'bg-gray-100',
      ]"
    >
      <TreeNodeTitle
        :title="node.title"
        :has-children="children.length"
        :is-open="isOpen"
      />
    </div>
    <ul v-if="isOpen" class="pl-5">
      <TreeNode
        v-for="child in children"
        :key="child.id"
        :node="child"
        :nodes="nodes"
      />
  </ul>
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
}
</style>
