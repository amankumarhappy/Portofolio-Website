import { Feather } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const projects = [
  {
    title: "SAHAYAK",
    label: "Flagship Project",
    icon: "heart" as const,
    accentKey: "neonBlue" as const,
    description:
      "WhatsApp health assistant for elderly people: reminders, prescription flow, and caretaker support.",
    chips: ["Healthtech", "WhatsApp-first", "Prototype"],
    links: [
      { label: "Mediokart", href: "https://www.mediokart.in", icon: "external-link" as const },
      { label: "GitHub", href: "https://github.com/amankumarhappy/sahayakbot", icon: "github" as const },
    ],
  },
  {
    title: "Waggle-MCP",
    label: "Open Source Contributor",
    icon: "package" as const,
    accentKey: "neonPurple" as const,
    description:
      "Contributed to an MCP project published on PyPI and maintained in the open.",
    chips: ["Open Source", "MCP", "PyPI"],
    links: [
      { label: "GitHub", href: "https://github.com/Abhigyan-Shekhar/Waggle-mcp", icon: "github" as const },
      { label: "PyPI", href: "https://pypi.org/project/waggle-mcp/", icon: "external-link" as const },
    ],
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const colors = useColors();
  // @ts-ignore
  const accent = colors[project.accentKey] as string;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(24)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 550, delay: index * 100, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 550, delay: index * 100, useNativeDriver: true }),
    ]).start();
  }, []);

  const openLink = (url: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(url);
  };

  return (
    <Animated.View
      style={[
        styles.card,
        { backgroundColor: colors.card, borderColor: colors.cardBorder, opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
      ]}
    >
      <View style={[styles.cardTopBar, { backgroundColor: accent }]} />
      <View style={styles.cardHeader}>
        <View style={[styles.iconBox, { borderColor: accent, backgroundColor: colors.background }]}>
          <Feather name={project.icon} size={22} color={accent} />
        </View>
        <View style={styles.cardHeaderText}>
          <Text style={[styles.cardTitle, { color: colors.foreground }]}>{project.title}</Text>
          <Text style={[styles.cardLabel, { color: accent }]}>{project.label}</Text>
        </View>
      </View>
      <Text style={[styles.cardDesc, { color: colors.mutedForeground }]}>{project.description}</Text>
      <View style={styles.chipsRow}>
        {project.chips.map((chip) => (
          <View key={chip} style={[styles.chip, { borderColor: colors.cardBorder, backgroundColor: colors.background }]}>
            <Text style={[styles.chipText, { color: colors.mutedForeground }]}>{chip}</Text>
          </View>
        ))}
      </View>
      <View style={styles.linksRow}>
        {project.links.map((link) => (
          <Pressable
            key={link.href}
            onPress={() => openLink(link.href)}
            style={({ pressed }) => [styles.linkBtn, { borderColor: accent, opacity: pressed ? 0.7 : 1 }]}
          >
            <Feather name={link.icon} size={14} color={accent} />
            <Text style={[styles.linkText, { color: accent }]}>{link.label}</Text>
          </Pressable>
        ))}
      </View>
    </Animated.View>
  );
}

export default function ProjectsScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";

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
      <Text style={[styles.kicker, { color: colors.primary }]}>03 / PROJECTS</Text>
      <Text style={[styles.heading, { color: colors.foreground }]}>Featured Work</Text>
      <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
        Things I'm building and contributing to right now.
      </Text>
      <View style={styles.projectsList}>
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  kicker: { fontSize: 11, fontFamily: "Inter_700Bold", letterSpacing: 1.5, marginBottom: 6 },
  heading: { fontSize: 32, fontFamily: "Inter_700Bold", marginBottom: 8 },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 21, marginBottom: 24 },
  projectsList: { gap: 16 },
  card: { borderRadius: 16, borderWidth: 1, overflow: "hidden", padding: 20 },
  cardTopBar: { position: "absolute", top: 0, left: 0, right: 0, height: 2 },
  cardHeader: { flexDirection: "row", alignItems: "center", gap: 14, marginBottom: 14 },
  iconBox: { width: 46, height: 46, borderRadius: 12, borderWidth: 1.5, alignItems: "center", justifyContent: "center" },
  cardHeaderText: { flex: 1 },
  cardTitle: { fontSize: 20, fontFamily: "Inter_700Bold" },
  cardLabel: { fontSize: 11, fontFamily: "Inter_700Bold", letterSpacing: 1 },
  cardDesc: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 22, marginBottom: 14 },
  chipsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 16 },
  chip: { borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 4 },
  chipText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  linksRow: { flexDirection: "row", gap: 10 },
  linkBtn: { flexDirection: "row", alignItems: "center", gap: 6, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, borderWidth: 1.5 },
  linkText: { fontSize: 13, fontFamily: "Inter_600SemiBold" },
});
