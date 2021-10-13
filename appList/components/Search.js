/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { Component } from "react";
import {
  Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, TouchableOpacity,
} from "react-native";
import HomeListings from "../Listings/HomeListings";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.setdata = this.setdata.bind(this);

    this.state = {
      isLoading: true,
      textcity: "",
      textlocation: "",
      texthostel_type: "",
      dataSource: [],
      arrayholder: [],
      newData: [],
      newData1: [],
      newData2: [],
    };
  }

  async componentDidMount() {
    return fetch("http://3.135.209.144:8000/ep/hostels-all")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
          arrayholder: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchCity(textcity) {
    const Data = this.state.arrayholder.filter(function (item) {
      const itemData = item.city ? item.city.toUpperCase() : "".toUpperCase();

      const textData = textcity.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      textcity: textcity,
      newData: Data,
    });
  }
  SearchHostel_Type(texthostel_type) {
    const Data = this.state.arrayholder.filter(function (item) {
      const itemData = item.hostel_type
        ? item.hostel_type.toUpperCase()
        : "".toUpperCase();

      const textData = texthostel_type.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      texthostel_type: texthostel_type,
      newData1: Data,
    });
  }
  Searchlocation(textlocation) {
    const Data = this.state.arrayholder.filter(function (item) {
      const itemData = item.location
        ? item.location.toUpperCase()
        : "".toUpperCase();

      const textData = textlocation.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      textlocation: textlocation,
      newData2: Data,
    });
  }
  setdata() {
    this.setState({
      dataSource: [
        ...this.state.newData1,
        ...this.state.newData,
        ...this.state.newData2,
      ],
    });
  }
  render() {
    const { dataSource } = this.state;
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator size="large" color="#10284e" />
        </View>
      );
    }
    return (
      <View style={styles.viewStyle}>
        <FlatList
          ListHeaderComponent={
            <View>
              <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => this.SearchCity(text)}
                value={this.state.textcity}
                underlineColorAndroid="transparent"
                placeholder="Search City e.g:- Islamabad, Rawalpindi"
                placeholderTextColor="black"
              />
              <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => this.SearchHostel_Type(text)}
                value={this.state.texthostel_type}
                underlineColorAndroid="transparent"
                placeholderTextColor="black"
                placeholder="Search Hostel Type e.g:- Boy, Girl"
              />
              <TextInput
                style={styles.textInputStyle}
                onChangeText={(text) => this.Searchlocation(text)}
                value={this.state.textlocation}
                underlineColorAndroid="transparent"
                placeholderTextColor="black"
                placeholder="Search location"
              />
              <View style={{ alignItems: "center", top: 30 }}>
                <TouchableOpacity
                  onPress={this.setdata}
                  style={styles.Button1}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      justifyContent: "center",
                    }}
                  >
                    search
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ padding: 20 }} />
            </View>
          }

          data={dataSource}
          renderItem={(data) => (
            <HomeListings {...data.item} navigation={this.props.navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 80,
    margin: 10,
    padding: 10,
    borderColor: "#009688",
    backgroundColor: "white",
    color: "black",
  },
  Button1: {
    padding: 10,
    width: "50%",
    borderRadius: 80,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
});
