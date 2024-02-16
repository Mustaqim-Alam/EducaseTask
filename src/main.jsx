import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import LandingScreen from './Components/LandingPage/LandingScreen';
import Login from "./Components/LoginPage/Login.jsx";
import SignupPage from './Components/SignupPage/SignupPage.jsx'
import ProfilePage from './Components/ProfilePage/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<LandingScreen />} />
      <Route path="Login" element={<Login />} />
      <Route path="SignupPage" element={<SignupPage />}/>
      <Route path="ProfilePage" element={<ProfilePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
