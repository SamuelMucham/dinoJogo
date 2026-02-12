import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/dino.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
