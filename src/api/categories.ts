import ICategory from "@/utils/interfaces/Category";

export const addCategory = async (category: ICategory): Promise<ICategory> => {
    const res = await fetch('http://localhost:5000/categories', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(category)
    })

    const data = await res.json();
    return data;
}

export const fetchCategories = async (): Promise<ICategory[]> => {
    const res = await fetch('http://localhost:5000/categories');
    const data = await res.json();
    return data;
}

export const deleteCategory = async (id: number): Promise<ICategory> => {
    const res = await fetch(`http://localhost:5000/categories/${id}`, {
        method: 'DELETE'
    })
    const data = await res.json();
    return data;
}