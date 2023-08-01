<template>
  <div class="tag-list">
    <BaseTag
      v-for="item in list"
      :key="item.id"
      :close-button="closeButton"
      @click-action="emit('clickAction', item.id)"
      @close-action="emit('closeAction', item.id)"
    >
      {{ item.name }}
    </BaseTag>
  </div>
</template>

<script setup lang="ts">
import BaseTag from '@/components/UI/BaseTag.vue'

withDefaults(
  defineProps<{
    closeButton?: boolean
    list: Array<{
      id: number
      name: string
    }>
  }>(),
  { closeButton: false }
)

const emit = defineEmits<{
  (e: 'clickAction', value: number): void
  (e: 'closeAction', value: number): void
}>()
</script>

<style scoped lang="scss">
.tag-list {
  padding: 0 40px 24px 40px;

  display: flex;
  flex-wrap: wrap;
  gap: 9px;

  border-bottom: 1px solid var(--gray-1);
}
</style>
