import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.scss";
import { Provider } from "react-redux";
import store from "./store/index.ts";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
