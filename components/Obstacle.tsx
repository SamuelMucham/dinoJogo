import React, { useEffect } from "react";
import { Dimensions, Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function Obstacle({ onEnd }: any) {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -offset.value }],
  }));

  useEffect(() => {
    offset.value = withTiming(
      width,
      {
        duration: 3000,
        easing: Easing.linear,
      },
      onEnd,
    );
  }, []);
  return (
    <Animated.View style={[s.obstaculo, animatedStyle]}>
      <Image
        style={s.image}
        source={require("@/assets/images/obs-Photoroom.png")}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const s = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  obstaculo: {
    width: 65,
    height: 65,
    position: "absolute",
    bottom: "30%",
    right: 0,
  },
});
