import { View, Text, Image, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Card({ frozen }: { frozen: boolean }) {
  const cardNumber = faker.finance
    .creditCardNumber()
    .replace(/-/g, " ")
    .slice(0, 19);
  const expiry = faker.date
    .future()
    .toISOString()
    .slice(2, 7)
    .replace("-", "/");

  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const shineTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-300, 300],
  });

  if (frozen) {
    return (
      <View style={styles.cardContainer}>
        <Image
          source={require("../assets/cover.png")}
          style={styles.coverImage}
        />
      </View>
    );
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.logoRow}>
        <Image source={require("../assets/yolo.png")} style={styles.logoYolo} />
        <Image
          source={require("../assets/yesbank.png")}
          style={styles.logoYes}
        />
      </View>

      <Text style={styles.cardNumber}>{cardNumber}</Text>
      <Text style={styles.expiry}>Expiry {expiry}</Text>
      <Text style={styles.cvv}>CVV ***</Text>
      <View style={styles.copyRow}>
        <Ionicons
          name="copy-outline"
          size={20}
          color="red"
          style={{ marginRight: 6 }}
        />
        <Text style={styles.copyText}>copy details</Text>
      </View>

      <Image source={require("../assets/rupay.png")} style={styles.rupayLogo} />

      <Animated.View
        style={[
          styles.shine,
          {
            transform: [{ translateX: shineTranslateX }, { rotate: "45deg" }],
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    height: 400,
    borderRadius: 24,
    backgroundColor: "#111",
    padding: 20,
    overflow: "hidden",
    position: "relative",
    justifyContent: "center",
    shadowColor: "#ff0000", // subtle red glow
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12, // for Android bulge
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)", // soft white slant
  },
  logoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  logoYolo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoYes: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  cardNumber: {
    color: "#fff",
    fontSize: 18,
    letterSpacing: 2,
    marginBottom: 5,
  },
  expiry: {
    color: "#aaa",
    fontSize: 14,
  },
  cvv: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 10,
  },
  copyText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  rupayLogo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    position: "absolute",
    bottom: 15,
    right: 20,
  },
  shine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 80,
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    opacity: 0.6,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },
  copyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  copyText: {
    color: "red",
    fontSize: 12,
  },
});
