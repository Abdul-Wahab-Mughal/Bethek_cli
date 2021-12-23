/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import color from "../config/color";

import Stringn from "../config/Stringn";

function Aboutus() {
  return (
    <View style={{ flex: 1,backgroundColor:color.app }}>
      <View style={styles.textborder}>
        <Text style={styles.Heading}>Our Mission</Text>
        <Text style={styles.text}>
          {Stringn.name} is a platform to provide users find an accommodation of
          their choice. The accommodation details come from various proprietors
          and owners. The user can search their preferable accommodation and
          contact directly with the proprietor / owner to lock the idea.
        </Text>

        <Text style={styles.Heading}>Our Core Principles</Text>
        <Text style={styles.text}>
          {Stringn.name} is use for view hostel in less time. All hostel is in only
          one plays. We will give all of hostel in this app.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Raleway-Regular",
    textAlign: "justify",
    paddingHorizontal: 5,
    fontSize: 18,
  },
  Heading: {
    fontFamily: "AlfaSlabOne-Regular",
    textAlign: "center",
    color: "black",
    fontSize: 24,
    padding: 15,
  },
  textborder: {
    flex: 1,
    borderWidth: 5,
    justifyContent:"center",
    backgroundColor:color.white,
    borderColor: color.black,
    margin: 20,
    paddingHorizontal: 10,
    borderRadius: 100,
  },
});

export default Aboutus;
