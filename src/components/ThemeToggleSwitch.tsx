import { Switch, View, Text, StyleSheet } from "react-native";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggleSwitch() {
  const { theme, toggleTheme, colors } = useThemeContext();

  return (
    <View style={[styles.wrap, { borderColor: colors.border, backgroundColor: colors.surface }]}>
      <Text style={[styles.label, { color: colors.text }]}>Appearance</Text>
      <View style={styles.row}>
        <Text style={{ color: colors.subtext, marginRight: 10 }}>
          {theme === "dark" ? "Dark" : "Light"}
        </Text>
        <Switch value={theme === "dark"} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
});
