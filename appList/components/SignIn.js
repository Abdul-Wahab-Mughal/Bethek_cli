/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */


/**
 *
 *         Signin
 *
 *  react native cli code
 *
 */


import React, { useState } from "react";
import {
  View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";

import color from "../config/color";
import Footer from "./Footer";

function SignIn({ navigation }) {

  // hide && show Password
  const [PassShow, setPassShow] = useState(true);

  // Text empty alert
  const [usernameshow, setusernameshow] = useState(false);
  const [passwordshow, setpasswordshow] = useState(false);

  // Get a Textinput
  const [username, setuserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitPress = async () => {
    //username check
    if (!username.trim()) {
      setusernameshow(true);
    } else {
      setusernameshow(false);
    }
    //Password check
    if (!password.trim()) {
      setpasswordshow(true);
    } else {
      setpasswordshow(false);
    }

    // Sign In code Here ...
    if (username.trim() && password.trim()) {
      await fetch('http://3.135.209.144:8000/ep/login_user', {
        method: 'POST',           //Login
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'username': username,
          'password': password,
        }),
      }).then(res => res.json())  //resposne
        .then(resJson => {
          console.log("Successfull : " + JSON.stringify(resJson));
          alert("Successful : " + JSON.stringify(resJson));
        })
        .catch((error) => console.log("there is a error on internet : " + error));
    }
  };

  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.Icon}>
          <MaterialCommunityIcons name="home" size={150} color="black" />
        </View>
        {/** User name */}
        <View >
          <View>
            <Feather name="user" size={20} color="black" paddingTop="30" alignContent="center" alignItems="center"
              justifyContent="center">
              <Text> UserName:</Text>
            </Feather>
            {usernameshow === true ?
              <Text style={{ height: 20, top: 5, color: "red" }} > Please Enter the UserName</Text> :
              <View style={{ padding: 10 }} />}
            <TextInput
              placeholderTextColor="black"
              placeholder="Enter UserName"
              style={styles.TextInput}
              color="#000"
              onChangeText={(text) => setuserName(text)}
            />
          </View>
          <View style={{ padding: 5 }} />
        </View>
        {/** Password*/}
        <View >
          <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Feather name="lock" size={20} color="black">
                <Text> Password:</Text>
              </Feather>

              <TouchableOpacity onPress={() => { setPassShow(!PassShow); }} style={{ right: 15 }} >
                <MaterialCommunityIcons name={PassShow === false ? "eye" : "eye-off"} size={20} color="black" />
              </TouchableOpacity>
            </View>
            {passwordshow === true ?
              <Text style={{ height: 20, top: 5, color: "red" }} > Please Enter the Password </Text> :
              <View style={{ padding: 10 }} />}
            <TextInput
              placeholderTextColor="black"
              placeholder="Enter Password"
              style={styles.TextInput}
              color="#000"
              secureTextEntry={PassShow}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={{ padding: 5 }} />
        </View>

      </View>
      <View style={styles.signInButton}>
        <TouchableOpacity style={styles.Button} onPress={handleSubmitPress}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            textAlign: "center",
            justifyContent: "center",
            paddingTop: 50,
          }}
        >
          For New Users and Owners</Text>
      </View>

      {/* 2nd last button */}
      <View style={{
        paddingTop: 10, alignContent: "center", alignItems: "center",
        justifyContent: "center",
      }}>
        <TouchableOpacity onPress={() => navigation.push("User")}>
          <Text style={styles.RegisterButton}>
            Register for User
          </Text>
        </TouchableOpacity>
      </View>

      {/* last button */}
      <View style={{
        paddingTop: 10, alignContent: "center", alignItems: "center",
        justifyContent: "center",
      }}>
        <TouchableOpacity onPress={() => navigation.push("Admin")}>
          <Text style={styles.RegisterButton}>
            Register for Owner
          </Text>
        </TouchableOpacity>
      </View>


      <View style={{ paddingTop: 20, paddingBottom: 1 }}>
        <Footer />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Icon: {
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  Container: {
    padding: 10,
    flex: 1,
    paddingBottom: 5,
  },
  signInButton: {
    paddingTop: 10,
  },
  Button: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#10284e",
    padding: 12,
    width: 240,
    borderRadius: 80,
    left: 62,
  },
  RegisterButton: {
    color: color.banner,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 24,
  },
  TextInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 40,
    color: "black",
  },
});

export default SignIn;
