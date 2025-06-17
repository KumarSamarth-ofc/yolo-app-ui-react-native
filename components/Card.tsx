import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { faker } from "@faker-js/faker";
import { Ionicons } from "@expo/vector-icons";

interface CardProps {
  isFrozen: boolean;
}

const Card: React.FC<CardProps> = ({ isFrozen }) => {
  const cardNumber = faker.finance.creditCardNumber("################");
  const formattedGroups = cardNumber.match(/.{1,4}/g) || [];

  const expiry = "25/09";

  if (isFrozen) {
    return (
      <View style={styles.card}>
        <Image
          source={require("../assets/cover.png")}
          style={styles.coverImage}
          resizeMode="cover"
        />
      </View>
    );
  }

  return (
    <View style={styles.card}>
      {/* Logos */}
      <View style={styles.logoRow}>
        <Image source={require("../assets/yolo.png")} style={styles.yoloLogo} />
        <Image
          source={require("../assets/yesbank.png")}
          style={styles.bankLogo}
        />
      </View>

      {/* Card Number + Expiry */}
      <View style={styles.numberAndExpiryContainer}>
        <View style={styles.cardNumberGrid}>
          {formattedGroups.map((group, idx) => (
            <Text key={idx} style={styles.numberBlock}>
              {group}
            </Text>
          ))}
        </View>

        <View style={styles.expiryBlock}>
          <Text style={styles.expiryLabel}>EXPIRY</Text>
          <Text style={styles.expiryValue}>{expiry}</Text>

          <Text style={[styles.expiryLabel, { marginTop: 12 }]}>CVV</Text>
          <Text style={styles.cvvStars}>****</Text>
        </View>
      </View>

      {/* Copy Details */}
      <View style={styles.copyRow}>
        <Ionicons name="copy-outline" size={16} color="#f00" />
        <Text style={styles.copyText}>copy details</Text>
      </View>

      {/* RuPay Logo */}
      <Image source={require("../assets/rupay.png")} style={styles.rupayLogo} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    borderRadius: 16,
    padding: 20,
    width: 250,
    height:400,
    alignSelf: "center",
    position: "relative",
    overflow: "hidden",
    shadowColor: "#f00",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  coverImage: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  logoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  yoloLogo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  bankLogo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  numberAndExpiryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 10,
  },
  cardNumberGrid: {
    flexDirection: "column",
  },
  numberBlock: {
    color: "#fff",
    fontSize: 22,
    fontStyle: "italic",
    fontWeight: "600",
    fontFamily: "monospace",
    marginVertical: 2,
  },
  expiryBlock: {
    alignItems: "flex-end",
  },
  expiryLabel: {
    fontSize: 12,
    color: "#aaa",
    textTransform: "uppercase",
  },
  expiryValue: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  cvvStars: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  copyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  copyText: {
    color: "#f00",
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  rupayLogo: {
    width: 90,
    height: 80,
    resizeMode: "contain",
    position: "absolute",
    bottom: 16,
    right: 20,
  },
});

export default Card;
