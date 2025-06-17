import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
  Alert,
} from "react-native";
import { faker } from "@faker-js/faker";
import { Ionicons } from "@expo/vector-icons";
import * as Clipboard from "expo-clipboard";

interface CardProps {
  isFrozen: boolean;
}

const Card: React.FC<CardProps> = ({ isFrozen }) => {
  const cardNumber = faker.finance.creditCardNumber("################");
  const formattedGroups = cardNumber.match(/.{1,4}/g) || [];
  const expiry = "25/09";

  const handleCopy = () => {
    const cardDetails = `
Card Number: ${cardNumber}
Expiry: ${expiry}
CVV: ****
    `;
    Clipboard.setStringAsync(cardDetails.trim());
    Alert.alert("Copied", "Card details copied to clipboard.");
  };

  if (isFrozen) {
    return (
      <View style={styles.card}>
        <ImageBackground
          source={require("../assets/cover.png")}
          style={styles.coverImage}
          imageStyle={{ borderRadius: 16 }}
          resizeMode="cover"
        />
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/bgimage.png")}
      style={styles.card}
      imageStyle={{ borderRadius: 16 }}
      resizeMode="cover"
    >
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
      <Pressable style={styles.copyRow} onPress={handleCopy}>
        <Ionicons name="copy-outline" size={16} color="#f00" />
        <Text style={styles.copyText}>copy details</Text>
      </Pressable>

      {/* RuPay Logo */}
      <ImageBackground
        source={require("../assets/rupay.png")}
        style={styles.rupayLogo}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111", // this will be hidden behind the image
    borderRadius: 16,
    padding: 20,
    paddingTop: 85,
    width: 250,
    height: 400,
    alignSelf: "center",
    position: "relative",
    overflow: "hidden",
    shadowColor: "#f00",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  coverImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 250,
    height: 400,
    borderRadius: 16,
    resizeMode: "cover",
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
    position: "absolute",
    bottom: 16,
    right: 20,
  },
});

export default Card;
