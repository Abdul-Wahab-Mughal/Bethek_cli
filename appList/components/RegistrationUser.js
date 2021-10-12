/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { useState } from "react";
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";

import Footer from "./Footer";

export default function RegistrationUser({ navigation }) {


  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [passward, setpassward] = useState("");
  const [verifypassward, setverifypassward] = useState("");
  const [email, setemail] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          padding: 40,
          backgroundColor: "#10284e",
          borderBottomRightRadius: 70,
          borderBottomLeftRadius: 70,
          paddingBottom: 60,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 50,
            color: "#fff",
          }}
        >
          Register Now
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontStyle: "italic",
            fontSize: 16,
            color: "#fff",
          }}
        >
          to find an accomodation
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          padding: 10,
          flex: 1,
        }}
      >
        <View>
          <View style={{ padding: 15 }} />
          {/* Name */}
          <View>
            <Feather name="user" size={20} color="black">
              <Text> Name:</Text>
              <Text style={{ color: "red" }}>*</Text>
            </Feather>
            <TextInput
              placeholder="Enter Name"
              style={styles.TextInput}
              onChangeText={(text) => setfullname(text)}
            />
          </View>
          <View style={{ padding: 15 }} />
          {/* username */}
          <View>
            <Feather name="user" size={20} color="black">
              <Text> Username:</Text>
              <Text style={{ color: "red" }}>*</Text>
            </Feather>
            <TextInput
              placeholder="Enter Username"
              style={styles.TextInput}
              onChangeText={(text) => setusername(text)}
            />
          </View>
          <View style={{ padding: 15 }} />
          {/* Emaill */}
          <View>
            <Fontisto name="email" size={20} color="black">
              <Text> Email:</Text>
              <Text style={{ color: "red" }}>*</Text>
            </Fontisto>
            <TextInput
              placeholder="Enter Email"
              style={styles.TextInput}
              onChangeText={(text) => setemail(text)}
            />
          </View>
          <View style={{ padding: 15 }} />

          {/* Password */}
          <View>
            <Feather name="lock" size={20} color="black">
              <Text> Password:</Text>
              <Text style={{ color: "red" }}>*</Text>
            </Feather>
            <TextInput
              placeholder="Enter Password"
              style={styles.TextInput}
              onChangeText={(text) => setpassward(text)}
            />
          </View>
          <View style={{ padding: 15 }} />
          {/* Verify Password */}
          <View>
            <Feather name="lock" size={20} color="black">
              <Text> Verify Password:</Text>
              <Text style={{ color: "red" }}>*</Text>
            </Feather>
            <TextInput
              placeholder="Verify Password"
              style={styles.TextInput}
              onChangeText={(text) => setverifypassward(text)}
            />
          </View>
          <View style={{ padding: 15 }} />

          {/* Register Button */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (passward === verifypassward) {
                try {
                  fetch("http://3.135.209.144:8000/ep/register_user", {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      full_name: fullname,
                      username: username,
                      password: passward,
                      email: email,
                    }),
                  });
                } catch (e) {
                  console.log(e);
                }
                navigation.navigate("Home");
              } else {
                alert("Your passward is not valid");
              }
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              SUBMIT
            </Text>
          </TouchableOpacity>

          {/*  */}
        </View>
      </View>
      <View>
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#10284e",
    padding: 12,
    width: 240,
    borderRadius: 80,
    left: 45,
  },
  TextInput: {
    height: 40,
    margin: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 80,
    color: "black",
  },
});
