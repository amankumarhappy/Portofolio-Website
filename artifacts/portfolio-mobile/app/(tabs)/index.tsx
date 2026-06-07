import { Feather, Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import * as Linking from "expo-linking";
import React, { useEffect, useRef, useState } from "react";
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

const stats = [
  { value: 1, suffix: "", label: "National Win", sub: "IDE Bootcamp 2026" },
  { value: 82, suffix: "+", label: "YouTube", sub: "30K+ lifetime views" },
  { value: 314, suffix: "+", label: "Quora", sub: "30K+ content views" },
  { value: 750, suffix: "+", label: "LinkedIn", sub: "Growing community" },
];

const cards = [
  { icon: "school" as const, title: "CSE Student", text: "Govt Engineering College, Buxar" },
  { icon: "heart" as const, title: "Healthtech Builder", text: "Building SAHAYAK" },
  { icon: "trophy" as const, title: "National Winner", text: "AICTE x MoE IDE Bootcamp 2026" },
];

const tags = ["Student Founder", "Open Source Contributor", "Building SAHAYAK"];

function AnimatedStat({ stat, delay }: { stat: (typeof stats)[0]; delay: number }) {
  const colors = useColors();
  const [count, setCount] = useState(0);
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;
    const timeout = setTimeout(() => {
      const duration = 1100;
      const started = Date.now();
      const tick = () => {
        const progress = Math.min((Date.now() - started) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(stat.value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
      <Text style={[styles.statValue, { color: colors.primary }]}>{count}{stat.suffix}</Text>
      <Text style={[styles.statLabel, { color: colors.foreground }]}>{stat.label}</Text>
      <Text style={[styles.statSub, { color: colors.mutedForeground }]}>{stat.sub}</Text>
    </View>
  );
}

export default function HomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const isWeb = Platform.OS === "web";
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 1, duration: 700, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: 0, duration: 700, useNativeDriver: true }),
    ]).start();
  }, []);

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
      <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
        <View style={styles.badge}>
          <Ionicons name="trophy" size={12} color={colors.primary} />
          <Text style={[styles.badgeText, { color: colors.primary }]}>
            NATIONAL WINNER · IDE BOOTCAMP 2026
          </Text>
        </View>
        <Text style={[styles.heroName, { color: colors.foreground }]}>
          Aman Kumar{"\n"}
          <Text style={{ color: colors.primary }}>Happy</Text>
        </Text>
        <Text style={[styles.heroBio, { color: colors.mutedForeground }]}>
          CSE student from Bihar building simple healthtech tools for Bharat.
        </Text>
        <View style={styles.tagsRow}>
          {tags.map((tag) => (
            <View key={tag} style={[styles.tag, { borderColor: colors.cardBorder, backgroundColor: colors.card }]}>
              <Text style={[styles.tagText, { color: colors.mutedForeground }]}>{tag}</Text>
            </View>
          ))}
        </View>
        <View style={styles.ctaRow}>
          <Pressable
            onPress={() => openLink("https://github.com/amankumarhappy")}
            style={({ pressed }) => [styles.ctaBtn, { backgroundColor: colors.primary, opacity: pressed ? 0.8 : 1 }]}
          >
            <Feather name="github" size={16} color={colors.primaryForeground} />
            <Text style={[styles.ctaBtnText, { color: colors.primaryForeground }]}>GitHub</Text>
          </Pressable>
          <Pressable
            onPress={() => openLink("https://www.linkedin.com/in/amankumarhappy/")}
            style={({ pressed }) => [styles.ctaOutline, { borderColor: colors.primary, opacity: pressed ? 0.7 : 1 }]}
          >
            <Feather name="linkedin" size={16} color={colors.primary} />
            <Text style={[styles.ctaOutlineText, { color: colors.primary }]}>LinkedIn</Text>
          </Pressable>
        </View>
      </Animated.View>

      <Text style={[styles.sectionKicker, { color: colors.primary }]}>BY THE NUMBERS</Text>
      <View style={styles.statsGrid}>
        {stats.map((s, i) => <AnimatedStat key={s.label} stat={s} delay={i * 150} />)}
      </View>

      <Text style={[styles.sectionKicker, { color: colors.primary, marginTop: 8 }]}>01 / WHO AM I?</Text>
      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>About Me</Text>
      <Text style={[styles.aboutBio, { color: colors.mutedForeground }]}>
        I build practical tools, contribute to open source, and keep my work focused on people who need simple technology.
      </Text>
      <View style={styles.cardsCol}>
        {cards.map((card) => (
          <View key={card.title} style={[styles.aboutCard, { backgroundColor: colors.card, borderColor: colors.cardBorder }]}>
            <Ionicons name={card.icon} size={22} color={colors.primary} />
            <View style={styles.aboutCardText}>
              <Text style={[styles.aboutCardTitle, { color: colors.foreground }]}>{card.title}</Text>
              <Text style={[styles.aboutCardSub, { color: colors.mutedForeground }]}>{card.text}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  badge: { flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 16 },
  badgeText: { fontSize: 11, fontFamily: "Inter_700Bold", letterSpacing: 1 },
  heroName: { fontSize: 42, fontFamily: "Inter_700Bold", lineHeight: 52, marginBottom: 12 },
  heroBio: { fontSize: 15, fontFamily: "Inter_400Regular", lineHeight: 24, marginBottom: 20 },
  tagsRow: { flexDirection: "row", flexWrap: "wrap", gap: 8, marginBottom: 24 },
  tag: { borderWidth: 1, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5 },
  tagText: { fontSize: 12, fontFamily: "Inter_500Medium" },
  ctaRow: { flexDirection: "row", gap: 12, marginBottom: 36 },
  ctaBtn: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 24 },
  ctaBtnText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  ctaOutline: { flexDirection: "row", alignItems: "center", gap: 8, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 24, borderWidth: 1.5 },
  ctaOutlineText: { fontSize: 14, fontFamily: "Inter_600SemiBold" },
  sectionKicker: { fontSize: 11, fontFamily: "Inter_700Bold", letterSpacing: 1.5, marginBottom: 6 },
  sectionTitle: { fontSize: 28, fontFamily: "Inter_700Bold", marginBottom: 10 },
  statsGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 32 },
  statCard: { flex: 1, minWidth: "45%", borderRadius: 12, borderWidth: 1, padding: 16, alignItems: "center" },
  statValue: { fontSize: 30, fontFamily: "Inter_700Bold", marginBottom: 4 },
  statLabel: { fontSize: 13, fontFamily: "Inter_700Bold", marginBottom: 2 },
  statSub: { fontSize: 11, fontFamily: "Inter_400Regular", textAlign: "center" },
  aboutBio: { fontSize: 14, fontFamily: "Inter_400Regular", lineHeight: 22, marginBottom: 16 },
  cardsCol: { gap: 10, marginBottom: 16 },
  aboutCard: { flexDirection: "row", alignItems: "center", gap: 14, borderWidth: 1, borderRadius: 12, padding: 16 },
  aboutCardText: { flex: 1 },
  aboutCardTitle: { fontSize: 15, fontFamily: "Inter_700Bold", marginBottom: 2 },
  aboutCardSub: { fontSize: 13, fontFamily: "Inter_400Regular", lineHeight: 18 },
});
