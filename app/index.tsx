import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import Button from "../src/components/Button";
import { useThemeContext } from "../src/contexts/ThemeContext";

export default function HomeScreen() {
  const { colors } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.hero, { backgroundColor: colors.surface, borderColor: colors.border, shadowColor: colors.shadow }]}>
        <Text style={[styles.title, { color: colors.text }]}>Welcome to Profile App</Text>
        <Text style={[styles.subtitle, { color: colors.subtext }]}>
          Manage your profile & theme with a clean multi-screen flow.
        </Text>

        <View style={styles.actions}>
          <Button title="Go to Profile" onPress={() => router.push("/profile")} />
          <Button title="Settings" onPress={() => router.push("/settings")} style={{ marginTop: 10 }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  hero: {
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
  },
  title: { fontSize: 22, fontWeight: "800", marginBottom: 8 },
  subtitle: { fontSize: 14, marginBottom: 16 },
  actions: { marginTop: 4 },
});
