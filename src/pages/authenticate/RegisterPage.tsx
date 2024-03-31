import { Button, Input } from "components/common"

export const RegisterPage: React.FC<{}> = () => {
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
        <Button label="Register" />
      </div>
    </div>
  )
}
