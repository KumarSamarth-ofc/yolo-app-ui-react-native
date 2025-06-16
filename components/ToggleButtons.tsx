import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ToggleButtons({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (val: string) => void;
}) {
  return (
    <View style={styles.toggleContainer}>
      <TouchableOpacity
        style={[styles.button, selected === "pay" && styles.active]}
        onPress={() => setSelected("pay")}
      >
        <Text style={[styles.text, selected === "pay" && styles.activeText]}>
          pay
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selected === "card" && styles.activeRed]}
        onPress={() => setSelected("card")}
      >
        <Text
          style={[styles.text, selected === "card" && styles.activeRedText]}
        >
          card
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
  },
  active: {
    backgroundColor: "#fff",
  },
  activeText: {
    color: "#000",
  },
  activeRed: {
    borderColor: "red",
  },
  activeRedText: {
    color: "red",
  },
});
