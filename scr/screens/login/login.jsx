import { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity } from "react-native";
import { Register } from "../register/register";
import { styles } from "./login_styles";
import { Ionicons } from "@expo/vector-icons";
import { Main } from "../main/main";

function Login({ navigation }) {
  const [showPassword, setShowPassword] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [Alert, setAlert] = useState();


  const onEyePressed = () => {
    if (showPassword === true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }

    if (Alert === true) {
      setAlert(false);
    } else {
      setAlert(true);
    }

  };
  const userSigned = () => {

    if (email === "") {
      alert("Enter Email/User Name.");
      return;
    }
    if (password === "") {
      alert("Enter Password");
      return;
    }
   navigation.navigate(Main)
  };

  const goToRegister = () => {
    navigation.navigate(Register);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />

      <View style={styles.passwordCon}>
        <TextInput
          style={styles.passwordInput}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={showPassword}
        />

        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color={showPassword ? "orange" : "black"}
          onPress={onEyePressed}
        />
      </View>

      <Text
        style={{
          alignSelf: "flex-start",
          marginLeft: 30,
          marginBottom: 10,
          color: "red",
        }}
     
      >
        {"⚠ Password is shown ⚠"}
      </Text>

      <Button title="Signin " onPress={userSigned} />
      <TouchableOpacity>
        <Text style={{ marginTop: 10 }} onPress={goToRegister}>
          {"Don't have an aacount?"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export { Login };
