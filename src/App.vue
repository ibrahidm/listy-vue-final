<template>
	<Sidebar 
		:categories="categories"
		@categoryDeleted="categoryDeleted($event)"
	/>
	<div class="main">
		<router-view/>
	</div>	
</template>

<script lang="ts">
import SaveCategoryKey from '@/utils/symbols/SaveCategoryKey'
import GetCategoriesKey from '@/utils/symbols/GetCategoriesKey'
import DeleteCategoryKey from '@/utils/symbols/DeleteCategoryKey'
import Sidebar from '@/components/app/Sidebar.vue'
import { addCategory, fetchCategories, deleteCategory } from '@/api/categories'
import ICategory from '@/utils/interfaces/Category'
import { ref, provide, Ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// import { defineAsyncComponent } from '@vue/runtime-core'
export default {
	components: {
		Sidebar
		// Sidebar: defineAsyncComponent(() => import('@/components/app/Sidebar.vue'))
	},

	setup (): Record<string, unknown> {
		const route = useRoute()
        const router = useRouter()
		// Array<ICategory>
		let categories: Ref<ICategory[]> = ref<ICategory[]>([])

		const saveCategory = async (category: ICategory) => {
			const newCategory = { ...category }
			newCategory.ts = new Date().getTime()
			return await addCategory(category)
		}

		const getCategories = async () => {
			categories.value = await fetchCategories() as ICategory[]
			if (!categories.value.length) categories.value = [{ name: 'Add a Category!'}]
		}

		const removeCategory = async (id: string) => {
			return await deleteCategory(id)
		}

		const categoryDeleted = (e: string) => {
			categories.value = categories.value.filter(cat => cat?.id !== e)
			console.log(typeof route.params.id)
			console.log(typeof e)
			if (route.params.id === `${e}`) router.push({ name: 'Default'})
			// console.log(filtered)
		}

		onMounted(() => {
			getCategories()
		})

		provide(SaveCategoryKey, saveCategory)
		provide(GetCategoriesKey, getCategories)
		provide(DeleteCategoryKey, removeCategory)

		return {
			categories,
			categoryDeleted
		}
	}
}
</script>

<style>

	html body {
		height: 100vh;
		margin: 0;
		font-family: arial, sans-serif;
	}

	#app {
		height: 100%
	}

	input:focus {
		outline: none;
	}

	.main {
		margin-left: 270px;
	}
</style>
