import { useEffect } from "react";
import React, { Dimensions, Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

export default function MoveBackgorud() {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);
  const AnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));
  useEffect(() => {
    offset.value = withRepeat(
      withTiming(width, {
        duration: 5000,
        easing: Easing.linear,
      }),
      -1,
    );
  }, [offset]);
  return (
    <Animated.View style={styles.screen}>
      <Animated.View style={[styles.container, AnimatedStyle]}>
        <Image
          source={require("@/assets/images/fundo1.jpeg")}
          style={{
            width,
            height: "100%",
          }}
          resizeMode="cover"
        />
        <Image
          source={require("@/assets/images/fundo1.jpeg")}
          style={{
            width,
            height: "100%",
          }}
          resizeMode="cover"
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
  },
  screen: {
    width: "100%",
    height: "100%",
    overflowX: "hidden",
  },
});
