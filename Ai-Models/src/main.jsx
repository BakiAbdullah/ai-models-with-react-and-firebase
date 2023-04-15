import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Description from './components/Description/Description';
import AiModels from './components/AiModels/AiModels';
import SignUP from './components/SignUP/SignUP';
import SignUp from './components/SignUP/SignUP';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "description/:id",
        element: <Description></Description>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/ai/tool/${params.id}`
          ),
      },
      {
        path: "aimodels",
        element: <AiModels></AiModels>,
        loader: () =>
          fetch("https://openapi.programming-hero.com/api/ai/tools"),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
