import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
export default function myApp() {
  return (
    <View style={{ flex: 3 }}>
      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 50,
            marginLeft: 5,
          }}
        >
          Sign up
        </Text>
        <Image
          source={require("./assets/logo.png")}
          style={{ width: 200, height: 200, alignSelf: "center" }}
        />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 15,
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Welcome 🌹 To 💤 GetCrack Zone 💻
        </Text>
      </View>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="User Name"
            aria-label="Pak"
            style={{
              borderWidth: 1,
              padding: 10,
              margin: 10,
              borderRadius: 15,
            }}
          ></TextInput>
          <TextInput
            placeholder="Password"
            style={{
              borderWidth: 1,
              padding: 10,
              margin: 10,
              borderRadius: 15,
            }}
          ></TextInput>
          <TextInput
            placeholder="@Email.com"
            style={{
              borderWidth: 1,
              padding: 10,
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              borderRadius: 15,
            }}
          ></TextInput>

          <TouchableOpacity
            style={{
              window: "100%",
              height: 40,
              alignItems: "flex-end",
              borderRadius: 15,
              padding: 10,
            }}
          >
            <Text>Already have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              window: "100%",
              height: 40,
              backgroundColor: "red",
              alignItems: "center",
              borderRadius: 15,
              padding: 10,
              marginLeft: 10,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Create new account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text
        style={{
          alignSelf: "center",
          fontStyle: "italic",
          margin: 10,
        }}
      >
        Coded with 💞 by Iftikhar Zahid.
      </Text>
    </View>
  );
}
