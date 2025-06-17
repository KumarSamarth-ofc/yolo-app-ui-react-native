import { LinearGradient } from "expo-linear-gradient";
import { Slot } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <LinearGradient
      colors={["#0a0a0a", "#1a1a1a", "#000"]}
      style={styles.container}
    >
      <Slot screenOptions={{ headerShown: false }} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});