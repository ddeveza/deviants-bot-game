import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { PAGES } from "./constant/pages";
import Deviants from "./pages/deviants/deviants";
import Incubation from "./pages/incubation/incubation";
import LandingPage from "./pages/landing-page/landing-page";
import Lore from "./pages/landing-page/lore/lore";
import Onboarding from "./pages/landing-page/onboarding/onboarding";

const router = createBrowserRouter([
  {
    path: PAGES.home,
    element: <LandingPage />,
  },
  {
    path: PAGES.deviants,
    element: (
      <div className="flex flex-col min-h-screen">
        <Deviants />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.incubation,
    element: (
      <>
        <Incubation />
        <Navbar />
      </>
    ),
  },
  {
    path: PAGES.onboard,
    element: <Onboarding />,
  },
  {
    path: PAGES.lore,
    element: <Lore />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
