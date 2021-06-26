<template>
    <div class="sidebar-item"
        @mouseenter="userDidHover()"
        @mouseleave="userDidStopHovering()"
        :id="`sidebarItem${category.id}`"
    >
        <router-link class="sidebar-link"
            :to="`/${category.id ? category.id : '#'}`"
        >
            {{ category.name }}
        </router-link>
        <transition name="slide">
            <div class="delete-button"
                :id="`deleteItem${category.id}`"
                v-show="showOptions && category.id"
                @click="processDeleteCategory(category.id)"
            >
                Delete
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { ref, inject } from 'vue'
import DeleteCategoryKey from '@/utils/symbols/DeleteCategoryKey'

export default {
    props: {
        category: {
            type: Object,
            required: true
        }
    },

    setup (props: Record<string, unknown>, { emit }: { emit: (event: string, ...args: unknown[]) => void }): Record<string, unknown> {
        const mouseleaveHasBeenCalled = ref(false)
        const showOptions = ref(false)
        const deleteCategory = inject(DeleteCategoryKey)

        const userDidHover = () => {
            mouseleaveHasBeenCalled.value = false
            setTimeout(() => { 
                if (!mouseleaveHasBeenCalled.value) {
                    showOptions.value = true
                }
            }, 1200)
        }

        const userDidStopHovering = () => {
            mouseleaveHasBeenCalled.value = true
            showOptions.value = false
        }

        const processDeleteCategory = async (id: string) => {
            if (deleteCategory) await deleteCategory(id)
            emit('categoryDeleted', id)
        }

        // onMounted(async () => {
        //     const cat = { ...props.category as ICategory }
        //     let itemHeight;
        //     const item = document.getElementById(`sidebarItem${cat.id}`)
        //     if (item) itemHeight = getComputedStyle(item)?.height
        //     const deleteBtn = document.getElementById(`deleteItem${cat.id}`)
        //     if (deleteBtn && itemHeight) deleteBtn.style.height = itemHeight
        // })

        return {
            mouseleaveHasBeenCalled,
            userDidStopHovering,
            userDidHover,
            showOptions,
            deleteCategory,
            processDeleteCategory
        }
    }
}
</script>

<style scoped>
    .sidebar-item {
        font-size: 20px;
        display: flex;
        flex: 0 0 auto;
        justify-content: center;
        align-items: center;
        background: #053742;
        color: white;
        margin-bottom: 5px;
        cursor: pointer;
        text-decoration: none;
    }

    .sidebar-item:hover {
        background: #053742b0;
    }

    .sidebar-link {
        display: flex;
        color: inherit;
        text-decoration: inherit;
        flex: 1 1;
        position: relative;
        padding: 12px;

    }

    .sidebar-link:hover {
        width: 50%;
        transition: width 0.4s;
    }

    .delete-button {
        font-size: 14px;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0px 10px;
        background: red;
    }

    .delete-button:hover {
        background: rgb(250, 106, 106);
    }

    .slide-enter-active {
        transition: all 0.4s;
    }

    .slide-leave-active {
        transition: all 0.4s;
    }

    .slide-enter-from,
    .slide-leave-to,
    .shrink-enter-from,
    .shrink-leave-to {
    transform: translateX(60px);
    }
</style>