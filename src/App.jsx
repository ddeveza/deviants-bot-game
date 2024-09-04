import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Deviants from "./pages/deviants/deviants"
import Incubation from "./pages/incubation/incubation"
import LandingPage from "./pages/landing-page/landing-page"
import Onboarding from "./pages/landing-page/onboarding/onboarding"
import { PAGES } from "./constant/pages"
import Lore from "./pages/landing-page/lore/lore"


const router = createBrowserRouter([
  {
    path:PAGES.home,
    element:<LandingPage/>
  },
  {
    path:PAGES.deviants,
    element:<Deviants/>

  },
  {
    path:PAGES.incubation,
    element:<Incubation/>
  },
  {
    path:PAGES.onboard,
    element:<Onboarding/>
  },
  {
    path:PAGES.lore,
    element:<Lore/>
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
