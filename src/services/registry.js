import api from "./api";

export async function fetchRegistry() {

    const response = await api.get("/registry");

    return response.data;

}