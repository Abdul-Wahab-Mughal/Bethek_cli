/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React from "react";
import {
  StyleSheet, View, Text, SafeAreaView, ScrollView,
} from "react-native";
import Stringn from "../config/Stringn";

import Footer from "./Footer";

function Aboutus() {
  return (
    <SafeAreaView>
      <ScrollView >
        <View>
          <Text style={styles.Heading}>Welcome To {Stringn.name}</Text>
        </View>
        <View>
          <Text style={styles.text}>
            {Stringn.name} is a platform to provide users find an accommodation of
            their choice. The accommodation details come from various
            proprietors and owners. The user can search their preferable
            accommodation and contact directly with the proprietor/owner to
            lock the idea.
          </Text>
        </View>
        <View>
          <Text style={styles.Heading}>Our Mission</Text>
        </View>
        <View>
          <Text style={styles.text}>
            {Stringn.name} is a platform to provide users find an accommodation of
            their choice. The accommodation details come from various
            proprietors and owners. The user can search their preferable
            accommodation and contact directly with the proprietor/owner to
            lock the idea.
          </Text>
        </View>
        <View>
          <Text style={styles.Heading}>Our Core Principles</Text>
        </View>
        <View>
          <Text style={styles.text}>
            {Stringn.name} is a platform to provide users find an accommodation of
            their choice. The accommodation details come from various
            proprietors and owners. The user can search their preferable
            accommodation and contact directly with the proprietor/owner to
            lock the idea.
          </Text>
        </View>

        <View style={{ paddingTop: 27 }}>
          <Footer />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#20c997",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  picture: {
    width: 150,
    height: 150,
    justifyContent: "space-around",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "justify",
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },

  Heading: {
    textAlign: "center",
    flexDirection: "column",
    color: "black",
    fontSize: 24,
    justifyContent: "center",
    fontWeight: "bold",
    padding: 25,
  },
  title: {
    textAlign: "center",
    flexDirection: "column",
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#10284e",
    height: 100,
    paddingTop: 38,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  mainfooter: {
    backgroundColor: "#10284e",
    height: 30,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Aboutus;
