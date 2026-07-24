import { RouterProvider } from "react-router"
import { router } from "./App.Routes"
import "./Features/shared/global.scss"


function App() {
  

  return (
   <RouterProvider router={ router }/>
  )
}

export default App
