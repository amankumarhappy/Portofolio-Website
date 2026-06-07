import { createRoot } from "react-dom/client";
import App from "./App";
import "./app/globals.css";
import "./index.css";

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('akh-theme');
    var manual = localStorage.getItem('akh-theme-manual') === 'true';
    var theme;
    if (stored && manual) {
      theme = stored;
    } else {
      var hour = new Date().getHours();
      theme = (hour >= 18 || hour < 6) ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.add('theme-' + theme);
  } catch(e) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('theme-dark');
  }
})();
`;

const script = document.createElement("script");
script.textContent = themeScript;
document.head.insertBefore(script, document.head.firstChild);

createRoot(document.getElementById("root")!).render(<App />);
