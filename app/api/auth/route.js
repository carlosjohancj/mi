export async function POST(req, res) {
  const body = await req.json();
  const { username, password } = body;

  // Perform authentication logic here
  if (username === "user" && password === "pass") {
    return new Response(JSON.stringify({ message: "Authenticated successfully" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response(JSON.stringify({ message: "Invalid credentials" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  runtime: "edge",
};
