import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DeveloperTemplate from "./pages/template/developerTemplate.jsx";
import BusinessTemplate from "./pages/template/businessTemplate.jsx";
import MarketingTemplate from "./pages/template/MarketingTemplate.jsx";
import PhotographyTemplate from "./pages/template/photographyTemplate.jsx";
import LoginSection from "./components/Login/LoginSection.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/feature/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/developer",
    element: <DeveloperTemplate />,
  },
  {
    path: "/business",
    element: <BusinessTemplate />,
  },
  {
    path: "/marketing",
    element: <MarketingTemplate />,
  },
  {
    path: "/photography",
    element: <PhotographyTemplate />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
  {
    path: "/login",
    element: <LoginSection />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
