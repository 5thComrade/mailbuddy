import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(
  request: object,
  { params }: { params: { kindeAuth: string } }
) {
  const endpoint = params.kindeAuth;
  return handleAuth(request, endpoint);
}
