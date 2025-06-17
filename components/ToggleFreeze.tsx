// components/ToggleFreeze.tsx

import React from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ToggleFreezeProps {
  isFrozen: boolean;
  onToggle: () => void;
}

const ToggleFreeze: React.FC<ToggleFreezeProps> = ({ isFrozen, onToggle }) => {
  return (
    <Pressable onPress={onToggle} style={styles.buttonContainer}>
      <View
        style={[styles.iconCircle, isFrozen ? styles.frozen : styles.unfrozen]}
      >
        <Ionicons
          name="snow-outline"
          size={22}
          color={isFrozen ? "#f00" : "#fff"}
        />
      </View>
      <Text
        style={[
          styles.label,
          isFrozen ? styles.labelFrozen : styles.labelUnfrozen,
        ]}
      >
        {isFrozen ? "unfreeze" : "freeze"}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  frozen: {
    borderColor: "#f00",
    shadowColor: "#f00",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  unfrozen: {
    borderColor: "#fff",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 6,
    textTransform: "lowercase",
  },
  labelFrozen: {
    color: "#f00",
  },
  labelUnfrozen: {
    color: "#fff",
  },
});

export default ToggleFreeze;
