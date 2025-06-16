import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import Card from "../../components/Card";
import ToggleButtons from "../../components/ToggleButtons";
import ToggleFreeze from "../../components/ToggleFreeze";

export default function YoloScreen() {
  const [frozen, setFrozen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("pay");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Payment Mode</Text>
      <Text style={styles.subtitle}>
        Choose your preferred payment method to make payment.
      </Text>

      <ToggleButtons selected={selectedMode} setSelected={setSelectedMode} />
      <View>
        <Text style={styles.subtitle}>Your digital debit card</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Card frozen={frozen} />
        <ToggleFreeze frozen={frozen} setFrozen={setFrozen} />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingTop: 80,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 20,
  },
});
