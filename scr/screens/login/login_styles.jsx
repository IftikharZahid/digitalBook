import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
      flex:1, 
      
    justifyContent: 'center',
    alignItems: 'center',
    
      
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:20
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10,
    width: '85%',
    color:'black'
  },
  passwordCon:{
    alignItems:'center',
    flexDirection:'row',
    borderRadius: 4,
    borderWidth:1,    
    borderColor: 'black',    
    padding: 9,
    marginVertical: 10,

  },
  passwordInput:{
    width: '77%',
    color:'black'

  },
  gButton: {
    margin:10,
    height:40,
    width:120,
    alignItems:'center',
    borderRadius:10,
    borderWidth:1,
    justifyContent:'center',
    backgroundColor:'green',
  },

  background: {
    flex: 1,
    resizeMode: 'center', // or 'stretch'
  },

  paddings:{
  backgroundColor:'purple',
  borderRadius:10,
  padding:15,
  },
  outer:{
    alignSelf:'center',
    justifyContent:'center',

  }
});
export {styles};

