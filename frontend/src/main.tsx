import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter.tsx";
import { ThemeProvider } from "@mui/material";
import { AppTheme } from "./AppTheme.ts";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={AppTheme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
