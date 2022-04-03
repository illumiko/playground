import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import colors from "./colors.js"

const todoDisplay = ({tasks}) => {
  return (
    <View>
      {tasks.map(i => (
          <View key={i.day}>
            <Text style={styles.todo}>{i.year}</Text>
            <View style={styles.task} >
              <Text style={styles.todo}>{i.month}</Text>
              <Text style={styles.todo}>{i.day}</Text>
              <Text style={styles.todo}>{i.task}</Text>
            </View>
          </View>
      ))}

    </View>

  )
}
const styles = StyleSheet.create({
  todo: {
    color: colors.fg,
    fontSize: 24,
  },
  task: {
    borderColor: colors.accent,
    borderStyle: 'line',
    borderWidth: 4,
    padding: 15,
    marginVertical: 10,
  }
})

export default todoDisplay
