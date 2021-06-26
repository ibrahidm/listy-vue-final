import ICategory from "../interfaces/Category"

type saveCategory = (category: ICategory) => Promise<ICategory>

export default saveCategory