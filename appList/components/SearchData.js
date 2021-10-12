/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { Component } from "react";
//import react in our code.

import {
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
} from "react-native";
import HomeListings from "../Listings/HomeListings";

export default class SearchData extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true, text: "" };
    this.arrayholder = [];
  }

  componentDidMount() {
    return fetch("http://3.135.209.144:8000/ep/hostels-all")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          },
          function () {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  SearchFilterFunction(text) {
    const newData = this.arrayholder.filter(function (item) {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      text: text,
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.3,
          width: "90%",
          backgroundColor: "#080808",
        }}
      />
    );
  };
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.viewStyle}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          placeholder="Search Here"
        />
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={(data) => (
            <HomeListings {...data.item} navigation={this.props.navigation} />
          )}
          keyExtractor={(item) => item.name}
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
    padding: 16,
  },
  textStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
    color: "black",
  },
});
