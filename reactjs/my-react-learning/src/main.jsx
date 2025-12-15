import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/theme-context.jsx";
import NameContextProvider from "./context/name-context.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <NameContextProvider>
      <App />
    </NameContextProvider>
  </ThemeProvider>
);
