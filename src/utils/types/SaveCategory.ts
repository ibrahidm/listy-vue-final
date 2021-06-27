import ICategory from "../interfaces/Category"

type saveCategory = (category: ICategory) => Promise<void>

export default saveCategory