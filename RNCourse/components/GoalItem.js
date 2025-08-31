import { View, StyleSheet, Text } from "react-native";

export default function GoalItem(props) {
  const { text } = props;

  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    padding: 15,
    backgroundColor: "#a25dbfff",
    borderRadius: 10,
    marginBottom: 10,
  },
  goalText: {
    color: "#fff",
  },
});
