import React,{useState} from 'react'
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

const App=()=>{
  const [randomColor,setRandomColor]=useState('rgb(32,0,126)');
  const changeBG=()=>{
    let color='rgb('+
      Math.floor(Math.random()*256)+
      ','+
      Math.floor(Math.random()*256)+
      ','+
      Math.floor(Math.random()*256)+
    ')'
    setRandomColor(color)
  }
  const handleRESET=()=>{
    setRandomColor('rgb(0,0,0)')
  }
  return(
    <>
    <StatusBar backgroundColor={randomColor}/>
    <View style={[styles.container,{backgroundColor:randomColor}]}>
      <TouchableOpacity onPress={changeBG}>
    <Text style={styles.text}>Tap me</Text>
    </TouchableOpacity>
     <TouchableOpacity style={{paddingVertical:30}} onPress={handleRESET}>
    <Text style={styles.text}>Reset</Text>
    </TouchableOpacity>
    
    </View>
    </>
  )
}
export default App;

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:"center",
    paddingVertical:10
  },
  text:{
    fontSize:30,
    backgroundColor:"#BB2CD9",
    paddingVertical:10,
    paddingHorizontal:40,
    color:"#FFFFFF",
    borderRadius:15,
    textTransform:"uppercase"
  }
})