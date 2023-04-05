import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import axios from "axios";
import { Map } from "../map/map";
import { Settings } from "../settings/settings";

function Main({ navigation }) {
  const [users, setUsers] = useState();

  useEffect(() => {
    // fetch is a power in nodejs that helps you
    // to do api calls ( its week but it works )

    // fetch("https://api.github.com/users", {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsers(data);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //   });

    axios
      .get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {});
  }, []);

  const __renderItem = ({ item }) => (
    <View
      style={{
        padding: 10,
        margin: 10,
        flexDirection: "row",
      }}
    >
      <Image
        style={{ width: 100, height: 100, borderRadius: 50, marginRight: 5 }}
        src={item.avatar_url}
      />
      <View>
        <Text style={{ fontSize: 20 }}>{item.id}</Text>
        <Text style={{ fontSize: 20 }}>{item.login}</Text>
        <Text style={{ fontSize: 20 }}>{item.followers_url}</Text>
      </View>
    </View>
  );

  const goToSettings = () => {
    navigation.navigate(Settings);
  };

  const goToMap = () => {
    navigation.navigate(Map);
  };

  return (
    <View style={{ justifyContent: "center", flex: 1, marginTop: 30 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <TouchableOpacity
          onPress={goToSettings}
          style={{ alignSelf: "flex-end", marginRight: 5 }}
        >
          <Ionicons name={"settings"} size={35} color={"orange"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goToMap}
          style={{ alignSelf: "flex-end", marginRight: 5 }}
        >
          <Ionicons name={"location"} size={35} color={"orange"} />
        </TouchableOpacity>
      </View>
      <FlatList data={users} renderItem={__renderItem} />

      {/* <Text>main</Text>
      <View style={{ flexDirection: "row" }}>
        <Button primary title={"Log out"} onPress={attemptToLogout} />
      </View> */}
    </View>
  );
}

export { Main };