<script setup lang="ts">
import { ref, computed } from "vue";
import TreeNode from "./TreeNode.vue";
import TreeNodeTitle from "./TreeNodeTitle.vue";
import type { INode } from "@/types/treeNode";

const props = defineProps<{
  node: INode;
  nodes: INode[];
  level: number;
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
  <section>
    <div
      @click="toggle"
      :class="[
        'cursor-pointer py-1 px-2 flex justify-between items-center w-full',
        isRoot ? 'bg-gray-400' : isOpen || children.length === 0 ? 'bg-gray-100' : 'bg-gray-300',
      ]"
    >
      <div
        :style="{
          paddingLeft: `${level * 20}px`, // Вычисляем отступы в зависимости от уровня вложенности
        }"
      >
        <TreeNodeTitle
          :title="node.title"
          :has-children="children.length"
          :is-open="isOpen"
        />
      </div>
    </div>
    <div v-if="isOpen">
      <TreeNode
        v-for="child in children"
        :key="child.id"
        :node="child"
        :nodes="nodes"
        :level="level + 1"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  list-style-type: none;
}
</style>
