import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import './i18n.js';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
