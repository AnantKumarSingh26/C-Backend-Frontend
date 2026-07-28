import {createBrowserRouter} from 'react-router'
import Login from './Features/auth/pages/Login'
import Register from './Features/auth/pages/Register'
import Feed from './Features/posts/pages/feed'
import CreatePost from './Features/posts/pages/CreatePost'


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
    },
    {
        path:"/create-post",
        element:<CreatePost/>
    }
])