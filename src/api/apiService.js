import axios from "axios"

export default class apiService{
    static async getAll() {
        const response = await  axios.get("https://646f6d5e09ff19b120873d83.mockapi.io/uslugi")
        return response.data
    }

    static async getAllOut() {
        const response = await  axios.get("https://646f6d5e09ff19b120873d83.mockapi.io/outside")
        return response.data
    }

    static async getById(id) {
        const response = await  axios.get("https://646f6d5e09ff19b120873d83.mockapi.io/uslugi/" + id)
        return response;
    }
}