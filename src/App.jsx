import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { PAGES } from "./constant/pages";

//PAGES
import Wallet from "./pages/wallet/wallet";
import Deviants from "./pages/deviants/deviants";
import Lore from "./pages/landing-page/lore/lore";
import Incubation from "./pages/incubation/incubation";
import IncubationLanding from "./pages/incubation/incubation-landing";
import LandingPage from "./pages/landing-page/landing-page";

import Onboarding from "./pages/landing-page/onboarding/onboarding";
import Tasks from "./pages/tasks/tasks";

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
      <div className="flex flex-col min-h-screen">
        <Incubation />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.tasks,
    element: (
      <div className="flex flex-col min-h-screen">
        <Tasks />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.incubationLanding,
    element: <IncubationLanding />,
  },
  {
    path: PAGES.onboard,
    element: <Onboarding />,
  },
  {
    path: PAGES.lore,
    element: <Lore />,
  },
  {
    path: PAGES.wallet,
    element: (
      <div className="flex flex-col min-h-screen">
        <Wallet />
        <Navbar />
      </div>
    ),
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
