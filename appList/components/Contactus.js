/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React from "react";
import {
  StyleSheet, View, Text, ScrollView,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import Footer from "./Footer";
import Stringn from "../config/Stringn";

function Contactus() {
  return (
    <ScrollView>
      <View>
        <View style={styles.Icon}>
          <MaterialCommunityIcons name="home" size={150} color="black" />
        </View>

        <View style={styles.page}>
          {/* Give Us a Call */}
          <View style={styles.container1}>
            <Text style={styles.heading}>GIVE US A CALL</Text>
            <Text style={styles.text}>
              We are happy to help you out
            </Text>
          </View>

          <View style={styles.call}>
            <Ionicons name="md-call-sharp" size={24} color="blue" paddingBottom="20"> +92334-1834367</Ionicons>
          </View>
          <View style={styles.address}>
            <Ionicons name="home" size={20} color="green"> ORIC Office H-block room-12</Ionicons>
          </View>
          <View style={styles.mail}>
            <Ionicons name="mail" size={20} color="red"> {Stringn.name}.contact@gmail.com </Ionicons>
          </View>
        </View>

        <View style={{ paddingTop: 50 }}>
          <Footer />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  call: {
    justifyContent: "space-evenly",
    flex: 1,
    paddingTop: 88,
  },
  address: {
    justifyContent: "space-evenly",
    flex: 1,
    paddingTop: 30,
  },
  mail: {
    justifyContent: "space-evenly",
    flex: 1,
    paddingTop: 30,
  },
  Icon: {
    justifyContent: "center",
    textAlign: "center",
    paddingTop: 30,
    flexDirection: "column",
    paddingBottom: 30,
    alignItems: "center",
  },
  page: {
    padding: 10,
    flex: 1,
    paddingBottom: 5,
  },
  text: {
    textAlign: "center",
    fontWeight: "300",
    fontSize: 20,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  container1: {
    paddingTop: 40,
    paddingBottom: 20,
  },
});

export default Contactus;
