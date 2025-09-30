import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { lightColors, darkColors } from "../theme/colors";

type ThemeMode = "light" | "dark";
type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
  colors: typeof lightColors;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const toggleTheme = () => setTheme((p) => (p === "light" ? "dark" : "light"));

  const colors = useMemo(() => (theme === "light" ? lightColors : darkColors), [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useThemeContext must be inside ThemeProvider");
  return ctx;
};
