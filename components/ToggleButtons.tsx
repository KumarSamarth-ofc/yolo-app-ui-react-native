import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface ToggleButtonsProps {
  activeMode: "pay" | "card";
  onToggle: (mode: "pay" | "card") => void;
}

const ToggleButtons: React.FC<ToggleButtonsProps> = ({
  activeMode,
  onToggle,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          activeMode === "pay" ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => onToggle("pay")}
      >
        <Text
          style={[
            styles.text,
            activeMode === "pay" ? styles.activeText : styles.inactiveText,
          ]}
        >
          pay
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          activeMode === "card" ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => onToggle("card")}
      >
        <Text
          style={[
            styles.text,
            activeMode === "card" ? styles.activeText : styles.inactiveText,
          ]}
        >
          card
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 30,
    padding: 4,
    justifyContent: "center",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 30,
    borderWidth: 1.5,
    marginHorizontal: 6,
    backgroundColor: "#000",
  },
  activeButton: {
    borderColor: "#f00",
  },
  inactiveButton: {
    borderColor: "#fff",
  },
  text: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "lowercase",
  },
  activeText: {
    color: "#f00",
  },
  inactiveText: {
    color: "#fff",
  },
});

export default ToggleButtons;
