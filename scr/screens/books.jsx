import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";

const booksData = [
  { title: "my book 1", subtitle: " subtitle 1 " },
  { title: "my book 2", subtitle: " subtitle 2 " },
  { title: "my book 3", subtitle: "subtitle 3" },
  { title: "my book 4", subtitle: "subtitle 4" },
  { title: "my book 5", subtitle: "subtitle 5" },
  { title: "my book 6", subtitle: "subtitle 6" },
  { title: "my book 7", subtitle: "subtitle 7" },
  { title: "my book 8", subtitle: "subtitle 8" },
  { title: "my book 9", subtitle: "subtitle 9" },
];

function Books({ navigation }) {
  useEffect(() => {
    console.log("constructor");
    console.log("constructor");
  });

  useEffect(() => {
    console.log("mount");
  }, []);

  useEffect(() => {
    return console.log("unmount");
  });

  const __renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: "rgba(212,22,240,0.5)",
        borderRadius: 20,
      }}
      onPress={() => navigation.navigate("bookDetails", { data: item })}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
        {item.title}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: "medium", color: "white" }}>
        {item.subtitle}
      </Text>
    </TouchableOpacity>
  );

  return <FlatList data={booksData} renderItem={__renderItem} />;
}

export { Books };