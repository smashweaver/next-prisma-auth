import { SignInButton } from "@/components/signin-button";
import { SignOutButton } from "@/components/signout-button";

export default function Home() {
  return (
    <div className="flex gap-1 p-1 justify-end">
      <SignInButton />
      <SignOutButton />
    </div>
  );
}
