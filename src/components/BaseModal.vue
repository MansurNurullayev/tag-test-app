<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="model" class="base-modal" @click.self="model = false">
        <div class="modal-body" role="dialog" aria-modal="true">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.base-modal {
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  z-index: 9999;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;

    z-index: -1;

    background: var(--dark);
    opacity: 0.4000000059604645;
  }
}

.modal-body {
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  max-width: 100%;
  max-height: 100%;
}
</style>
