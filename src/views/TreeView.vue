<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import TreeNode from "@/components/TreeNode.vue";
import type { INode } from "@/types/treeNode";

const nodes = ref<INode[]>([]);
const rootNodes = ref<INode[]>([]);

const fetchData = async () => {
  const response = await axios.get(
    "https://64b4c8450efb99d862694609.mockapi.io/tree/items"
  );
  nodes.value = response.data;
  rootNodes.value = nodes.value.filter((node) => !node.parent_id);
};

const reloadData = () => {
  fetchData();
};

onMounted(fetchData);
</script>

<template>
  <div class="p-4">
    <button
      @click="reloadData"
      class="mb-4 bg-blue-500 text-white py-2 px-4 rounded"
    >
      Reload
    </button>
    <ul>
      <TreeNode
        v-for="node in rootNodes"
        :key="node.id"
        :node="node"
        :nodes="nodes"
      />
    </ul>
  </div>
</template>
