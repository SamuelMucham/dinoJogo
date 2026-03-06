import { useGame } from "@/hooks/gameHook";
import  { useEffect } from "react";
import React, { Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";

export default function Dino() {
  const { jumping, stopJump, dinoHeight } = useGame();
    
  function Handlejump() {
    dinoHeight.value = withSequence(
      withTiming(-100, {
        duration: 400,
        easing: Easing.linear,
      }),
      withTiming(0, {
        duration: 300,
        easing: Easing.linear,
      }),
      withTiming(
        0,
        {
          duration: 400,
          easing: Easing.linear,
        },
        () => stopJump(),
      ),
    );
  }

  useEffect(() => {
    if (jumping) {
      Handlejump();
    }
  }, [jumping]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: dinoHeight.value,
      },
    ],
  }));

  return (
    <Animated.View style={[s.dino, animatedStyle]}>
      {jumping ? (
        <Image
          source={require("@/assets/images/goku-Photoroom.png")}
          resizeMode="contain"
          style={s.image}
        />
      ) : (
        <Image
          source={require("@/assets/images/gokup.gif")}
          resizeMode="contain"
          style={s.image}
        />
      )}
    </Animated.View>
  );
}

const s = StyleSheet.create({
  dino: {
    width: 100,
    height: 200,
    position: "absolute",
    zIndex: 50,
    top: "35%",
    left:50,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
