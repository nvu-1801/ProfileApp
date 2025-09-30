import { View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import ProfileCard from "../src/components/ProfileCard";
import Button from "../src/components/Button";
import { useThemeContext } from "../src/contexts/ThemeContext";

export default function ProfileScreen() {
  const { colors } = useThemeContext();
  const { name: pName, bio: pBio } = useLocalSearchParams<{ name?: string; bio?: string }>();
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState("Software developer learning React Native.");
  const [avatar] = useState("https://i.pravatar.cc/150?img=5");

  useEffect(() => {
    if (typeof pName === "string" && pName) setName(pName);
    if (typeof pBio === "string" && pBio) setBio(pBio);
  }, [pName, pBio]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>My Profile</Text>

      <ProfileCard name={name} bio={bio} avatar={avatar} />

      <View style={styles.btnRow}>
        <Button title="Edit Profile" onPress={() => router.push({ pathname: "/edit-profile", params: { name, bio } })} />
        <Button title="Settings" onPress={() => router.push("/settings")} style={{ marginTop: 10 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16 },
  header: { fontSize: 20, fontWeight: "800" },
  btnRow: { marginTop: 8 },
});
