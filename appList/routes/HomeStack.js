/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import * as React from "react";
import {
    View, Text, StatusBar,
} from "react-native";
import {
    createDrawerNavigator, DrawerContentScrollView, DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Data from "../Listings/Data";
import Home from "../components/Home";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import Search from "../components/Search";
import Feature from "../components/Featured";
import SearchData from "../components/SearchData";
import color from "../config/color";

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 40,
                        top: -5,
                        backgroundColor: color.app,
                    }}
                >
                    <MaterialCommunityIcons name="home" size={32} color="white" />
                    <Text style={{ color: color.white, fontSize: 32, fontWeight: "bold" }} >BETHEK</Text>
                </View>

                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View
                style={{
                    backgroundColor: color.banner,
                    flexDirection: "column",
                    padding: 20,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Text>
                    <Text style={{ color: "#fff" }}>Copyright © 2021 AAA PAK</Text>
                </Text>
            </View>
        </View>
    );
};
const Stack = createStackNavigator();

function HomeNavigation({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Homes"
                component={Home}
                options={{
                    headerTitle: "BETHEK",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.app,
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 40,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color: "#fff",
                        fontWeight: "100",
                        fontSize: 22,
                    },
                    headerLeft: () => (
                        <Feather name="menu" size={22}
                            onPress={() => navigation.openDrawer()}
                            style={{
                                color: "white",
                                left: 15,
                            }}
                        />
                    ),
                }}
            />

            <Stack.Screen
                name="SearchData"
                component={SearchData}
                options={{
                    headerTitle: "Search Result",
                    headerTitleAlign: "left",
                    headerStyle: {
                        backgroundColor: color.app,
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 40,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: 22,
                    },
                }}
            />

            <Stack.Screen
                name="Data"
                component={Data}
                options={{
                    headerTitle: "Details",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.app,
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 40,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: 22,
                    },
                }}
            />

            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: "Search",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.app,
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 40,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: 22,
                    },
                }}
            />

        </Stack.Navigator>
    );
}

function Featured({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Featured Items"
                component={Feature}
                options={{
                    headerTitle: "Featured Item",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.app,
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 40,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: 22,
                    },
                    headerLeft: () => (
                        <Feather name="menu" size={22}
                            onPress={() => navigation.openDrawer()}
                            style={{
                                color: "white",
                                left: 15,
                            }}
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="Data"
                component={Data}
                options={{
                    headerTitle: "Details",
                    headerTitleAlign: "center",
                    headerStyle: {
                        backgroundColor: color.app,
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 40,
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        color: "#fff",
                        fontWeight: "600",
                        fontSize: 22,
                    },
                }}
            />
        </Stack.Navigator>
    );
}

const HomeStacks = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: color.app,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: 22,
                },
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                component={HomeNavigation}
                name="Home"
                options={{
                    headerShown: false,
                }}
            />
            <Drawer.Screen
                name="Featured Listing"
                component={Featured}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="Search"
                component={Search}
                options={{ headerTitleAlign: "center" }}
            />
            <Drawer.Screen
                name="About US"
                component={Aboutus}
                options={{ headerTitleAlign: "center" }}
            />
            <Drawer.Screen
                name="Contact US"
                component={Contactus}
                options={{ headerTitleAlign: "center" }}
            />
        </Drawer.Navigator>
    );
};


function HomeStack(props) {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor={"#1f3861"} />
            <HomeStacks />
        </NavigationContainer>
    );
}

export default HomeStack;

