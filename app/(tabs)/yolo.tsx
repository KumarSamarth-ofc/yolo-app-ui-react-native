import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from "../../components/Card";
import ToggleFreeze from "../../components/ToggleFreeze";
import ToggleButtons from "../../components/ToggleButtons";

const YoloPayScreen = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [activeMode, setActiveMode] = useState<"pay" | "card">("pay");

  const toggleFreeze = () => {
    setIsFrozen((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>select payment mode</Text>
      <Text style={styles.subtitle}>
        choose your preferred payment method to make payment.
      </Text>

      {/* 🔵 Your styled Toggle Buttons */}
      <ToggleButtons activeMode={activeMode} onToggle={setActiveMode} />

      <Text style={styles.cardLabel}>YOUR DIGITAL DEBIT CARD</Text>

      {/* 🔵 Card Left, Freeze Button Right */}
      <View style={styles.cardRow}>
        <View style={styles.cardWrapper}>
          <Card isFrozen={isFrozen} />
        </View>
        <View style={styles.toggleWrapper}>
          <ToggleFreeze isFrozen={isFrozen} onToggle={toggleFreeze} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  cardLabel: {
    color: "#777",
    fontSize: 12,
    marginVertical: 16,
  },
  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardWrapper: {
    flex: 1,
    marginRight: 10,
  },
  toggleWrapper: {
    width: 64,
    alignItems: "center",
  },
});

export default YoloPayScreen;
