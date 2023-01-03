import { createContext } from "vc-state";
import { ref } from "vue";

type Theme = "dark" | "light";

interface ThemeContextProviderProps {
  defaultTheme: Theme;
  lightColor?: string;
  darkColor?: string;
}

const [ThemeContextProvider, useThemeContext] = createContext(
  (props: ThemeContextProviderProps) => {
    const theme = ref<Theme>(props.defaultTheme);
    const toggleTheme = () =>
      (theme.value = theme.value === "dark" ? "light" : "dark");
    return { theme, toggleTheme };
  }
);


export {
  ThemeContextProvider,
  useThemeContext
}