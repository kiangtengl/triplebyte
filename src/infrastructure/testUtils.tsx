import theme from "@/infrastructure/theme";
import { render, RenderOptions } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React, { Reducer } from "react";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createStore } from "redux";
import { ThemeProvider } from "styled-components";
import { Omit } from "utility-types";

interface CustomOptions extends Omit<RenderOptions, "queries"> {
  reducer?: Reducer<any, any>;
  defaultState?: any;
  route?: string;
}

const defaultOptions = {
  reducer: (state: any, _action: any) => state,
  defaultState: {},
  route: "/"
};

const customRender = (
  ui: React.ReactElement,
  options: CustomOptions = defaultOptions
) => {
  const store = createStore(
    options.reducer! || defaultOptions.reducer,
    options.defaultState || defaultOptions.defaultState
  );

  const history = createMemoryHistory({
    initialEntries: [options.route || defaultOptions.route]
  });

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
