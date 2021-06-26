import ICategory from "../interfaces/Category";

type deleteCategory = (id: string) => Promise<ICategory>

export default deleteCategory