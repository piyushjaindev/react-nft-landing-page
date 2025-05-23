import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ConnectWalletPage from "./pages/ConnectWalletPage.jsx";
import CreateAccountPage from "./pages/CreateAccountPage.jsx";
import MarketplacePage from "./pages/MarketplacePage.jsx";
import RankingsPage from "./pages/RankingsPage.jsx";
import ArtistPage from "./pages/ArtistPage.jsx";
import NftPage from "./pages/NftPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="marketplace" element={<MarketplacePage />} />
      <Route path="rankings" element={<RankingsPage />} />
      <Route path="connect-wallet" element={<ConnectWalletPage />} />
      <Route path="create-account" element={<CreateAccountPage />} />
      <Route path="artist/:id" element={<ArtistPage />} />
      <Route path="nft/:id" element={<NftPage />} />
      <Route path="contact" element={<h1>Contact</h1>} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
