<template>
    <div class="list-card-item"
        @dblclick="$emit('toggleComplete', item.id)"
    >
        <div class="list-card-item-content">
            <div class="list-card-item-title"
                :style="`${ item.comp && 'text-decoration: line-through;'}`"
            >
                {{ item.title }}
            </div>
            <div class="list-card-item-ts"
                :style="`${ item.comp && 'text-decoration: line-through;'}`"
            >
                {{ new Date(item.ts).toLocaleString() }}
            </div>
        </div>
        <div class="list-card-item-actions">
            <input class="list-card-item-delete-btn"
                type="submit" 
                value="X"
                @click="$emit('deleteItem', item.id)"
            >
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
    .list-card-item {
        display: flex;
        width: 95%;
        border: 1px solid #dfe1e5;
        margin-bottom: 12px;
        padding: 5px;
        border-radius: 5px;
        background-color: #39a2db;
        cursor: pointer;
    }

    .list-card-item:hover {
        box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
        border-color: rgba(223, 225, 229, 0);
    }

    .list-card-item-content {
        display: flex;
        flex-direction: column;
        flex: 1 0 auto;
    }

    .list-card-item-title {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2px;
    }

    .list-card-item-ts {
        font-size: 14px;
        font-style: italic;
        color: white;
    }

    .list-card-item-actions {
        display: flex;
    }

    .list-card-item-delete-btn {
        border: none;
        width: 40px;
        opacity: 45%;
        cursor: pointer;
    }

    .list-card-item-delete-btn:hover {
        opacity: 100%;
    }
    
</style>