import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ToggleFreeze({
  frozen,
  setFrozen,
}: {
  frozen: boolean;
  setFrozen: (val: boolean) => void;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.freezeButton}
        onPress={() => setFrozen(!frozen)}
      >
        <Text style={styles.icon}>❄️</Text>
      </TouchableOpacity>
      <Text style={styles.label}>{frozen ? "Unfreeze" : "freeze"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    alignItems: "center",
  },
  freezeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#fff",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
  },
  label: {
    color: "#fff",
    fontSize: 12,
    marginTop: 8,
  },
});
