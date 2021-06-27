<template>
    <div class="list-card">
        <div class="list-card-title">
            {{ category ? category.name : 'Select or Create a Category!'}}
        </div>
        <div class="list-card-divider" />
        <div class="list-card-content"
            v-if="category"
        >
            <input class="list-card-add-item"
                ref="listAdd"
                v-model="itemTitle"
                type="text"
                @keydown="$event.keyCode === 13 && itemTitle.length && saveItem()"
            >
            <div class="list-card-divider" />
            <div class="list-card-items-slot"
                v-if="items.length"
            >
                <ListCardItem
                    v-for="item in items"
                    :key="item.id"
                    :item="item"
                    @deleteItem="$emit('deleteItem', $event)"
                    @toggleComplete="$emit('toggleComplete', $event)"
                />
            </div>
            <div class="list-card-default"
                v-else
                @click="$refs.listAdd.focus()"
            >
                Add an Item!
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import ListCardItem from '@/components/ListCardItem.vue'
export default {
    props: {
        category: {
            type: Object || null,
            default: null
        },
        items: {
            type: Array,
            default: (): [] => []
        }
    }, 

    components: {
        ListCardItem
    },

    setup (props: Record<string, unknown>, { emit }: { emit: (event: string, ...args: unknown[]) => void }): Record<string, unknown> {
        const itemTitle = ref('')

        const saveItem = () => {
            emit('saveItem', itemTitle.value)
            itemTitle.value = ''
        }

        return {
            itemTitle,
            saveItem
        }
    }

}
</script>

<style scoped>

    .list-card {
        display: flex;
        flex-direction: column;
        border: 1px solid #dfe1e5;
        border-radius: 24px;
        width: 400px;
        height: 500px;
        padding: 10px;
        align-items: center;
        background-color: #e8f0f2;
    }

    .list-card-title {
        font-size: 22px;
        text-align: center;
        margin-bottom: 5px;
    }

    .list-card-divider {
        width: 100%;
        border-top: 1px solid #dfe1e5;
        padding-bottom: 15px;
    }

    .list-card-content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
    }

    .list-card-add-item {
        margin-bottom: 15px;
        padding: 0 10px;
        width: 91%;
        border: 1px solid #dfe1e5;
        border-radius: 24px;
        font-size: 18px;
        line-height: 1.7;
    }

    .list-card-add-item:focus {
        box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
        border-color: rgba(223, 225, 229, 0);
    }

    .list-card-items-slot {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        max-height: 375px;
        overflow: auto;
    }

    .list-card-default {
        cursor: pointer;
        padding: 5px;
        width: 100px;
        text-align: center;
    }

    .list-card-default:hover {
        background: white;
        opacity: 50%;
    }
    
</style>