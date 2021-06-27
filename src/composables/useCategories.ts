import { ref, Ref, provide, onMounted } from 'vue'
import ICategory from '@/utils/interfaces/Category'
import { addCategory, fetchCategories, deleteCategory } from '@/api/categories'
import SaveCategoryKey from '@/utils/symbols/SaveCategoryKey'
import DeleteCategoryKey from '@/utils/symbols/DeleteCategoryKey'
import IUseCategories from '@/utils/interfaces/UseCategories'

const useCategories = (): IUseCategories => {
    const categories: Ref<ICategory[]> = ref([])
    const currentCategory: Ref<ICategory | null> = ref(null)

    const saveCategory = async (category: ICategory) => {
        const newCategory = { ...category }
        newCategory.ts = new Date().getTime()
        currentCategory.value = await addCategory(newCategory)
        categories.value.push(currentCategory.value)
    }

    const getCategories = async () => {
        categories.value = await fetchCategories() as ICategory[];
    }

    const removeCategory = async (id: number) => {
        return await deleteCategory(id)
    }

    const categoryDeleted = (e: number) => {
        categories.value = categories.value.filter(cat => cat?.id !== e)
        if (currentCategory.value?.id === e) currentCategory.value = null
        if (!categories.value.length) {
            currentCategory.value = null
        }
    }

    const categorySelected = (e: number) => {
        if (e === undefined) return
        currentCategory.value = categories.value.filter(cat => cat?.id === e)[0]
    }

    onMounted(() => {
        getCategories()
    })

    provide(SaveCategoryKey, saveCategory)
    provide(DeleteCategoryKey, removeCategory)

    return {
        categories,
        currentCategory,
        categoryDeleted,
        categorySelected
    }
}

export default useCategories