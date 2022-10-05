import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import Todo from './compnents/todo/todoMain.jsx'
export default function App() {
  return (
      <Todo />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    paddingVertical: 20,
    alignItems: 'center',
  },
});
