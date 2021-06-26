<template>
  <div class="container">
    <ListCard />
  </div>
</template>

<script lang="ts">
import ListCard from '@/components/ListCard.vue'
export default {
	components: {
		ListCard
	},
	setup (): Record<string, unknown> {

		return {

		}
	}
}
</script>

<style scoped>
	.container {
		display: flex;
		height: 100vh;
		width: 100%;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
</style>