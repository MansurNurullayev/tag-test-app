<template>
  <label class="base-input">
    <div class="input-label">
      {{ label }}
    </div>
    <input v-model="model" class="input" :placeholder="placeholder" type="text" />
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  label: string
  placeholder: string
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<style scoped lang="scss">
.base-input {
  display: inline-block;
  position: relative;

  padding: 14px 16px;

  border-radius: 8px;
  border: 2px solid var(--primary);

  transition: 0.25s;

  width: 360px;

  &:has(input:focus) {
    border-color: var(--primary-active);
    > .input-label {
      color: var(--primary-active);
    }
  }
}

.input {
  color: var(--dark);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  outline: none;
  border: none;
  overflow: hidden;

  width: 100%;
}

.input-label {
  color: var(--primary);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;

  position: absolute;

  padding: 0 4px;
  background: var(--white);

  top: -0.75em;

  max-width: calc(100% - 32px - 8px);
  white-space: pre;
  overflow: hidden;
  text-overflow: ellipsis;

  transition: 0.25s;
}
</style>
