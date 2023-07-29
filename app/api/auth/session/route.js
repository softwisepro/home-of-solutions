import { COOKIE_NAME } from "@/constants";
import { decode, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(COOKIE_NAME);
  if (!token) {
    return NextResponse.json(
      { message: "Not Loged in", },
      { status: 401, },
    );
  }
  const { value } = token;
  const secret = process.env.HOS_SECRET || "";

  try {
    const verification = await verify(value, secret);

    if (verification) {

      const {user_token, email } = await decode(value, secret);

      if (user_token) {

        try {
          const res = await fetch(`http://127.0.0.1:8000/api/isAuthenticated/`, {
            method: "get",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Token ${user_token}`,
            },
          });

          const data = await res.json();

          const response = {
            data: data,
            user: email,
            token: user_token,
          };
          return new Response(JSON.stringify(response), {
            status: 200,
          });

        } catch (error) {
          console.log(error)

          const response = {
            error: "something went wrong",
          };
          return new Response(JSON.stringify(response), {
            status: 401,
          });
        }

      }
    } else {
      return NextResponse.json(
        { message: "Not LogedIn", },
        { status: 401, }
      );
    }

  } catch (error) {
    cookieStore.delete(COOKIE_NAME)
    return NextResponse.json(
      { message: "Token is not Valid", },
      { status: 400, }
    );
  }
}