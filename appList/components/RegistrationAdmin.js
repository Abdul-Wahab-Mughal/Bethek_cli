/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { Component } from "react";

import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
} from "react-native";

import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";

import Footer from "./Footer";

export default class RegistrationAdmin extends Component {


  render() {


    return (
      <ScrollView style={styles.container}>
        <View
          style={{
            padding: 40,
            backgroundColor: "#10284e",
            borderBottomRightRadius: 70,
            borderBottomLeftRadius: 70,
            paddingBottom: 50,
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
            to become a hostel owner.
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
              </Feather>
              <TextInput placeholder="Enter Name" style={styles.TextInput} />
            </View>
            <View style={{ padding: 15 }} />
            {/* Number */}
            <View>
              <Feather name="phone-call" size={20} color="black">
                <Text> Number:</Text>
              </Feather>
              <TextInput placeholder="Enter Number" style={styles.TextInput} />
            </View>
            <View style={{ padding: 15 }} />
            {/* Emaill */}
            <View>
              <Fontisto name="email" size={20} color="black">
                <Text> Email:</Text>
              </Fontisto>
              <TextInput placeholder="Enter Email" style={styles.TextInput} />
            </View>
            <View style={{ padding: 15 }} />
            {/* username */}
            <View>
              <Feather name="user" size={20} color="black">
                <Text> Username: </Text>
                <Text style={{ color: 'red' }}>*</Text>
              </Feather>
              <TextInput placeholder="Enter Username" style={styles.TextInput} />
            </View>
            <View style={{ padding: 15 }} />
            {/* Password */}
            <View>
              <Feather name="lock" size={20} color="black">
                <Text> Password: </Text>
                <Text style={{ color: 'red' }}>*</Text>
              </Feather>
              <TextInput
                placeholder="Enter Password"
                style={styles.TextInput}
              />
            </View>
            <View style={{ padding: 15 }} />
            {/* Verify Password */}
            <View>
              <Feather name="lock" size={20} color="black">
                <Text> Verify Password: </Text>
                <Text style={{ color: 'red' }}>*</Text>
              </Feather>
              <TextInput
                placeholder="Verify Password"
                style={styles.TextInput}
              />
            </View>
            <View style={{ padding: 15 }} />
            {/* Address */}
            <View>
              <Ionicons name="location-outline" size={20} color="black">
                <Text> Enter Address: </Text>
              </Ionicons>
              <TextInput
                placeholder="Enter Address"
                style={styles.TextInput}
              />
            </View>
            <View style={{ padding: 15 }} />

            {/* Upload your image */}
            <View>
              <Feather name="image" size={20} color="black">
                <Text> Upload your image: </Text>
              </Feather>
              <View style={{ paddingTop: 5 }}>
                <TouchableOpacity
                  style={{
                    padding: 12,
                    justifyContent: "center",
                    alignContent: "center",
                    backgroundColor: "#228b22",
                    width: 180,
                    borderRadius: 80,
                    alignItems: "center",
                    left: 90,
                  }}
                  onPress={() => this.props.navigation.navigate("AddImg")}
                >
                  <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff", justifyContent: "center", alignContent: "center" }}>
                    Add Images
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
        {/* Register Button */}
        <View style={{ paddingBottom: 20, paddingTop: 35 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
              SUBMIT
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Footer />
        </View>
      </ScrollView>
    );
  }
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
    left: 62,
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
