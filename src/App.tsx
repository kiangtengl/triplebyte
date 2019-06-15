import theme from "@/infrastructure/theme";
import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { hot } from "react-hot-loader";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import "./app.css";
import { configureStore, history } from "./infrastructure";
import AppRoutes from "./pages/AppRoutes";

const store = configureStore(history);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRoutes />
        </ConnectedRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default hot(module)(App);
