import { Ref } from 'vue'
import IItem from '@/utils/interfaces/Item'

export default interface IUseItems {
    removeItem: (id: number) => void
    toggleComplete: (id: number) => void
    cleanItems: (id: number) => void
    saveItem: (title: string, cat: number) => void
    items: Ref<IItem[]>
    getItems: () => void
}
