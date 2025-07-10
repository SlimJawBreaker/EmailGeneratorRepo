
export async function generateText(prompt) {
  try {
    const response = await fetch("https://sturdy-parakeet-r4gv6j446j45f59rx-3001.app.github.dev/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    return `Error: ${error.message}`;
  }
}