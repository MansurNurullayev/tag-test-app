<template>
  <div class="tag-dialog">
    <DialogHeader :tags-length="chosenTags.length"></DialogHeader>
    <div class="dialog-body">
      <TagInput></TagInput>
      <TagList :list="tags" @click-action="addTag"></TagList>
      <TagList
        v-if="chosenTags.length"
        :list="chosenTagsMaped"
        close-button
        class="added-tags"
        @close-action="removeTag"
      ></TagList>
    </div>
    <div class="dialog-footer">
      <BaseButton @click="save"> Сохранить </BaseButton>
      <BaseButton variant="secondary" @click="closeModal">Отмена</BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/UI/BaseButton.vue'

import DialogHeader from './DialogHeader.vue'
import TagInput from './TagInput.vue'
import TagList from './TagList.vue'

import { useTagStore } from '@/stores/tag-store'

import { computed, onMounted, reactive } from 'vue'
import { storeToRefs } from 'pinia'
import type { Tag } from '@/api-mock/data'

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
const closeModal = () => {
  model.value = false
}

const store = useTagStore()
const { savedTags } = storeToRefs(store)
const tags = computed(() =>
  store
    .filteredTags()
    .filter((el) => !chosenTags.map((item) => item.id).includes(el.id))
    .slice(0, 5)
    .map((el) => ({ id: el.id, name: el.name }))
)

const chosenTags: Array<Tag> = reactive([])
const chosenTagsMaped = computed(() => chosenTags.map((el) => ({ id: el.id, name: el.name })))

const addTag = (id: number) => {
  if (chosenTags.length >= 20) return

  const tagObj = store.tags.find((el) => el.id === id)
  if (tagObj) chosenTags.push(tagObj)
}

const removeTag = (id: number) => {
  const index = chosenTags.findIndex((el) => el.id === id)
  if (index >= 0) chosenTags.splice(index, 1)
}

const save = () => {
  savedTags.value = chosenTags
  closeModal()
}

onMounted(() => {
  savedTags.value.forEach((item) => {
    chosenTags.push(item)
  })
})
</script>

<style scoped lang="scss">
.tag-dialog {
  background: var(--white);
  border-radius: 10px;

  min-width: 540px;
}

.dialog-body {
  padding-top: 40px;
}

.added-tags {
  padding: 24px 40px;
  border: none;
}

.dialog-footer {
  border-top: 1px solid var(--gray-1);

  padding: 40px 40px 24px 40px;

  > *:not(:first-child) {
    margin-left: 20px;
  }
}
</style>
