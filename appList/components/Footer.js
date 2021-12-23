/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import color from "../config/color";

class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Image source={require('../Team-Img/HostelsLightmode.png')} style={{ width: 100, height: 70 }} />

        <Text style={styles.footertext}>
          Providing affortable &
          accessible accomodation
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: color.banner,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  footertext: {
    fontFamily: "Raleway-Regular",
    color: "#fff",
    fontSize: 15,
    paddingHorizontal: 10,
  },
});

export default Footer;
