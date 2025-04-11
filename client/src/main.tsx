import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { QuestionnaireProvider } from "./contexts/QuestionnaireContext";

createRoot(document.getElementById("root")!).render(
  <QuestionnaireProvider>
    <App />
  </QuestionnaireProvider>
);
