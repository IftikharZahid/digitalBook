import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      padding:20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'purple',
      borderRadius: 4,
      padding: 10,
      marginVertical: 10,
      width: '85%',
      backgroundColor:'white',
      opacity:0.8
    },
    passwordCon:{
      alignItems:'center',
      flexDirection:'row',
      borderRadius: 4,
      borderWidth:1,    
      borderColor: 'purple',    
      padding: 9,
      marginVertical: 10,
      backgroundColor:'white',
      opacity:0.8
  
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
    background: {
      flex: 1,
      resizeMode: 'center', // or 'stretch'
    },
    passwordInput:{
      width: '78%',
    },
    paddings:{
      backgroundColor:'purple',
      borderRadius:10,
      padding:15,
      
    
      },
  
  });
export {styles};