import { Feather, Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import React from "react";
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const contactLinks = [
  { label: "GitHub", icon: "github" as const, href: "https://github.com/amankumarhappy", color: "#6e7681" },
  { label: "LinkedIn", icon: "linkedin" as const, href: "https://www.linkedin.com/in/amankumarhappy/", color: "#0a66c2" },
  { label: "Instagram", icon: "instagram" as const, href: "https://www.instagram.com/amankumarhappy1", color: "#e1306c" },
  { label: "Email", icon: "mail" as const, href: "mailto:amankumarhappy1@gmail.com", color: "#ea4335" },
];

const skillGroups = [
  { title: "Languages", skills: ["Python", "C", "HTML5", "CSS3", "JavaScript", "Java", "DSA"] },
  { title: "Tools & DevOps", skills: ["Git", "GitHub", "VS Code", "Vercel"] },
  { title: "AI Tools", skills: ["Claude", "ChatGPT", "Gemini", "Qwen", "DeepSeek"] },
  { title: "Startup", skills: ["Lean Canvas", "MVP Dev", "Design Thinking", "Pitching", "Community"] },
  { title: "Open Source", skills: ["Waggle-MCP", "GSSoC 2026", "GitHub Workflows", "Code Review"] },
];

const beyondItems = [
  { icon: "people-outline" as const, label: "Community" },
  { icon: "book-outline" as const, label: "Content" },
  { icon: "pencil-outline" as const, label: "Writing" },
  { icon: "location-outline" as const, label: "Bihar Startups" },
];

export default function ConnectScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

  const openLink = (url: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(url);
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={[
        styles.container,
        { paddingTop: isWeb ? 67 : insets.top + 20, paddingBottom: isWeb ? 34 : insets.bottom + 80 },
      ]}
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic"
    >
      <Text style={[styles.kicker, { color: colors.primary }]}>06 / CONTACT</Text>
      <Text style={[styles.heading, { color: colors.foreground }]}>Let's Connect</Text>
      <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
        Open for collaborations, open-source work, feedback, and conversations about building useful products.
      </Text>
      <View style={styles.contactGrid}>
        {contactLinks.map((link) => (
          <Pressable
            key={link.label}
            onPress={() => openLink(link.href)}
            style={({ pressed }) => [
              styles.contactCard,
              { backgroundColor: colors.card, borderColor: colors.cardBorder, opacity: pressed ? 0.8 : 1 },
            ]}
          >
            <Feather name={link.icon} size={22} color={link.color} />
            <Text style={[styles.contactLabel, { color: colors.foreground }]}>{link.label}</Text>
            <Feather name="arrow-up-right" size={14} color={colors.mutedForeground} style={{ marginLeft: "auto" }} />
          </Pressable>
        ))}
      </View>

      <View style={styles.divider}>
        <View style={[styles.dividerLine, { backgroundColor: colors.border }]} />
      </View>
      <Text style={[styles.kicker, { color: colors.primary }]}>02 / SKILLS</Text>
      <Text style={[styles.subheading, { color: colors.foreground }]}>Tech Stack</Text>
      <View style={styles.skillsCol}>
        {skillGroups.map((group) => (
          <View key={group.title}>
            <Text style={[styles.skillGroupTitle, { color: colors.mutedForeground }]}>{group.title}</Text>
            <View style={styles.skillChips}>
              {group.skills.map((skill) => (
                <View key={skill} style={[styles.skillChip, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
                  <Text style={[styles.skillChipText, { color: colors.foreground }]}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.divider}>
        <View style={[styles.dividerLine, { backgroundColor: colors.border }]} />
      </View>
      <Text style={[styles.kicker, { color: colors.primary }]}>05 / BEYOND BUILDING</Text>
      <Text style={[styles.subheading, { color: colors.foreground }]}>More Than Code</Text>
      <Text style={[styles.beyondSubtitle, { color: colors.mutedForeground }]}>
        Community, content, writing, and a strong interest in Bihar's startup future.
      </Text>
      <View style={styles.beyondGrid}>
        {beyondItems.map((item) => (
          <View
            key={item.label}
            style={[styles.beyondCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
          >
            <Ionicons name={item.icon} size={24} color={colors.primary} />
            <Text style={[styles.beyondLabel, { color: colors.foreground }]}>{item.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  kicker: { fontSize: 11, fontFamily: "Inter_700Bold", letterSpacing: 1.5, marginBottom: 6 },
  heading: { fontSize: 32, fontFamily: "Inter_700Bold", marginBottom: 8 },
  subheading: { fontSize: 22, fontFamily: "Inter_700Bold", marginBottom: 14 },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 21, marginBottom: 20 },
  contactGrid: { gap: 10, marginBottom: 8 },
  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
  },
  contactLabel: { fontSize: 15, fontFamily: "Inter_600SemiBold" },
  divider: { marginVertical: 28 },
  dividerLine: { height: 1 },
  skillsCol: { gap: 18, marginBottom: 8 },
  skillGroupTitle: { fontSize: 12, fontFamily: "Inter_700Bold", letterSpacing: 1, marginBottom: 8 },
  skillChips: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  skillChip: { borderWidth: 1, borderRadius: 8, paddingHorizontal: 10, paddingVertical: 5 },
  skillChipText: { fontSize: 13, fontFamily: "Inter_500Medium" },
  beyondSubtitle: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 21, marginBottom: 16 },
  beyondGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 16 },
  beyondCard: {
    width: "47%",
    minHeight: 90,
    borderWidth: 1,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 16,
  },
  beyondLabel: { fontSize: 14, fontFamily: "Inter_700Bold", textAlign: "center" },
});
