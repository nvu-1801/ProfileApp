import { Text, TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { useThemeContext } from "../contexts/ThemeContext";

export default function Button({
  title,
  onPress,
  style,
}: {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}) {
  const { colors } = useThemeContext();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: colors.primary, shadowColor: colors.shadow }, style]}
      activeOpacity={0.85}
    >
      <Text style={[styles.text, { color: colors.primaryText }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 0.3,
  },
});
