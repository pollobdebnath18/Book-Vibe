import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/HomePage/HomePage";
import BookPage from "../Pages/BookPage/BookPage";
import ErrorPage from "../Pages/ErrorPage";
import BookDetails from "../Pages/BookPage/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/books",
        element: <BookPage></BookPage>,
      },
      {
        path: "/bookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
