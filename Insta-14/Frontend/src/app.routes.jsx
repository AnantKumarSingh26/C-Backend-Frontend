import {createBrowserRouter} from 'react-router'
import Login from './Features/pages/Login'
import Register from './Features/pages/Register'
import Home from './Features/pages/Home'

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>
    },
    {
        path:"/login",
        element: <Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])