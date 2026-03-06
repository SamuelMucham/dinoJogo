import { useGame } from "@/hooks/gameHook";
import { useEffect } from "react";
import React, { Dimensions, Easing, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  useAnimatedReaction,
} from "react-native-reanimated";
import goku from "@/assets/bitmaps/goku.json";
import goku_moving from "@/assets/bitmaps/goku_moving.json";
import cactus from "@/assets/bitmaps/cactus.json";

export default function Obstacle({ onEnd }: any) {
  const { width } = Dimensions.get("window");
  const offset = useSharedValue(0);
  const { dinoHeight } = useGame();

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
  useAnimatedReaction(
    () => {
      return offset.value;
    },
    (currentValue) => {
      const cactusPosition = width - Math.round(currentValue);
      const left = Math.max(50, width - currentValue);
      const right = Math.min(150, width - currentValue + 65);
      const bottom = Math.max(0, dinoHeight.value);
      const top = 65;
      if (left > right || bottom > left) {
        return;
      }
      console.log("collision");
      for (let x = left; x < right; x++) {
        for (let y = bottom; y < top; y++) {
          console.log(x, y);
          const xDino = x - 50;
          const xCactus = x - cactusPosition;
          const yDino = 80 - (y - dinoHeight.value);
          const yCactus = 65 - y;
          const goku = dinoHeight.value > 0 ? goku_moving : goku_moving;

          if (
            xDino < 80 &&
            xDino > -1 &&
            yDino < 80 &&
            yDino > -1 &&
            xCactus < 65 &&
            xCactus > -1 &&
            yCactus < 65 &&
            yCactus > -1 &&
            goku[xDino][yDino] &&
            cactus[xCactus][yCactus]
          ) {
            console.log("pixel colission");
          }
        }
      }
    },
  );
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
