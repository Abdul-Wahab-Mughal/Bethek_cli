/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

import color from "../config/color";

const HomeListings = ({
  id, title,
  location, address,
  city, zipcode,
  description, price,
  seater, bathrooms,
  hostel_type, available,
  photo_main, photo_1,
  photo_2, photo_3,
  photo_4, photo_5,
  photo_6, is_published,
  list_date, owner,
  nearby_universities, utilities,
  navigation,
}) => {

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

  return (
    <View>
      <TouchableOpacity
        style={styles.card}
        onPress={() =>
          navigation.navigate("Data", {
            id, title,
            location, address,
            city, zipcode,
            description, price,
            seater, bathrooms,
            hostel_type, available,
            photo_main, photo_1,
            photo_2, photo_3,
            photo_4, photo_5,
            photo_6, is_published,
            list_date, owner,
            nearby_universities, utilities,
          })
        }
      >
        <View style={styles.listItemContainer}>
          <View >
            <Text style={{ color: "#000000", fontSize: 20 }}>{title}</Text>
            <Text style={{ color: "#000000", fontSize: 16 }}>
              Rs : {price} /- {"\n"}
            </Text>
            <Text style={{ color: "#000000" }}>
              <Ionicons name="home" size={24} color="#000000" />
              {"  "}
              {hostel_type}
            </Text>

            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#000000" }}>
                <Ionicons name="fast-food-outline" size={24} color="#000000" />
                {"  "}
                {food}
              </Text>

              <Text style={{ color: "#000000", paddingLeft: 15 }}>
                <MaterialCommunityIcons name="washing-machine" size={24} color="#000000" />
                {"  "}
                {laundry}
              </Text>

              <Text style={{ color: "#000000", paddingLeft: 15 }}>
                <MaterialCommunityIcons name="wifi" size={24} color="#000000" />
                {"  "}
                {internet}
              </Text>
            </View>
          </View>

          <Image source={{ uri: photo_main }} style={styles.pokeImage} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  pokeImage: {
    height: 120,
    width: 120,
    borderRadius: 30,
  },
  card: {
    borderWidth: 2,
    backgroundColor: color.white,
    borderColor: color.app,
    borderRadius: 50,
    margin: 10,
    elevation: 8,
  },
});

export default HomeListings;
