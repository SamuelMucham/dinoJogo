import Dino from "@/components/Dino";
import Movinbackground from "@/components/movieBackgroud";
import Obstacle from "@/components/Obstacle";
import Score from "@/components/Score";
import { useGame } from "@/hooks/gameHook";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

export default function GameScreen() {
  const { jump } = useGame();
  const [obstacles, setobstacles] = useState([] as any);

  function spawnObstacle() {
    setobstacles((oldValue: any) => [...oldValue, Date.now().toString()]);
  }

  function removeObstacle(id: any) {
    setobstacles((oldValue: any) =>
      oldValue.filter((obstacle: any) => obstacle !== id),
    );
  }

  useEffect(() => {
    const interval = setInterval(() => spawnObstacle(), 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Pressable onPress={jump} style={s.button}>
      <View style={s.container}>
        <Movinbackground />
        <Dino />
        <Score />
        {obstacles.map((obstacles: any) => (
          <Obstacle key={obstacles} onEnd={() => removeObstacle(obstacles)} />
        ))}
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  button: {
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
