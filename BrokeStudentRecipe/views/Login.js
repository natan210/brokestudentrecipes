import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import { login } from "../db.js";
import Lottie from "lottie-react-native";
import { FONTS, COLORS, SIZES, mockData } from "../essentials";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //functions to validate text input

  return (
    <View style={styles.container}>
      <Text style={styles.name}>&lt;AppName.&gt;</Text>
      <Lottie
        style={styles.lottie}
        source={require("../assets/lottie/landingLottie.json")}
        autoPlay
        loop
      />
      {/* <Text style={styles.title}>Login</Text> */}
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
        onPress={async () => {
          //if valid allow login
          if (email.length == 0 || password.length == 0) {
            Alert.alert("Email or password cannot be empty!");
          } else {
            var errorMessage = await login(email, password);
            if (errorMessage === "notFound") {
              Alert.alert("Invalid Email or Password");
            } else if (errorMessage == null) {
              navigation.navigate("Home", {});
            } else {
              Alert.alert("Oops! Something went wrong");
            }
          }
        }}
        buttonStyle={styles.loginButton}
        title="Login"
        titleStyle={styles.loginButtonFont}
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate("Register", {});
        }}
        type="clear"
        title="Don't have an account? Register here!"
        titleStyle={styles.toRegisterFont}
        buttonStyle={{ margin: 0, padding: 0, alignItems: "flex-start" }}
      ></Button>
    </View>
  );
};

export default Login;

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

  loginButtonFont: {
    fontSize: SIZES.body3,
    fontWeight: "semi-bold",
  },
  toRegisterFont: {
    fontSize: SIZES.body4,
    fontWeight: "semi-bold",
  },
  loginButton: {
    minWidth: "60%",
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
    backgroundColor: COLORS.salmon,
    borderRadius: 8,
  },
});
