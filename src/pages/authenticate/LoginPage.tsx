import { Button, Input } from "components/common"
import { Link } from "react-router-dom"

export const LoginPage: React.FC<{}> = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-[500px] w-[400px]">
        <Input
          label="Username"
          placeholder="Please input your username"
        />
        <Input
          label="Password"
          placeholder="Please input your password"
          type="password"
        />
        <Input
          label="Confirm Password"
          placeholder="Please input your password again"
          type="password"
        />
        <div className="flex justify-between">
          <Button label="Login" />
          <Link
            to={"/register"}
            className="text-blue-500"
          >
            Register if you don't have an account
          </Link>
        </div>
      </div>
    </div>
  )
}
