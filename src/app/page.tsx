import { SignInButton } from "@/components/sign-in.button";
import { SignOutButton } from "@/components/sign-out.button";

export default function Home() {
  return (
    <div className="flex justify-end gap-1 p-1">
      <SignInButton />
      <SignOutButton />
    </div>
  );
}
