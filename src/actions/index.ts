"use server";

import * as auth from "@/auth";

export async function signIn() {
  console.log("*** sign in (github) ***");
  return auth.signIn("github");
}

export async function signOut() {
  console.log("*** sign out ***");
  return auth.signOut();
}
