/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React from "react";
import { StyleSheet, View, Text, Image, Linking, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Ionicons from "react-native-vector-icons/Ionicons";
import color from "../config/color";

import Footer from "./Footer";

function Contactus() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.page}>
        {/* Give Us a Call */}
        <Image source={require('../Team-Img/HostelsDarkmode.png')} style={{ width: 150, height: 100 }} />
        <Text style={styles.heading}>GIVE US A CALL</Text>
        <Text style={styles.text}>
          We are happy to help you out
        </Text>
      </View>

      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.callMail}>
          <TouchableOpacity
            onPress={() => {
              let phoneNumber = '';
              if (Platform.OS === 'android') {
                phoneNumber = `tel:+92332-0591996`;
              } else {
                phoneNumber = `telprompt:+92332-0591996`;
              }
              Linking.openURL(phoneNumber);
            }}>
            <Ionicons name="md-call-sharp" size={24} color={color.banner} style={{ textAlign: 'center' }} />
            <Text style={styles.text}>+92332-0591996</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.callMail} >
          <TouchableOpacity onPress={() => Linking.openURL('mailto: Hostels4U@gmail.com')}>
            <Ionicons name="mail" size={20} color={color.banner} style={{ textAlign: 'center' }} />
            <Text style={styles.text}> Hostels4U@gmail.com</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  callMail: {
    marginVertical: 25,
  },
  page: {
    margin: 20,
    paddingTop: 20,
    flex: 1,
    borderWidth: 5,
    alignItems: "center",
    borderRadius: 100,
    borderColor: color.app,
  },
  contact: {
    margin: 20,
    flex: 1,
    borderWidth: 5,
    alignItems: "center",
    borderRadius: 100,
    borderColor: color.app,
  },
  text: {
    fontFamily: "Raleway-Regular",
    textAlign: "center",
    fontWeight: "300",
    fontSize: 22,
  },
  heading: {
    fontFamily: "AlfaSlabOne-Regular",
    textAlign: "center",
    fontSize: 30,
    paddingTop: 30,
  },
});

export default Contactus;
