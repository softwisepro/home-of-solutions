



export async function getUser() {
  try {

    const res = await fetch("/api/auth/session");
    const { user, token, message } = await res.json();

    if (res.ok) {
      return {
        user: user,
        token: token,
        message: message,
        error: null,
      };
    } else {
      return {
        user: null,
        token: null,
        message: null,
        error: null,
      };
    }
  } catch (e) {
    const error = e;
    return {
      user: null,
      token: null,
      message: null,
      error: error,
    };
  }
}