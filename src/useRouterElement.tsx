import { useRoutes } from "react-router-dom"
//pages
import HomePages from "./pages/home"
import HomeDetailPage from "./pages/home-detail"
//layouts
import MainLayoutPages from "./layouts/MainLayout"

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
  ])
  return { routerElement: element }
}
