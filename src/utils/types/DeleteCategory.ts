import ICategory from "../interfaces/Category";

type deleteCategory = (id: number) => Promise<ICategory>

export default deleteCategory