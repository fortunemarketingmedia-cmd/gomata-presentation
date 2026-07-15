import { NextResponse } from "next/server";
import { signJwt } from "@/utils/jwt";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    if (username === "gomatavision2025" && password === "gomatavision@2025") {
      const payload = {
        username,
        exp: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days expiration
      };

      const token = await signJwt(payload);

      // Create cookie
      const response = NextResponse.json({ success: true, message: "Login successful" });
      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: "Invalid username or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
