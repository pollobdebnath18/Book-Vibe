import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import BookPage from "../Pages/BookPage/BookPage";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index:true, element: <HomePage></HomePage>
      },
      {
        path:'/books',
        element: <BookPage></BookPage>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);