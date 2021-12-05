/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import color from "../config/color";
import Stringn from "../config/Stringn";

class Footer extends Component {
  render() {
    return (
      <View>
        <View style={styles.footer}>
          <Image source={require('../Team-Img/HostelsLightmode.png')} style={{ width: 100, height: 70 }} />

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
    paddingTop: 10,
    height: 170,
    justifyContent: "center",
    alignItems: "center",
  },
  footertext: {
    textAlign: "justify",
    color: "#fff",
    width: "100%",
    marginTop: 10,
    height: 90,
    paddingHorizontal: 10,
  },
});

export default Footer;
