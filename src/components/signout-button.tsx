import { Button } from "@nextui-org/react";
import { signOut } from "@/actions";

export function SignOutButton() {
  return (
    <form action={signOut}>
      <Button type="submit">Sign out</Button>
    </form>
  );
}
