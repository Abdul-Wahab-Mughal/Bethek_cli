/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { Component } from "react";
import {
  Text, StyleSheet, View, FlatList, TextInput, ActivityIndicator, TouchableOpacity,
} from "react-native";
import { CheckBox } from 'react-native-elements';
import { Picker } from "@react-native-picker/picker";

import HomeListings from "../Listings/HomeListings";
import color from "../config/color";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.setdata = this.setdata.bind(this);
    this.state = {
      isLoading: true,
      boychecked: false, girlchecked: false,
      textcity: "", textNear: "", picker: "",
      dataSource: [], arrayholder: [], list: [],
      newData: [], newData3: [], uni: [],
    };
  }

  // fetch all data of Hostels
  async componentDidMount() {
    return fetch("http://hostels4u.com/ep/hostels-all")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ isLoading: false, dataSource: responseJson, arrayholder: responseJson, list: responseJson });
      })
      .catch((error) => console.log("there is a error on internet : " + error));
  }

  // Find City Search
  SearchCity(textcity) {
    this.setState({ textcity: textcity });
    let gendertext = "";
    if (this.state.boychecked === true) {
      gendertext = "Boys Hostel";
    } else if (this.state.girlchecked === true) {
      gendertext = "Girls Hostel";
    }
    const Data = this.state.arrayholder.filter(function (item) {
      const itemData = item.city.includes(textcity) ? item : "";
      return itemData;
    });
    if (!this.state.textNear) {
      if (!gendertext) {
        this.setState({ newData: Data });
      } else {
        this.gender(gendertext, Data);
      }
    } else {
      this.SearchNear(this.state.textNear, Data);
    }
  }

  // Find Near by unviersity Search
  SearchNear(textNear, data) {
    this.setState({ textNear: textNear });
    let gendertext = "";
    if (this.state.boychecked === true) {
      gendertext = "Boys Hostel";
    } else if (this.state.girlchecked === true) {
      gendertext = "Girls Hostel";
    }
    const Data = data.filter(function (item) {
      // eslint-disable-next-line radix
      const itemData = item.nearby_universities.includes(parseInt(textNear)) ? item : null;
      return itemData;
    });
    if (!gendertext) {
      this.setState({ newData: Data });
    } else {
      this.gender(gendertext, Data);
    }

  }

  // find Gender Search
  gender(genderText, data) {
    const Data = data.filter(function (item) {
      const itemData = item.hostel_type.includes(genderText) ? item : "";
      return itemData;
    });
    this.setState({ newData: Data });
  }

  // Press Search Button
  setdata() {
    // all Empty
    if (!this.state.textcity && !this.state.textNear &&
      this.state.boychecked === false && this.state.girlchecked === false) {
      this.setState({ dataSource: [...this.state.list] });
      console.log("All");
      return null;
    }
    // if Text is not empty
    if ((!this.state.textcity || !this.state.textNear) &&
      (this.state.boychecked === false && this.state.girlchecked === false)) {
      this.setState({ dataSource: [...this.state.newData] });
      console.log("All With Text");
      return null;
    }
    // if check box click
    if ((!this.state.textcity && !this.state.textNear) &&
      (this.state.boychecked === true || this.state.girlchecked === true)) {
      console.log("gender");
      this.setState({ dataSource: [...this.state.newData] });
      return null;
    }
    // if text and check box fill
    console.log("List");
    this.setState({ dataSource: [...this.state.newData] });
  }

  // Check Box boy or girl
  Boybox() {
    this.setState({ boychecked: !this.state.boychecked });
    this.setState({ girlchecked: false });

    if (!this.state.textcity && !this.state.textNear) { this.gender("Boys Hostel", this.state.arrayholder); }
    // will not selected
    if (this.state.boychecked === true && this.state.girlchecked === false) {
      this.state.boychecked = false; this.state.girlchecked = false;
      this.SearchCity(this.state.textcity);
      this.SearchNear(this.state.textNear, this.state.arrayholder);
      return null;
    }

    if ((this.state.textcity || this.state.textNear) && this.state.boychecked === false) {
      this.state.boychecked = true; this.state.girlchecked = false;
      this.SearchCity(this.state.textcity);
      this.SearchNear(this.state.textNear, this.state.arrayholder);
    }
  }
  Girlbox() {
    this.setState({ boychecked: false });
    this.setState({ girlchecked: !this.state.girlchecked });

    if (!this.state.textcity && !this.state.textNear) { this.gender("Girls Hostel", this.state.arrayholder); }
    // will not selected
    if (this.state.boychecked === false && this.state.girlchecked === true) {
      this.state.boychecked = false; this.state.girlchecked = false;
      this.SearchCity(this.state.textcity);
      this.SearchNear(this.state.textNear, this.state.arrayholder);
      return null;
    }

    if ((this.state.textcity || this.state.textNear) && this.state.girlchecked === false) {
      this.state.girlchecked = true; this.state.boychecked = false;
      this.SearchCity(this.state.textcity);
      this.SearchNear(this.state.textNear, this.state.arrayholder);
    }
  }

  // picker a near by university
  setPicker(value) {
    this.setState({ picker: value });
    this.SearchNear(value, this.state.arrayholder);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }} >
          {/** Loading bar */}
          <ActivityIndicator size="large" color="#10284e" />
        </View>
      );
    }
    return (
      <View style={styles.viewStyle}>
        <View>
          {/** Search Text bar */}
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.SearchCity(text)}
            value={this.state.textcity}
            placeholderTextColor="black"
            placeholder="Search City e.g:- Islamabad, Rawalpindi"
          />
          {/** Search Near by university */}
          <Picker
            style={styles.picker}
            selectedValue={this.state.picker}
            onValueChange={(value) => this.setPicker(value)}
            dropdownIconColor={color.app}
            dropdownIconRippleColor={color.app}
            mode="dropdown"
            onChangeText={(text) => this.SearchNear(text, this.state.arrayholder)}
            value={this.state.textNear}
          >
            <Picker.Item label="Select Near by University" color="white" />
            <Picker.Item label="CUST" value="1" color="white" />
            <Picker.Item label="NUML" value="2" color="white" />
            <Picker.Item label="IST" value="3" color="white" />
            <Picker.Item label="Foundation University" value="4" color="white" />
          </Picker>
          {/** Check Box */}
          <View style={{ flexDirection: "row" }}>
            <CheckBox title="Boys" checked={this.state.boychecked} onPress={() => this.Boybox()} />
            <CheckBox title="Girls" checked={this.state.girlchecked} onPress={() => this.Girlbox()} />
          </View>
          {/** Search Button */}
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity onPress={this.setdata} style={styles.searchbutton}>
              <Text style={{ color: "white", textAlign: "center" }}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/** Display List of Hostels */}
        <FlatList
          data={this.state.dataSource}
          renderItem={(item) => (<HomeListings {...item} navigation={this.props.navigation} />)}
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
    flex: 1,
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
  searchbutton: {
    padding: 10,
    width: "50%",
    borderRadius: 80,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: "100%",
    borderColor: "red",
    borderWidth: 10,
    color: "black",
  },
});
