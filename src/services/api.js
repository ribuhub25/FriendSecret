export async function api ({user, token}) {
    const response = await fetch("http://localhost:3500/saveuser", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = response.json()
    return data
}

