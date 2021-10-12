/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import React, { useState, useEffect } from "react";

import {
  Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, Linking,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from "../components/Footer";
import color from "../config/color";

export default Data = ({ route }) => {
  const id = route.params.id;
  const title = route.params.title;
  const location = route.params.location;
  const address = route.params.address;
  const city = route.params.city;
  const zipcode = route.params.zipcode;
  const description = route.params.description;
  const price = route.params.price;
  const seater = route.params.seater;
  const bathrooms = route.params.bathrooms;
  const hostel_type = route.params.hostel_type;
  const available = route.params.available;
  const photo_main = route.params.photo_main;
  const photo_1 = route.params.photo_1;
  const photo_2 = route.params.photo_2;
  const photo_3 = route.params.photo_3;
  const photo_4 = route.params.photo_4;
  const photo_5 = route.params.photo_5;
  const photo_6 = route.params.photo_6;
  const is_published = route.params.is_published;
  const list_date = route.params.list_date;
  const owner = route.params.owner;
  const nearby_universities = route.params.nearby_universities;
  const utilities = route.params.utilities;

  const [usercontact, setusercontact] = useState();
  const [username, setusername] = useState();
  useEffect(() => {
    fetch(`http://3.135.209.144:8000/ep/owners-all/${owner}`)
      .then((resp) => resp.json())
      .then((data) => {
        setusercontact(data.phone);

        fetch(`http://3.135.209.144:8000/ep/pusers-all/${data.user}`)
          .then((resp) => resp.json())
          .then((datas) => {
            setusername(datas.username);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  });


  return (
    <ScrollView>
      <View>
        <Image source={{ uri: photo_main }} style={styles.picture} />
      </View>

      <View style={styles.container}>
        {/* Data */}
        <View>
          <View style={styles.heading}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ fontSize: 20 }}>
              {hostel_type}
              {"\n"}
            </Text>
            <Text style={styles.price}>
              Rs: {price}
              {"/-"}
            </Text>
          </View>
          <View style={styles.addresshead}>
            <Ionicons name="location" size={22} color="#000000" style={{}}>
              <Text style={{ fontSize: 16 }}>{address}</Text>
            </Ionicons>
            <Text style={styles.address}>
              {city} {location}
            </Text>
          </View>

        </View>
        {/* Nearest Institution*/}
        <View style={{ paddingTop: 30 }} />
        <View style={styles.institutes}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Nearby Institutions:
          </Text>
          <Text style={{ fontSize: 16 }}>{nearby_universities}</Text>
        </View>
        {/* Details */}
        <View style={{ padding: 15 }} />
        <View style={styles.details}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Details: </Text>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <MaterialCommunityIcons
                name="bed"
                size={20}
                color="#000000"
                style={{ position: "absolute", left: 70 }}
              >
                {" "}
                Seater
              </MaterialCommunityIcons>

              <Text style={{ fontSize: 18 }}>
                {"                    "}|{"       "}
                {seater}
              </Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <MaterialCommunityIcons
                name="shower"
                size={20}
                color="#000000"
                style={{ position: "absolute", left: 70 }}
              >
                {" "}
                Bathroom
              </MaterialCommunityIcons>

              <Text style={{ fontSize: 18 }}>
                {"                    "}|{"       "}
                {bathrooms}
              </Text>
            </View>
          </View>
        </View>
        {/*  */}
        {/* Utilities */}
        <View style={{ padding: 15 }} />
        <View style={styles.details}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}> Utilities : </Text>
          <View
            style={{
              flexDirection: "column",
              paddingLeft: 25,
            }}
          >
            <Text>{utilities}</Text>
          </View>
        </View>
        {/*  */}
        {/* Discription */}
        <View style={{ padding: 15 }} />
        <View style={styles.discription}>
          <Text style={{ fontSize: 20, paddingBottom: 5, fontWeight: "700" }}>
            Discription:{" "}
          </Text>

          <Text style={{ fontSize: 16 }}>{description}</Text>
        </View>
        {/* Realtor */}
        <View style={{ paddingTop: 30 }} />
        <View style={styles.realtor}>
          <Image
            style={styles.picturerealtor}
            source={require("../Team-Img/user.png")}
          />
          <Text
            style={{
              position: "absolute",
              left: 120,
              top: 25,
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            {username}
          </Text>
          <Text
            style={{ position: "absolute", left: 120, top: 45, fontSize: 14 }}
          >
            Realtor
          </Text>
          {/* Call Button */}
          <TouchableOpacity
            onPress={() => {
              let phoneNumber = "";
              if (Platform.OS === "android") {
                phoneNumber = `tel:${usercontact}`;
              } else {
                phoneNumber = `telprompt:${usercontact}`;
              }
              Linking.openURL(phoneNumber);
            }}
            style={{
              position: "absolute",
              right: 20,
              top: 16,
              fontSize: 14,
              borderWidth: 2,
              borderRadius: 80,
              padding: 3,
              backgroundColor: color.app,
            }}
          >
            <Ionicons name="md-call-sharp" size={28} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              position: "absolute",
              right: 12,
              bottom: 25,
              fontSize: 14,
            }}
          >
            Published On:
          </Text>
          <Text
            style={{
              position: "absolute",
              right: 12,
              bottom: 10,
              fontSize: 14,
            }}
          >
            {list_date}
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 30 }}>
        <Footer />
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    fontSize: 26,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  heading: {
    flexDirection: "row",
    paddingTop: 12,
  },
  price: {
    fontSize: 23,
    flexDirection: "column",
    fontWeight: "700",
  },
  picture: {
    height: 400,
    width: "100%",
  },
  addresshead: {
    padding: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "column",
  },
  address: {
    fontSize: 16,
    left: 23,
  },
  details: {
    padding: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "column",
  },
  discription: {
    padding: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
  },
  realtor: {
    padding: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "row",
  },
  picturerealtor: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  institutes: {
    padding: 15,
    borderColor: "#000000",
    borderRadius: 10,
    borderWidth: 2,
    flexDirection: "column",
  },
});
