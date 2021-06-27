import IItem from "@/utils/interfaces/Item";

export const addItem = async (item: IItem): Promise<IItem> => {
    const res = await fetch('http://localhost:5000/items', {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(item)
    })

    const data = await res.json();
    return data;
}

export const fetchItems = async (): Promise<IItem[]> => {
    const res = await fetch('http://localhost:5000/items')
    const data = await res.json();
    return data;
}

export const deleteItem = async (id: number): Promise<IItem> => {
    const res = await fetch(`http://localhost:5000/items/${id}`, {
        method: 'DELETE'
    })
    const data = await res.json();
    return data;
}

export const updateItem = async (item: IItem): Promise<IItem> => {
    const res = await fetch(`http://localhost:5000/items/${item.id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(item)
    })

    const data = await res.json()
    return data
}