import { RouterProvider } from "react-router"
import { router } from "./App.Routes"
import "./Features/shared/global.scss"
import { AuthProvider } from "./Features/auth/auth.context"


function App() {


  return (
    <AuthProvider>

      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
