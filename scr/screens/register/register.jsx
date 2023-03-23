import { View, TextInput, StyleSheet, Button, Text } from 'react-native';
import { Main } from '../main/main';


function Register({navigation}){

const goToLogin=()=>{
  alert('User Registered');
navigation.navigate(Main)

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Page</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
       
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        
      />
      <Button title="Signup " onPress={goToLogin} />
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
});
export {Register};