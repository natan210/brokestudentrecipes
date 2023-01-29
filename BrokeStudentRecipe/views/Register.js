import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { login } from "../db.js";
import Lottie from "lottie-react-native";
import { FONTS, COLORS, SIZES, mockData } from "../essentials";

const Register = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const validateEmail = (email) => {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };
  const validatePassword = (password) => {
    var re = /^.{6,}$/;
    return re.test(password);
  };
  let user = { name, email };
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.name}>&lt;AppName.&gt;</Text>
      <Lottie
        style={styles.lottie}
        source={require("../assets/lottie/landingLottie.json")}
        autoPlay
        loop
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(newText) => setName(newText)}
        defaultValue={name}
      ></TextInput>
      {/* <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
      ></TextInput> */}
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        onChangeText={(newText) => setEmail(newText)}
        defaultValue={email}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        onChangeText={(newText) => setPassword(newText)}
        defaultValue={password}
      ></TextInput>
      <Button
        //   TODO: add function to navigate to home page
        onPress={() => {
          if (!validateEmail(email)) {
            Alert.alert("Not a valid email");
          } else if (!validatePassword(password)) {
            Alert.alert("Passwords must be at least 6 characters long");
          } else {
            register(email, password, user);
            //TODO: add navigation to homepage here
          }
        }}
        buttonStyle={styles.registerButton}
        title="Sign up"
        titleStyle={styles.registerButtonFont}
      ></Button>
      <Button
        onPress={() => {
          navigation.pop();
        }}
        type="clear"
        title="Already have an account? Login!"
        titleStyle={styles.toLoginFont}
        buttonStyle={{ margin: 0, padding: 0, alignItems: "flex-start" }}
      ></Button>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  name: {
    marginTop: 16,
    marginBottom: 20,
    fontFamily: "RobotoMono-Regular",
    fontSize: SIZES.h1,
    fontWeight: "bold",
    color: COLORS.salmon,
  },
  title: {
    alignSelf: "flex-start",
    marginHorizontal: "20%",
    marginTop: 16,
    fontSize: SIZES.h3,
    fontWeight: "bold",
    color: COLORS.gray,
  },
  container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: 250,
    height: 250,
  },
  input: {
    minWidth: "60%",
    padding: 16,
    marginTop: 16,
    // border
    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 8,
  },

  registerButtonFont: {
    fontSize: SIZES.body3,
    fontWeight: "semi-bold",
  },
  toLoginFont: {
    fontSize: SIZES.body4,
    fontWeight: "semi-bold",
  },
  registerButton: {
    minWidth: "60%",
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    backgroundColor: COLORS.salmon,
    borderRadius: 8,
  },
});
