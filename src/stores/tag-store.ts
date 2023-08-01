import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

import { type Tag } from '@/api-mock/data'
import { getProducts } from '@/api-mock/products'

export const useTagStore = defineStore('tag', () => {
  const tags: Ref<Array<Tag>> = ref([])
  const savedTags: Ref<Array<Tag>> = ref([])
  const searchQuery = ref('')

  const filteredTags = () => {
    const query = searchQuery.value.toLowerCase()
    return tags.value.filter(
      (tag) =>
        tag.name.toLowerCase().includes(query) ||
        tag.aliases.filter((alias) => alias.toLowerCase().includes(query)).length > 0
    )
  }

  const fetchProducts = async () => {
    const products = await getProducts()
    let tempTags: Array<Tag> = []
    for (const product of products) {
      for (const category of product.categories) {
        for (const subcategory of category.subcategories) {
          tempTags = [...tempTags, ...subcategory.tags]
        }
      }
    }

    tags.value = [...tempTags]
  }

  return { tags, savedTags, searchQuery, filteredTags, fetchProducts }
})
