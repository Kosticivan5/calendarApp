import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import AppContext from "./context/GlobalContext.jsx";
import { store } from "./store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AppContext> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </AppContext> */}
  </React.StrictMode>
);
