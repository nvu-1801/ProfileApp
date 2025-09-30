import { View, Text, Image, StyleSheet } from "react-native";
import { useThemeContext } from "../contexts/ThemeContext";

export default function ProfileCard({
  name,
  bio,
  avatar,
}: {
  name: string;
  bio: string;
  avatar: string;
}) {
  const { colors } = useThemeContext();

  return (
    <View style={[styles.card, { backgroundColor: colors.surface, shadowColor: colors.shadow, borderColor: colors.border }]}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={[styles.name, { color: colors.text }]}>{name}</Text>
      <Text style={[styles.bio, { color: colors.subtext }]}>{bio}</Text>

      <View style={styles.row}>
        <View style={[styles.pill, { backgroundColor: colors.inputBg, borderColor: colors.border }]}>
          <Text style={{ color: colors.subtext }}>Posts 12</Text>
        </View>
        <View style={[styles.pill, { backgroundColor: colors.inputBg, borderColor: colors.border }]}>
          <Text style={{ color: colors.subtext }}>Followers 340</Text>
        </View>
        <View style={[styles.pill, { backgroundColor: colors.inputBg, borderColor: colors.border }]}>
          <Text style={{ color: colors.subtext }}>Following 180</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
    elevation: 3,
  },
  avatar: { width: 110, height: 110, borderRadius: 999, marginBottom: 14 },
  name: { fontSize: 22, fontWeight: "700", marginBottom: 6 },
  bio: { fontSize: 14, textAlign: "center" },
  row: { flexDirection: "row", gap: 8, marginTop: 14 },
  pill: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 999, borderWidth: 1 },
});
