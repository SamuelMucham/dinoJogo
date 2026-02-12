import { Link } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("@/assets/images/fundo.webp")}
      resizeMode="stretch"
      style={styles.Background}
    >
      <View style={styles.container}>
        <Link href={"/game"} asChild>
          <TouchableOpacity style={styles.button}>
            <Text>JOGAR</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#684646",
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 999,
    marginBottom: 50,
  },
  Background: {
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
