/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable quotes */

import React from "react";
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView,
} from "react-native";

import Footer from "./Footer";

RegistrationAdmin = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        {/* Title */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Title: </Text>

          <TextInput placeholder="Enter Title" placeholderTextColor="black" style={styles.TextInput} />
        </View>

        {/* Address */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Address:</Text>

          <TextInput placeholder="Enter Address" placeholderTextColor="black" style={styles.TextInput} />
        </View>

        {/* City */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> City:</Text>

          <TextInput placeholder="Enter City" placeholderTextColor="black" style={styles.TextInput} />
        </View>

        {/* Nearby University */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Nearby University:
          </Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Nearby University"
            style={styles.TextInput}
          />
        </View>

        {/* Zipcode */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Zipcode:</Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Zipcode"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* description */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> description:</Text>

          <TextInput placeholder="Enter Description" placeholderTextColor="black" style={styles.TextInput} />
        </View>
        {/* Price */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Price:</Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Price"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Seater */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Seater:</Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Seater"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Bathroom */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Bathroom:</Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Bathroom"
            style={styles.TextInput}
            keyboardType="numeric"
          />
        </View>
        {/* Hostel Type */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Hostel Type:</Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Hostel Type:"
            style={styles.TextInput}
          />
        </View>
        {/* Food Facility */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Food Facility:
          </Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Food Facility:"
            style={styles.TextInput}
          />
        </View>
        {/* Laundary Facility */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Laundary Facility:
          </Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Laundary Facility"
            style={styles.TextInput}
          />
        </View>
        {/* Internet Facility  */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>
            {" "}
            Internet Facility:
          </Text>

          <TextInput
          placeholderTextColor="black"
            placeholder="Enter Internet Facility"
            style={styles.TextInput}
          />
        </View>
        {/* Date */}
        <View style={{ padding: 15 }} />
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}> Date:</Text>

          <TextInput placeholder="Enter Date" placeholderTextColor="black" style={styles.TextInput} />
        </View>

        <View style={{ padding: 15 }} />
        {/* Register Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("AddImg")}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            Add Images
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ paddingTop: 30 }}>
        <Footer />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#228b22",
    padding: 12,
    width: 200,
    borderRadius: 80,
    left: 90,
    right: 55,

  },
  TextInput: {
    position: "absolute",
    borderBottomWidth: 1,
    left: 160,
    width: 200,
    fontSize: 14,
    margin: 0,
    color: "black",
  },
});

export default RegistrationAdmin;
