import { View, StyleSheet, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  const { data, onDeleteGoal } = props;

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteGoal.bind(this, data.id)}
      >
        <Text style={styles.goalText}>{data.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#a25dbfff",
    borderRadius: 10,
    marginBottom: 10,
  },
  goalText: {
    color: "#fff",
    padding: 15,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: '#77438dff',
  }
});
