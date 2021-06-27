<template>
	<AppSidebar 
		:categories="categories"
		@categoryDeleted="finishDeletion($event)"
		@categorySelected="categorySelected($event)"
	/>
	<div class="main">
		<div class="container">
			<ListCard 
				:category="currentCategory"
				:items="items"
				@saveItem="saveItem($event, currentCategory.id)"
				@deleteItem="removeItem($event)"
				@toggleComplete="toggleComplete($event)"
			/>
		</div>
	</div>
	<AppFooter />
</template>

<script lang="ts">
import AppSidebar from '@/components/app/Sidebar.vue'
import ListCard from '@/components/ListCard.vue'
import AppFooter from '@/components/app/Footer.vue'

import useCategories from '@/composables/useCategories'
import useItems from '@/composables/useItems'

import { watch, computed } from 'vue'

export default {
	components: {
		AppSidebar,
		ListCard,
		AppFooter
	},

	setup (): Record<string, unknown> {

		const { 
			categories, 
			currentCategory, 
			categoryDeleted, 
			categorySelected 
		} = useCategories()

		const {
			removeItem,
			toggleComplete,
			cleanItems,
			saveItem,
			items,
			getItems
		} = useItems()

		const finishDeletion = (id: number) => {
			categoryDeleted(id)
			cleanItems(id)
		}

		const filteredItems = computed(() => {
			if (currentCategory.value) {
				return items.value.filter(item => item.cat === currentCategory.value?.id)
			} else {
				return []
			}
		})

		watch(currentCategory, getItems)

		return {
			categories,
			categoryDeleted,
			categorySelected,
			currentCategory,
			saveItem,
			items: filteredItems,
			finishDeletion,
			removeItem,
			toggleComplete
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
		display: flex;
		margin-left: 270px;
		flex-direction: column
	}

	.container {
		display: flex;
		height: 100vh;
		width: 100%;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
</style>
