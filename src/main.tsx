import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { store } from "./store/store.ts";
import { Provider as StoreProvider } from "react-redux";
import AuthProvider from "./pages/AuthProvider/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </StoreProvider>
  </StrictMode>
);
