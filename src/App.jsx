import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { PAGES } from "./constant/pages";
import './App.css'

//PAGES
import Deviants from "./pages/deviants/deviants";
import Incubation from "./pages/incubation/incubation";
import IncubationLanding from "./pages/incubation/incubation-landing";
import LandingPage from "./pages/landing-page/landing-page";
import Lore from "./pages/landing-page/lore/lore";
import Onboarding from "./pages/landing-page/onboarding/onboarding";
import PVP from "./pages/pvp/pvp";
import Shop from "./pages/shop/shop";
import Tasks from "./pages/tasks/tasks";
import WalletTon from "./pages/wallet-ton/wallet-ton";
import WalletTwitter from "./pages/wallet-twitter/wallet-twitter";
import Wallet from "./pages/wallet/wallet";

const router = createBrowserRouter([
  {
    path: PAGES.home,
    element: <LandingPage />,
  },
  {
    path: PAGES.deviants,
    element: (
      <div className="relative flex flex-col size-full">
        <Deviants />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.incubation,
    element: (
      <div className="relative flex flex-col size-full">
        <Incubation />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.tasks,
    element: (
      <div className="relative flex flex-col size-full">
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
      <div className="relative flex flex-col size-full">
        <Wallet />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.walletTon,
    element: (
      <div className="relative flex flex-col size-full">
        <WalletTon />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.walletTwitter,
    element: (
      <div className="relative flex flex-col size-full">
        <WalletTwitter />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.pvp,
    element: (
      <div className="relative flex flex-col size-full">
        <PVP />
        <Navbar />
      </div>
    ),
  },
  {
    path: PAGES.shop,
    element: (
      <div className="relative flex flex-col size-full">
        <Shop />
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
