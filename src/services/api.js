export async function api ({user, token}) {
    const response = await fetch("https://friendsecretback.onrender.com/saveuser", {
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

