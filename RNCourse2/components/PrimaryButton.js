import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.innerContainer, styles.pressed] : styles.innerContainer
        }
        android_ripple={{ color: "#4a2315ff" }}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: "#723d2aff",
    borderRadius: 28,
    overflow: "hidden",
  },
  innerContainer: {
    padding: 12,
  },
  pressed: {
    backgroundColor: "#29130bff",
    opacity: 0.75,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});
