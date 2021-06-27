import { ref, Ref } from 'vue'
import IItem from '@/utils/interfaces/Item'
import { addItem, deleteItem, fetchItems, updateItem } from '@/api/items'
import IUseItems from '@/utils/interfaces/UseItems'


const useItems = (): IUseItems => {
    const items: Ref<IItem[]> = ref([])

    const saveItem = async (title: string, cat: number) => {
        if (cat) {
            let newItem: IItem = {
                title,
                ts: new Date().getTime(),
                cat,
                comp: false
            }
            newItem = await addItem(newItem)
            items.value.push(newItem)
        }
    }

    const getItems = async () => {
        items.value = await fetchItems()
    }

    const removeItem = async (id: number) => {
        await deleteItem(id)
        await getItems()
    }

    const toggleComplete = async (id: number) => {
        const itemToUpdate = items.value.filter(item => item.id === id)[0]
        itemToUpdate.comp = !itemToUpdate.comp
        await updateItem(itemToUpdate)
        await getItems()
    }

    const cleanItems = async (id: number) => {
        const itemsToDelete = items.value.filter(item => item.cat === id)
        for (const item in itemsToDelete) {
            await deleteItem(itemsToDelete[item].id as number)
        }
    }

    return {
        removeItem,
        toggleComplete,
        cleanItems,
        saveItem,
        items,
        getItems
    }
}

export default useItems