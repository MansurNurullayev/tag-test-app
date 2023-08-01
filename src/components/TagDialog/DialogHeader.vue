<template>
  <div class="dialog-header">
    <h2 class="title">Добавление тегов</h2>
    <div class="subtitle">
      Вы можете добавить ещё <span class="subtitle-number">{{ 20 - tagsLength }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tagsLength: number
}>()
</script>

<style scoped lang="scss">
.dialog-header {
  padding: 40px 40px 20px 40px;
  border-bottom: 1px solid var(--gray-1);
}

.title {
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  color: var(--dark);

  margin-bottom: 12px;
}

.subtitle {
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;

  color: var(--gray-4);
}

.subtitle-number {
  font-weight: 600;
  color: var(--gray-5);
}
</style>
