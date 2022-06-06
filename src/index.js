import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { persistGate } from "redux-persist/lib/integration/react";
import configureStore from "./DataManagement/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = configureStore;
const persistor = persistStore(store);

root.render(
  <StrictMode>
    <Provider store={configureStore}>
      <persistGate persistStore={persistor}>
        <App />
      </persistGate>
    </Provider>
  </StrictMode>
);
