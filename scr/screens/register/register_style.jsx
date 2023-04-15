import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    pickImageCon: {
      width: 100,
      height: 100,
      borderRadius: 10,
      alignSelf: 'center',
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100
  
    },

Button:{
marginTop:10

}
    ,
  
    passwordInput:{
      width: '78%',
    }
  
  });
export {styles};