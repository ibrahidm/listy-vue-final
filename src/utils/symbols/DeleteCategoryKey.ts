import { InjectionKey } from "vue";
import deleteCategory from "../types/DeleteCategory";

const DeleteCategoryKey: InjectionKey<deleteCategory> = Symbol('deleteCategory')

export default DeleteCategoryKey