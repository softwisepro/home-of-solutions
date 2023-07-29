import { COOKIE_NAME } from "@/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";

const MAX_AGE = 60 * 60 * 24 * 30; // days;

export async function POST(request) {
  const body = await request.json()

  const { email, password } = body;

  try {
    const res = await fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      }),
    });
    const data = await res.json();
    
    if (data.error) {

      return NextResponse.json({
        "error": "Something went wrong",
      });

    } else {

      if (data.mismatch) {

        return NextResponse.json({
          "mismatch": "Wrong credentials",
        });

      } else {

        const user_token = data.token;
        const email = data.user.email;

        const secret = process.env.HOS_SECRET || "";
        const token = sign(
          { user_token, email }, secret, { expiresIn: MAX_AGE, }
        );

        if (token) {

          const seralized = serialize(COOKIE_NAME, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: MAX_AGE,
            path: "/",
          });

          const response = {
            success: "LogIn success!",
          };

          return new Response(JSON.stringify(response), {
            status: 200,
            headers: { "Set-Cookie": seralized },
          });

        } else {

          return NextResponse.json({
            "message": "Unable to LogIn"
          });

        }
      }
    }
  } catch (error) {

    console.log(error);
    return NextResponse.json({
      "error": "No server response"
    });


  }
}