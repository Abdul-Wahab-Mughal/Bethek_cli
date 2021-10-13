/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import color from "../config/color";
import Stringn from "../config/Stringn";

class Footer extends Component {
  render() {
    return (
      <View>
        <View style={styles.footer}>
          <MaterialCommunityIcons name="home" size={50} color="#fff" />
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {Stringn.name}
          </Text>
          <Text style={styles.footertext}>
            {Stringn.name} is a platform to provide users find an accommodation of their
            choice. The accommodation details come from various proprietors and
            owners. The user can search their preferable accommodation and
            contact directly with the proprietor/owner to lock the idea.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: color.banner,
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  footertext: {
    textAlign: "justify",
    color: "#fff",
    width: "100%",
    height: 90,
    paddingHorizontal: 10,
  },
});

export default Footer;
