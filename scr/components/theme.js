import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:"white",
      marginTop:50
    },
  text: {
      color: '#025BA0',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center', 
      marginTop: 5,
      fontSize:25
    },
    textInput:{
      borderRadius:50,
      padding: 10,
      marginHorizontal:20,
      backgroundColor: '#e8e8e8',
      borderWidth:1,
      marginVertical:5
    },
    buttons:{
      fontSize: 18,
      backgroundColor:'#025BA0',
      borderRadius:20,
      height:"30%",
      width:"40%",
      marginHorizontal:2,
      alignItems:'center',
      justifyContent:'center',
      marginTop:5,
    },
  
  });
  export {styles};