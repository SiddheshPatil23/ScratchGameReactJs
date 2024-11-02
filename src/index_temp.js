import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App"; // Import your main App component

const container = document.getElementById("root"); // Select the root element
const root = createRoot(container); // Create a root

root.render(<App />); // Render the App component
