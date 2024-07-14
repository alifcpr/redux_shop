import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/store.ts";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/index.tsx";
import ThemeProvider from "./theme/ThemeProvider.tsx";
import "/public/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={routes} />
    </ThemeProvider>
  </Provider>
);
