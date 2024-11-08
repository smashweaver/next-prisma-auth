import { Button } from "@nextui-org/react";
import { signIn } from "@/actions";

export function SignInButton() {
  return (
    <form action={signIn}>
      <Button type="submit">Sign in</Button>
    </form>
  );
}
