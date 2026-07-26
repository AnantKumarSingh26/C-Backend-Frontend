import {createBrowserRouter} from 'react-router'
import Login from './Features/auth/pages/Login'
import Register from './Features/auth/pages/Register'
import Feed from './Features/posts/pages/feed'


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Feed/>
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