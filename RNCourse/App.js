import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (text) => {
    setCourseGoals((currentCousrseGoals) => [
      ...currentCousrseGoals,
      { text: text, id: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, idx) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#b6b6b6ff",
    width: "80%",
    padding: 3,
    marginRight: 5,
  },
  goalsContainer: {
    flex: 5,
  },
});
