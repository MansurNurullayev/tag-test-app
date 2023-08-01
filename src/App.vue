<template>
  <div class="container">
    <main class="main-app">
      <div v-if="loading">Загрузка...</div>
      <div v-else-if="error" class="error">
        <div>Ошибка при загрузке</div>
        <BaseButton @click="tryAgain">Попробовать снова</BaseButton>
      </div>
      <BaseButton v-else @click="modal = true">Открыть модальное окно</BaseButton>

      <BaseModal v-model="modal">
        <TagDialog v-model="modal"></TagDialog>
      </BaseModal>
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue'

import BaseModal from '@/components/BaseModal.vue'
import TagDialog from '@/components/TagDialog/MainComponent.vue'

import { useTagStore } from './stores/tag-store'
import { onMounted, ref } from 'vue'

const store = useTagStore()

const modal = ref(false)
const loading = ref(true)
const error = ref(false)

const fetchData = async () => {
  try {
    loading.value = true
    await store.fetchProducts()
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}

const tryAgain = () => {
  error.value = false
  fetchData()
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped lang="scss">
.main-app {
  min-height: 100vh;
  padding: 15px 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.error {
  > div {
    text-align: center;
    font-size: 12px;
    margin-bottom: 12px;
    color: rgb(200, 54, 54);
  }
}
</style>
