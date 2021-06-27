<template>
  <div class="sidebar">
    <div class="sidebar-title">
      Listy
    </div>
    <div class="sidebar-divider" />
    <div class="sidebar-content-slot">
      <SidebarItem
        v-show="!categories.length"
        :category="{ name: 'Add a Category!'}"
        @click="$refs.add.focus()"
      />
      <SidebarItem
        v-for="(category, i) in categories"
        :key="i"
        :category="category"
        @categoryDeleted="$emit('categoryDeleted', $event)"
        @categorySelected="$emit('categorySelected', $event)"
      />
    </div>
    <div class="sidebar-action-slot">
      <input class="sidebar-add-field" 
        ref="add"
        v-model="newCategory" 
        type="text" 
        @keypress="$event.keyCode === 13 && saveNewCategory(newCategory)"
      />
      <input
        class="sidebar-add-button"
        type="submit"
        value="Add"
        @click="saveNewCategory(newCategory)"
      />
    </div>
  </div>
</template>

<script lang="ts">

import SidebarItem from '@/components/SidebarItem.vue';
import { ref, inject } from 'vue';
import SaveCategoryKey from '@/utils/symbols/SaveCategoryKey';


export default {
  components: {
    SidebarItem,
  },

  props: {
    categories: {
      type: Array,
      required: true
    },
  },

  setup(): Record<string, unknown> {
    const newCategory = ref('');
    const saveCategory = inject(SaveCategoryKey);

    const saveNewCategory = async (name: string) => {
      if (name.length && saveCategory) await saveCategory({ name });
      newCategory.value = '';
    };

    return {
      saveNewCategory,
      newCategory,
    };
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  position: fixed;
  width: 270px;
  height: 100%;
  border-right: 1px solid #dfe1e5;
  background-color: #e8f0f2;
}

.sidebar-content-slot {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;
  min-height: 120px;
}

.sidebar-title {
  font-size: 28px;
  align-self: center;
  margin: 15px;
  font-weight: 600;
}

.sidebar-divider {
  border-top: 1px solid #dfe1e5;
  padding-bottom: 8px;
}

.sidebar-action-slot {
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-add-field {
  margin-bottom: 8px;
  padding: 0 5px;
  width: 91%;
  border-top: 1px solid #dfe1e5;
  border-bottom: 1px solid #dfe1e5;
  border-left: none;
  border-right: none;
  border-radius: 2px;
  font-size: 20px;
  line-height: 1.7;
}

.sidebar-add-field:focus {
  box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  border-color: rgba(223, 225, 229, 0);
}

.sidebar-add-button {
  box-sizing: border-box;
  width: 100%;
  background-color: #a2dbfa;
  font-size: 20px;
  color: #053742;
  border: none;
  padding: 10px 0;
  cursor: pointer;
}

.sidebar-add-button:hover {
  background-color: #39a2db;
  color: white;
}
</style>
