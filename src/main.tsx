import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store.ts";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/index.tsx";
import ThemeProvider from "./theme/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
