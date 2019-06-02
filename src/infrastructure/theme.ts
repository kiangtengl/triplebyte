import baseStyled, {
  css as baseCss,
  ThemedStyledInterface,
  BaseThemedCssFunction
} from "styled-components";

const theme = {
  primary: "red"
};

export type AppTheme = typeof theme;

export const themeProps = {
  theme
};

/**
 * Makes theme property strongly
 */
export const styled = baseStyled as ThemedStyledInterface<AppTheme>;
export const css = baseCss as BaseThemedCssFunction<AppTheme>;

export default theme;
