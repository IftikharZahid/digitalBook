import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text , ActivityIndicator } from 'react-native';
import { Main } from '../main/main';
import Spinner from "react-native-loading-spinner-overlay";
import { auth } from "../../services/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";



function Register({navigation}){

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitPress=()=>{

    createUserWithEmailAndPassword (auth, email, password).then(response=>{
      alert("All is Good")
    })
    .catch((error) =>{
      alert(error.message);
    });

  }

  const onSubmit = () => {
    if (firstName === "") {
      alert("please enter first name");
      return;
    }

    if (lastName === "") {
      alert("please enter last name");

      return;
    }

    if (email === "") {
      alert("please enter email");
      return;
    }

    if (password === "") {
      alert("please enter password");
      return;
    }
    if (confirmPassword === "") {
      alert("please enter confirm password");
      return;
    }
    if (confirmPassword !== password) {
      alert("passwords dont match");
      return;
    }

    
setLoading(true);
navigation.navigate(Main)
setLoading(false);
  }

  return (
    
    <View style={styles.container}>

      <Text style={styles.title}>Registration Page</Text>
      <TextInput
        onChangeText={setFirstName}
        style={styles.input}
        placeholder="firstName"
      />
      <TextInput
      onChangeText={setLastName}
        style={styles.input}
        placeholder="lastName"
      />
      <TextInput
      onChangeText={setEmail}
        style={styles.input}
        placeholder="email"
      />
       
      <TextInput
      onChangeText={setPassword}
        style={styles.input}
        placeholder="password"
        secureTextEntry
        
      />
      <TextInput
      onChangeText={setConfirmPassword}
        style={styles.input}
        placeholder="confirmPassword"
        secureTextEntry
      
      />
      <Button title="Signup " onPress={onSubmitPress} />

<View>
<Spinner visible={loading} textContent={"Loading..."} />
</View>

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