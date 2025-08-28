import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal' />
        <Button title='Add Goal' />
      </View>
      <View>
        <Text>
          List of goals...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#b6b6b6ff',
    width: '80%',
    padding: 3,
    marginRight: 5
  },
});
