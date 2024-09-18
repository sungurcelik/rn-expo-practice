import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [result, setResult] = useState("");

  return (
    <View style={styles.container}>
      <Text>Welcome {result}</Text>
      <Text>Name</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Your Name"
        onChangeText={setName}
        value={name}
      />
      <Text>Last Name</Text>
      <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Your Last Name"
        onChangeText={setLastName}
        value={lastName}
      />
      <Pressable
        onPress={() => setResult(name + " " + lastName)}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "gray" : "blue",
          },
          styles.button,
        ]}
      >
        <Text>Save</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInputStyle: {
    borderWidth: 1,
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: "center",
    color: "blue",
    fontWeight: "bold",
  },
  button: {
    borderWidth: 1,
    width: "80%",
    height: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
});
