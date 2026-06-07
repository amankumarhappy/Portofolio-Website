import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useColors } from "@/hooks/useColors";

const journey = [
  {
    iconName: "school" as const,
    year: "2025–2029",
    title: "B.Tech CSE",
    text: "Government Engineering College, Buxar.",
    darkColor: "#00e5ff",
    lightColor: "#0369a1",
  },
  {
    iconName: "heart" as const,
    year: "2025",
    title: "Mediokart",
    text: "Started building SAHAYAK for practical healthcare workflows.",
    darkColor: "#a855f7",
    lightColor: "#7c3aed",
  },
  {
    iconName: "trophy" as const,
    year: "2026",
    title: "National Winner",
    text: "IDE Bootcamp 2026, AICTE × Ministry of Education.",
    darkColor: "#22c55e",
    lightColor: "#047857",
  },
  {
    iconName: "code-slash" as const,
    year: "Open Source",
    title: "Waggle-MCP",
    text: "Contributor to an MCP project on GitHub and PyPI.",
    darkColor: "#00e5ff",
    lightColor: "#0369a1",
  },
  {
    iconName: "people" as const,
    year: "Remote · 2026",
    title: "GSSoC 2026",
    text: "GirlScript Summer of Code. Actively contributing to open source.",
    darkColor: "#a855f7",
    lightColor: "#7c3aed",
  },
];

const nowItems = [
  {
    icon: "zap" as const,
    title: "Building This Month",
    items: [
      "SAHAYAK MVP v2 — Enhanced WhatsApp health flows",
      "Mediokart — Scaling healthtech for rural India",
    ],
  },
  {
    icon: "book-open" as const,
    title: "Learning Now",
    items: [
      "Python Web Dev — Django & FastAPI",
      "JavaScript — Frontend interactivity",
      "Open Source contribution workflows",
    ],
  },
  {
    icon: "send" as const,
    title: "Shipping Next",
    items: [
      "SAHAYAK public beta",
      "Waggle-MCP v2 features",
      "'Building in Public' YouTube series",
    ],
  },
];

function JourneyCard({
  item,
  index,
  isDark,
  isLast,
}: {
  item: (typeof journey)[0];
  index: number;
  isDark: boolean;
  isLast: boolean;
}) {
  const colors = useColors();
  const accent = isDark ? item.darkColor : item.lightColor;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 500, delay: index * 80, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 500, delay: index * 80, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <View style={styles.timelineRow}>
      <View style={styles.timelineLeft}>
        <View style={[styles.timelineDot, { backgroundColor: accent }]} />
        {!isLast && <View style={[styles.timelineLine, { backgroundColor: colors.border }]} />}
      </View>
      <Animated.View
        style={[
          styles.journeyCard,
          {
            backgroundColor: colors.card,
            borderColor: colors.cardBorder,
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={[styles.journeyCardBar, { backgroundColor: accent }]} />
        <View style={styles.journeyCardHeader}>
          <Ionicons name={item.iconName} size={18} color={accent} />
          <View style={[styles.yearBadge, { backgroundColor: colors.background, borderColor: colors.border }]}>
            <Text style={[styles.yearText, { color: colors.mutedForeground }]}>{item.year}</Text>
          </View>
        </View>
        <Text style={[styles.journeyTitle, { color: colors.foreground }]}>{item.title}</Text>
        <Text style={[styles.journeyText, { color: colors.mutedForeground }]}>{item.text}</Text>
      </Animated.View>
    </View>
  );
}

export default function JourneyScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";
  const isDark = colors.background === "#050505";

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
      <Text style={[styles.kicker, { color: colors.primary }]}>04 / JOURNEY</Text>
      <Text style={[styles.heading, { color: colors.foreground }]}>My Journey</Text>
      <Text style={[styles.subtitle, { color: colors.mutedForeground }]}>
        From GEC Buxar to national stages and open source.
      </Text>

      <View style={styles.timeline}>
        {journey.map((item, i) => (
          <JourneyCard key={item.title} item={item} index={i} isDark={isDark} isLast={i === journey.length - 1} />
        ))}
      </View>

      <View style={styles.nowSection}>
        <Text style={[styles.kicker, { color: colors.primary }]}>01.5 / NOW</Text>
        <Text style={[styles.heading, { color: colors.foreground }]}>What's Happening</Text>
        <View style={styles.nowGrid}>
          {nowItems.map((section) => (
            <View
              key={section.title}
              style={[styles.nowCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}
            >
              <View style={styles.nowCardHeader}>
                <View style={[styles.nowIconBox, { borderColor: colors.primary, backgroundColor: colors.background }]}>
                  <Feather name={section.icon} size={18} color={colors.primary} />
                </View>
                <Text style={[styles.nowCardTitle, { color: colors.foreground }]}>{section.title}</Text>
              </View>
              <View style={styles.nowItems}>
                {section.items.map((item, i) => (
                  <View key={i} style={styles.nowItem}>
                    <View style={[styles.nowDot, { backgroundColor: colors.primary }]} />
                    <Text style={[styles.nowItemText, { color: colors.mutedForeground }]}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  kicker: { fontSize: 11, fontFamily: "Inter_700Bold", letterSpacing: 1.5, marginBottom: 6 },
  heading: { fontSize: 32, fontFamily: "Inter_700Bold", marginBottom: 8 },
  subtitle: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 21, marginBottom: 24 },
  timeline: { gap: 0, marginBottom: 36 },
  timelineRow: { flexDirection: "row", gap: 14 },
  timelineLeft: { alignItems: "center", width: 20 },
  timelineDot: { width: 14, height: 14, borderRadius: 7, marginTop: 18 },
  timelineLine: { flex: 1, width: 2, marginTop: 4 },
  journeyCard: {
    flex: 1,
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
    overflow: "hidden",
  },
  journeyCardBar: { position: "absolute", top: 0, left: 0, right: 0, height: 2 },
  journeyCardHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 },
  yearBadge: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 8, paddingVertical: 2 },
  yearText: { fontSize: 10, fontFamily: "Inter_700Bold", letterSpacing: 0.5 },
  journeyTitle: { fontSize: 16, fontFamily: "Inter_700Bold", marginBottom: 4 },
  journeyText: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 19 },
  nowSection: { marginBottom: 16 },
  nowGrid: { gap: 12 },
  nowCard: { borderRadius: 14, borderWidth: 1, padding: 16 },
  nowCardHeader: { flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 12 },
  nowIconBox: { width: 36, height: 36, borderRadius: 10, borderWidth: 1.5, alignItems: "center", justifyContent: "center" },
  nowCardTitle: { fontSize: 15, fontFamily: "Inter_700Bold", flex: 1 },
  nowItems: { gap: 8 },
  nowItem: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  nowDot: { width: 6, height: 6, borderRadius: 3, marginTop: 7, flexShrink: 0 },
  nowItemText: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 20, flex: 1 },
});
