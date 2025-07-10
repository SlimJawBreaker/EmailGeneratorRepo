import React, { useState } from "react";
import { generateText } from "./api";

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async () => {
    const result = await generateText(prompt);
    setResponse(result);
  };

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>Text Generator</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter your prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Generate</button>
      <h2>Response:</h2>
      <pre>{response}</pre>
    </div>
  );
}

export default App;

