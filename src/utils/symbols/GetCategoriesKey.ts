import { InjectionKey } from "vue"
import getCategories from "../types/GetCategories"

const getCategoriesKey: InjectionKey<getCategories> = Symbol('getCategories')

export default getCategoriesKey;