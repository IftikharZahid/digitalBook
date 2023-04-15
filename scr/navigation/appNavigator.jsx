import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Login } from "../screens/login/login";
import { Register } from "../screens/register/register";
import { Main } from "../screens/main/main";
import { Map } from "../screens/map/map";
import {Settings} from "../screens/settings/settings"

function AppNavigator({navigation}) {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Settings" component={Settings} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppNavigator };