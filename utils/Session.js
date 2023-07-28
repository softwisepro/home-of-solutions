import axios from "axios";
export async function getUser() {
  try {
    const { data } = await axios.get("/api/auth/session");

    return {
      user: data,
      error: null,
    };
  } catch (e) {
    const error = e;

    return {
      user: null,
      error,
    };
  }
}