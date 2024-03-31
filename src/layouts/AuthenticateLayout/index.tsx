import { Outlet } from "react-router-dom"

export const AuthenticateLayout: React.FC<{}> =
  () => {
    return (
      <div>
        <div className="w-full h-[50px] bg-blue-300 flex items-center justify-center">
          Login to view game
        </div>
        <Outlet />
      </div>
    )
  }
