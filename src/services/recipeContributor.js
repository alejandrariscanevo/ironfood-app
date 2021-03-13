import {_axios} from './api';

export const signUpContributor = (data) => {
    return _axios.post("/contributors", data)
}

export const createRecipes = (data) => _axios.post("/recipes/", data)


export const editRecipes = (id, data) => _axios.patch(`/recipes/${id}`, data)

export const deleteRecipes = (id, data) => _axios.delete(`/recipes/${id}`, data)

export const readRecipes = (id,data) => _axios.get(`/recipes/${id}`, data)

export const getAllRecipes = () => _axios.get('/recipes')