import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1.5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      padding: 10,
      marginVertical: 10,
      width: '85%',
    },
    passwordCon:{
      alignItems:'center',
      flexDirection:'row',
      borderRadius: 4,
      borderWidth:1,    
      borderColor: '#ccc',    
      padding: 9,
      marginVertical: 10,
  
    },
    passwordInput:{
      width: '80%',
  
    }
  
  });
export {styles};