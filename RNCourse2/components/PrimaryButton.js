import { Pressable, StyleSheet, Text } from "react-native";

export default function PrimaryButton({ children }) {
  return (
    <Pressable>
      <Text>{children}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({

});
