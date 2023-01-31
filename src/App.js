import "./App.css";
import Routes from "./routes";
import ScrollToTop from "./components/scroll-to-top";
import { StyledChart } from "./components/chart";
import { Provider } from "react-redux";
import store, { persistor } from "./store/store";
import ThemeCustomization from "./themes";
import ScrollTop from "./components/ScrollTop";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeCustomization>
          <ScrollTop>
            <Routes />
          </ScrollTop>
        </ThemeCustomization>
      </PersistGate>
    </Provider>
  );
}

export default App;
