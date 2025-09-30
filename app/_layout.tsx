import { Stack } from "expo-router";
import { ThemeProvider, useThemeContext } from "../src/contexts/ThemeContext";
import { DarkTheme, DefaultTheme, ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import { useMemo } from "react";

function RootStack() {
  const { theme } = useThemeContext();
  const navTheme = useMemo(() => (theme === "light" ? DefaultTheme : DarkTheme), [theme]);

  return (
    <NavThemeProvider value={navTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme === "light" ? "#FFFFFF" : "#121826" },
          headerTintColor: theme === "light" ? "#0F172A" : "#E2E8F0",
          contentStyle: { backgroundColor: theme === "light" ? "#F8FAFC" : "#0B1220" },
        }}
      />
    </NavThemeProvider>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <RootStack />
    </ThemeProvider>
  );
}
