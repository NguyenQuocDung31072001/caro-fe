import React from "react"
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom"

export default function MainLayoutPages() {
  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (location.pathname !== "/") return
    navigate("/home")
  }, [location])

  return (
    <div>
      <div className="bg-gray-100 w-full p-4">
        <Link to={"home"}>Home</Link>
      </div>
      <Outlet />
    </div>
  )
}
