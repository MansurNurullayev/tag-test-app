<template>
  <div class="tag-input">
    <BaseInput
      v-model="query"
      label="Название тега"
      placeholder="Введите название тега"
    ></BaseInput>
  </div>
</template>

<script setup lang="ts">
import BaseInput from '@/components/UI/BaseInput.vue'

import { useTagStore } from '@/stores/tag-store'
import { storeToRefs } from 'pinia'

const store = useTagStore()
const { searchQuery: query } = storeToRefs(store)
</script>

<style scoped lang="scss">
.tag-input {
  padding: 0 40px 20px 40px;
}
</style>
