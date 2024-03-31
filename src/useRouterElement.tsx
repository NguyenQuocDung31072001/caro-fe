import { useRoutes } from "react-router-dom"
//pages
import HomePages from "./pages/home"
import HomeDetailPage from "./pages/home-detail"
import { LoginPage } from "pages/authenticate/LoginPage"
import { RegisterPage } from "pages/authenticate/RegisterPage"

//layouts
import MainLayoutPages from "./layouts/MainLayout"
import { AuthenticateLayout } from "layouts/AuthenticateLayout"

export function useRouterElement() {
  let element = useRoutes([
    {
      path: "/",
      element: <MainLayoutPages />,
      children: [
        {
          path: "/home",
          element: <HomePages />,
        },
        {
          path: "home/:id",
          element: <HomeDetailPage />,
        },
      ],
    },
    {
      path: "/",
      element: <AuthenticateLayout />,
      children: [
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
  ])
  return { routerElement: element }
}
