import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Deviants from "./pages/deviants/deviants"
import Incubation from "./pages/incubation/incubation"
import LandingPage from "./pages/landing-page/landing-page"


const router = createBrowserRouter([
  {
    path:'/',
    element:<LandingPage/>
  },
  {
    path:'deviants',
    element:<Deviants/>

  },
  {
    path:'incubation',
    element:<Incubation/>
  }
])


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
