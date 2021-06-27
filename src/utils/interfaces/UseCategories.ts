import { Ref } from "vue";
import ICategory from "./Category";


export default interface IUseCategories {
    categories: Ref<ICategory[]>
    currentCategory: Ref<ICategory | null>
    categoryDeleted: (e: number) => void
    categorySelected: (e: number) => void
}