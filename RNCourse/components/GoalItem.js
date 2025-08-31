import { View, StyleSheet, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  const { data, onDeleteGoal } = props;

  return (
    <Pressable onPress={onDeleteGoal.bind(this, data.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{data.text}</Text>
      </View>
    </Pressable>
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
