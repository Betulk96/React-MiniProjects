const API_URL = "https://65fd79a09fc4425c65320924.mockapi.io/mytodo";

export const getToDo = async () => {
    const res = await fetch(`${API_URL}/todo`);
    if (!res.ok) throw new Error("Something went error");
    const data = await res.json();
    return data;
}

export const getToDoById = async (id) => {
    const res = await fetch(`${API_URL}/todo/${id}`);
    if (!res.ok) throw new Error("Something went error");
    const data = await res.json();
    return data;
}

export const createToDo = async (newToDo) => {
    const res = await fetch(`${API_URL}/todo`, {
        method: "POST",
        body: JSON.stringify(newToDo),
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) throw new Error("Something went error");
    const data = await res.json();
    return data;
}

export const updateToDo = async (id, updatedToDo) => {
    const res = await fetch(`${API_URL}/todo/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedToDo),
        headers: {
            "Content-Type": "application/json"
        }
    });
    if (!res.ok) throw new Error("Something went error");
    const data = await res.json();
    return data;
}

export const deleteToDo = async (id) => {
    const res = await fetch(`${API_URL}/todo/${id}`, {
        method: "DELETE",
    });
    if (!res.ok) throw new Error("Something went error");
    const data = await res.json();
    return data;
}