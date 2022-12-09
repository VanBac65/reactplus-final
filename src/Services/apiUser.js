import { instance } from "./Instance"

export const getListTodo = async (path) => {
    const fetchListTodo = await instance.get(path)
    return fetchListTodo.data
}

export const postUser = async (path, data) => {
    return await instance.post(path, data)
}