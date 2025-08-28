import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text style={styles.textTest}>Kookmin</Text>
      <Button title='Click me' onPress={() => { alert("Hello")}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textTest: {
    padding: 8,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  }
});
