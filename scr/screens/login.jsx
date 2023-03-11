import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, BButton , ScrollView, TextInput,setEmail,setPassword} from "react-native";

function onLoginPressed(navigation){
  const onPressed=()=>{
    alert ("Hi")
  };   
return(
<ScrollView>
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          height: "100%",
        }}
      >
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
          placeholder={"email"}
          // onChangeText={(text) => setEmail(text)}
          onChangeText={setEmail}
        />
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
          placeholder={"password"}
          secureTextEntry={true}
          // onChangeText={(text) => setPassword(text)}
          onChangeText={setPassword}
        />

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <BButton text={"Login"} onButtonPress={onLoginPressed} />
          <BButton text={"Login1 "} onButtonPress={onLoginPressed} />
          <BButton text={"Login2"} onButtonPress={onLoginPressed} />
          <BButton text={"Login3"} onButtonPress={onLoginPressed} />
        </ScrollView>
      </View>
    </ScrollView>

);
}
export  {Login};