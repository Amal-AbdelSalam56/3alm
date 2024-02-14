import { Button, Input } from "../../../components/ui";

export default function ResetYourPassword() {
  return (
    <form className="pb-12">
      <div className="grid pb-12 gap-3">
        <p className="text-lg">{"Reset your password"}</p>
        <p className="text-xs max-w-md">
          {"Use at least 8 characters,including both numbers and letters"}
        </p>
      </div>

      <div className="grid gap-4 pb-10">
        <Input
          label="New password"
          inputID="password"
          type="password"
          name="password"
          className="px-2"
        />

        <Input
          label="confirm new password"
          inputID="loginPassword"
          type="password"
          name="password"
          className="px-2"
        />
      </div>

      <Button className="w-full rounded-xl p-2" children="done" />
    </form>
  );
}
