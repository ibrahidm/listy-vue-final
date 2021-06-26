import { InjectionKey } from "vue"
import saveCategory from "../types/SaveCategory"

const SaveCategoryKey: InjectionKey<saveCategory> = Symbol('saveCategory')

export default SaveCategoryKey