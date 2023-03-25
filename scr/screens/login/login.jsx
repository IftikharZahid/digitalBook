import { View, TextInput, StyleSheet, Button, Text , TouchableOpacity} from 'react-native';
import { Register } from '../register/register';


function Login({navigation}){

const goToRegister=()=>{
      
navigation.navigate(Register)

  }

  return (
  
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email/User Name"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry 
      />
      
      <Button title="Signin " />
      <TouchableOpacity>
      <Text style={{ marginTop:10}} onPress={goToRegister} > Don't have an aacount?</Text>
      </TouchableOpacity>
    



</View>

  );
};

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
    width: '80%',
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
});
export {Login};