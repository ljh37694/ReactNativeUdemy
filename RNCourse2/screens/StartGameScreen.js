import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  return (
    <View style={style.container}>
      <TextInput />
      <View>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 24,
    marginTop: 100,
    backgroundColor: "#4bd29aff",
    marginHorizontal: 32,
    borderRadius: 24,
    elevation: 12,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
