import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: authReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
