import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import { RouterProvider } from "react-router/dom";
import { router } from "./routes/Routes.jsx";
import BookProvider from "./context/BookProvider.jsx";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </BookProvider>
  </StrictMode>,
);
