import { StyleSheet, Text, View, ImageBackground, TextInput, FlatList, TouchableOpacity } from 'react-native';
import colors from "./colors.js"
import React,{useState, createContext} from 'react'
import Display from "./todoDisplay.jsx"

const todo = () => {
  const [task, setTask] = useState([
    {
      year: "2022",
      month: "03",
      day: "28",
      icon: "",
      topic: "X",
      task: "Complete Bio hw",
      startTime: "12:00pm",
      endTime: "2:00am",
    }
    
  ])
  return (

    <View style={styles.container}>
      <ImageBackground style={{flex:1, justifyContent: "start"}} resizeMode="cover" source={require('../../assets/background.jpg')}>
        {/*  image overlay */ }
        <View style={styles.overlay}></View>
        {/*  header */ }
        <View style={styles.header}>
          <Text style={styles.header_text}>Todo</Text>
        </View>
        {/*  tasks */ }
        <View style={{paddingHorizontal: 30}}>
          <Display tasks={task}/>
        </View>

      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: colors.bg,
    flex: 1,
  },
  overlay: {
    backgroundColor: "#000",
    flex: 1,
    opacity: 0.4,
    position: "absolute",
    height: "100%",
    width: "100%",
  },

  header:{
    paddingVertical: 20,
    alignSelf: "center",
    width: "100%",
    textAlign: "center",
  },
  header_text: {
    color: colors.accent,
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
  }
});
export default todo
