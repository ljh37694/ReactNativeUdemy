import { ImageBackground, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <ImageBackground
        source={require("./assets/Images/Rinascita.webp")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <StartGameScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: "#f0e27dff",
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  }
});
