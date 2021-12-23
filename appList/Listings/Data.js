/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import React, { useState, useEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView, TouchableOpacity, Linking, Platform, Button } from "react-native";

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

  let uni = {
    1: "CUST",
    2: "NUML",
    3: "IST",
    4: "Foundation University",
  };

  // Display Universities
  let u = [];
  for (let i = 1; i < 5; i++) {
    if (nearby_universities.includes(i)) {
      u.push(uni[i]);
    }
  }

  // Display Utitlites
  let internet, food, laundry;
  if (utilities.includes(1)) {
    internet = <Text>Yes</Text>;
  } else {
    internet = <Text>No</Text>;
  }
  if (utilities.includes(2)) {
    food = <Text>Yes</Text>;
  } else {
    food = <Text>No</Text>;
  }
  if (utilities.includes(3)) {
    laundry = <Text>Yes</Text>;
  } else {
    laundry = <Text>No</Text>;
  }

  useEffect(() => {
    fetch(`http://hostels4u.com/ep/owners-all/${owner}`)
      .then((resp) => resp.json())
      .then((data) => {
        setusercontact(data.phone);
        fetch(`http://hostels4u.com/ep/pusers-all/${data.user}`)
          .then((resp) => resp.json())
          .then((datas) => {
            setusername(datas.username);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // Change image list
  let imageList = [
    photo_main, photo_1, photo_2, photo_3, photo_4, photo_5, photo_6,
  ];

  const [currImage, setCurrImage] = useState(imageList[0]);

  function next() {
    let next_index, curr_index = imageList.indexOf(currImage);

    if (imageList[curr_index + 1] === null) {
      next_index = 0;
      setCurrImage(imageList[next_index]);
    } else {
      next_index = curr_index + 1;
      setCurrImage(imageList[next_index]);
    }
  }
  function previous() {
    let next_index, mt, curr_index = imageList.indexOf(currImage);

    if (curr_index === 0) {
      for (let count = imageList.length; count > 0; count--) {
        if (imageList[count] === null) {
          mt = count - 1;
        }
      }
      setCurrImage(imageList[mt]);
    } else {
      next_index = curr_index - 1;
      setCurrImage(imageList[next_index]);
    }
  }

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: currImage }} style={styles.picture} />
        <TouchableOpacity onPress={previous} style={[styles.buttonpress, { left: 0 }]}>
          <Text style={[styles.buttonimage, { borderBottomRightRadius: 15, borderTopRightRadius: 15 }]}>{"<"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={next} style={[styles.buttonpress, { right: 0 }]}>
          <Text style={[styles.buttonimage, { borderBottomLeftRadius: 15, borderTopLeftRadius: 15 }]}>{">"}</Text>
        </TouchableOpacity>
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
            </Text>
            <Text style={styles.price}>
              Rs: {price} /-
            </Text>
          </View>

          {/*Location*/}
          <TouchableOpacity style={styles.details} onPress={() => {
            let phoneNumber = '';
            if (Platform.OS === 'android') {
              phoneNumber = `geo: `;
            } else {
              phoneNumber = `maps: `;
            }
            Linking.openURL(phoneNumber + { location });
          }}>
            <Ionicons name="location" size={22} color="black" >
              <Text style={{ fontSize: 16 }}>{address}, {city},</Text>
            </Ionicons>
          </TouchableOpacity>
        </View>

        {/* Nearest Institution*/}
        <View style={styles.details}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>
            Nearby Institutions :
          </Text>
          {u.map((univ) => (
            <Text style={{ fontSize: 20 }}>{univ}</Text>
          ))}
        </View>

        {/* Details */}
        <View style={styles.details}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}>Details : </Text>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="bed"
              size={20}
              color="black"
            >
              {" "}Seater         |  {seater}
            </MaterialCommunityIcons>

            <MaterialCommunityIcons
              name="shower"
              size={20}
              color="black"
            >
              {" "}Bathroom   |  {bathrooms}
            </MaterialCommunityIcons>
          </View>
        </View>

        {/* Utilities */}
        <View style={styles.details}>
          <Text style={{ fontSize: 20, fontWeight: "700" }}> Utilities : </Text>
          <View style={{ flexDirection: "column", paddingLeft: 25 }}>
            <Text style={{ fontSize: 20 }}>
              <MaterialCommunityIcons name="wifi" size={24} color="#000000" />
              {"  "}
              Internet : {internet}
            </Text>
            <Text style={{ fontSize: 20 }}>
              <Ionicons name="fast-food-outline" size={24} color="#000000" />
              {"  "}
              Food      : {food}
            </Text>
            <Text style={{ fontSize: 20 }}>
              <MaterialCommunityIcons name="washing-machine" size={24} color="#000000" />
              {"  "}
              Laundry : {laundry}
            </Text>
          </View>
        </View>

        {/* Discription */}
        <View style={styles.details}>
          <Text style={{ fontSize: 20, paddingBottom: 5, fontWeight: "700" }}> Description : </Text>
          <Text style={{ fontSize: 16 }}>{description}</Text>
        </View>

        {/* Realtor */}
        <View style={styles.details}>
          <Image style={styles.picturerealtor} source={require("../Team-Img/user.png")} />
          <Text style={{ position: "absolute", left: 120, top: 25, fontSize: 16, fontWeight: "700" }}>
            {username}
          </Text>
          <Text style={{ position: "absolute", left: 120, top: 45, fontSize: 14 }}>Realtor</Text>
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
          <View style={{ position: "absolute", right: 12, bottom: 10, fontSize: 14 }}>
            <Text>Published On :</Text>
            <Text>{list_date}</Text>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
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
  details: {
    marginVertical: 10,
    padding: 15,
    borderColor: "#000000",
    borderRadius: 20,
    borderWidth: 2,
    flexDirection: "column",
  },
  picturerealtor: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  buttonpress: {
    position: "absolute",
    height: "100%",
    justifyContent: "center",
  },
  buttonimage: {
    height: "20%",
    width: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: color.white,
    backgroundColor: color.app,
    fontSize: 48,
  },
});
