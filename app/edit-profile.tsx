import { View, TextInput, StyleSheet, Text, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../src/components/Button";
import { useThemeContext } from "../src/contexts/ThemeContext";

const schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().max(160, "Max 160 characters"),
});

export default function EditProfileScreen() {
  const { colors } = useThemeContext();
  const { name = "", bio = "" } = useLocalSearchParams<{ name?: string; bio?: string }>();

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20, gap: 14, flexGrow: 1, backgroundColor: colors.background }}>
        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 20, fontWeight: "800", color: colors.text }}>Edit Profile</Text>
          <Text style={{ color: colors.subtext }}>Update your display name and short bio.</Text>
        </View>

        <Formik
          initialValues={{ name: String(name), bio: String(bio) }}
          validationSchema={schema}
          onSubmit={(values) => {
            router.replace({ pathname: "/profile", params: { name: values.name, bio: values.bio } });
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched, setFieldTouched }) => (
            <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border, shadowColor: colors.shadow }]}>
              <View style={styles.field}>
                <Text style={[styles.label, { color: colors.text }]}>Name</Text>
                <TextInput
                  placeholder="Your name"
                  placeholderTextColor={colors.subtext}
                  style={[
                    styles.input,
                    { backgroundColor: colors.inputBg, borderColor: colors.inputBorder, color: colors.text },
                    touched.name && errors.name ? { borderColor: colors.error } : null,
                  ]}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={() => setFieldTouched("name")}
                />
                {!!touched.name && !!errors.name && <Text style={[styles.error, { color: colors.error }]}>{errors.name}</Text>}
              </View>

              <View style={styles.field}>
                <Text style={[styles.label, { color: colors.text }]}>Bio</Text>
                <TextInput
                  placeholder="A short intro (max 160 chars)"
                  placeholderTextColor={colors.subtext}
                  style={[
                    styles.input,
                    styles.multiline,
                    { backgroundColor: colors.inputBg, borderColor: colors.inputBorder, color: colors.text },
                    touched.bio && errors.bio ? { borderColor: colors.error } : null,
                  ]}
                  value={values.bio}
                  onChangeText={handleChange("bio")}
                  onBlur={() => setFieldTouched("bio")}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  maxLength={160}
                />
                <Text style={{ color: colors.subtext, fontSize: 12, alignSelf: "flex-end" }}>
                  {values.bio.length}/160
                </Text>
                {!!touched.bio && !!errors.bio && <Text style={[styles.error, { color: colors.error }]}>{errors.bio}</Text>}
              </View>

              <Button title="Save Changes" onPress={() => handleSubmit()} />
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 14,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 18,
  },
  field: { gap: 8 },
  label: { fontSize: 14, fontWeight: "700" },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },
  multiline: { minHeight: 110 },
  error: { fontSize: 12, marginTop: 4 },
});
