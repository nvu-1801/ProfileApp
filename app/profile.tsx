import { View, StyleSheet, Text } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import ProfileCard from "../src/components/ProfileCard";
import Button from "../src/components/Button";
import { useThemeContext } from "../src/contexts/ThemeContext";

export default function ProfileScreen() {
  const { colors } = useThemeContext();
  const { name: pName, bio: pBio } = useLocalSearchParams<{
    name?: string;
    bio?: string;
  }>();
  const [name, setName] = useState("Nguyen Vu");
  const [bio, setBio] = useState(" QE180156. Software developer learning React Native.");
  const [avatar] = useState(
    "https://phanmemmkt.vn/wp-content/uploads/2024/09/avt-Facebook-hai-huoc-2.jpg"
  );

  useEffect(() => {
    if (typeof pName === "string" && pName) setName(pName);
    if (typeof pBio === "string" && pBio) setBio(pBio);
  }, [pName, pBio]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>My Profile</Text>

      <ProfileCard name={name} bio={bio} avatar={avatar} />

      <View style={styles.btnRow}>
        <Button
          title="Edit Profile"
          onPress={() =>
            router.push({ pathname: "/edit-profile", params: { name, bio } })
          }
        />
        <Button
          title="Settings"
          onPress={() => router.push("/settings")}
          style={{ marginTop: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 16 },
  header: { fontSize: 20, fontWeight: "800" },
  btnRow: { marginTop: 8 },
});
