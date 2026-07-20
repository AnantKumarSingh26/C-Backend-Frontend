import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:3000/api/auth',
    withCredentials: true
})


export async function register(username, email, password) {
    try {
        const response = await api.post("/register", {
            username, email, password,
        } )
        return response.data
    } catch (err) {
        console.log(err)
        throw err
    }
}

export async function login(username, password) {
    try {
        const response = api.post("/login", {
            username, password
        }        )
        // .then(res => {
        //   console.log(res.data)
        //   alert('Logged In Successfully')
        // })
        return response.data
    } catch (err) {
        console.log(err)
        throw err
    }
}