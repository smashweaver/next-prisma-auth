import { handlers } from "@/lib/auth";
import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";

/* export async function GET(request: NextRequest) {
  console.log("Intercepted GET request", request);
  return handlers.GET(request);
}*/

// we use node runtime, default is edge
export const runtime = "nodejs";

/*export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  if (searchParams.has("error")) {
    const errorData = {
      error: searchParams.get("error"),
      errorDescription: searchParams.get("error_description"),
    };

    console.log("Auth Error Details:", {
      ...errorData,
      decodedDescription: decodeURIComponent(
        errorData.errorDescription || "",
      ).replace(/\+/g, " "),
    });

    // Redirect directly to home with error params
    redirect(
      `/?error=${errorData.error}&description=${errorData.errorDescription}`,
    );
  }

  return handlers.GET(request);
}*/

export const { GET, POST } = handlers;
