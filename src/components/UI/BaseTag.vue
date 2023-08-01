<template>
  <div class="base-tag" @click.self="emit('clickAction')">
    <slot></slot>
    <svg
      v-if="closeButton"
      @click="emit('closeAction')"
      class="close-icon"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 5L15 15M5 15L15 5" stroke="currentColor" stroke-linecap="round" />
    </svg>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ closeButton?: boolean }>(), { closeButton: false })
const emit = defineEmits<{
  (e: 'clickAction'): void
  (e: 'closeAction'): void
}>()
</script>

<style scoped lang="scss">
.base-tag {
  padding: 8px 12px;

  border-radius: 4px;
  background: var(--gray-2);

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  color: var(--gray-5);

  display: inline-flex;
  align-items: center;

  cursor: pointer;
}

.close-icon {
  margin-left: 8px;
}
</style>
