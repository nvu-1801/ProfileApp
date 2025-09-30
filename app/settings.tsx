import { View, StyleSheet, Text } from "react-native";
import ThemeToggleSwitch from "../src/components/ThemeToggleSwitch";
import { useThemeContext } from "../src/contexts/ThemeContext";

export default function SettingsScreen() {
  const { colors } = useThemeContext();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
      <ThemeToggleSwitch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16 },
  title: { fontSize: 20, fontWeight: "800" },
});
