import theme from "@/infrastructure/theme";
import { render, RenderOptions } from "@testing-library/react";
import { createMemoryHistory, History } from "history";
import React, { Reducer } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { Omit } from "utility-types";
import createRootState from "./rootState";

interface CustomOptions extends Omit<RenderOptions, "queries"> {
  reducer?: Reducer<any, any>;
  defaultState?: any;
  route?: string;
}

const createDefaultOptions = (history: History) => ({
  reducer: (state: any, _action: any) => state,
  defaultState: createRootState(history)
});

const customRender = (ui: React.ReactElement, options: CustomOptions = {}) => {
  const history = createMemoryHistory({
    initialEntries: [options.route || "/"]
  });

  const defaultOptions = createDefaultOptions(history);

  const store = createStore(
    options.reducer! || defaultOptions.reducer,
    options.defaultState || defaultOptions.defaultState
  );

  const Providers: React.FC = ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router history={history}>{children as any}</Router>
        </Provider>
      </ThemeProvider>
    );
  };

  return render(ui, { wrapper: Providers, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
