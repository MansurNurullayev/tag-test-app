<template>
  <button class="base-button" :class="[`variant-${variant}`]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
export interface ButtonProps {
  variant?: 'primary' | 'secondary'
}

withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary'
})
</script>

<style scoped lang="scss">
.base-button {
  padding: 12px 16px;

  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  border-radius: 8px;
  border: none;
  outline: none;

  cursor: pointer;

  transition: 0.25s;
}

.variant-primary {
  background: var(--primary);
  color: var(--white);

  &:hover {
    background: var(--primary-active);
  }
}

.variant-secondary {
  background: var(--gray-2);
  color: var(--dark);
}
</style>
