import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  const numberIuputHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0) {
      Alert.alert("Invalid number!!!", "You must enter positive numbers!!!", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    }
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        value={enteredNumber}
        onChange={numberIuputHandler}
      />
      <View style={style.buttonContainer}>
        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#bbf19fff",
    marginHorizontal: 32,
    borderRadius: 24,
    elevation: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  numberInput: {
    height: 65,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#723d2aff",
    borderBottomWidth: 2,
    color: "#723d2aff",
    marginVertical: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
