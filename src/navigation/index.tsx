// @ts-nocheck
// NOTE Typescript definitions for Navigation have some issues. Disabling
// Typescript checking until they are sorted out

import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons';
import AboutScreen from '../screens/AboutScreen';
import FamilyConnectionsScreen from '../screens/FamilyConnectionsScreen';
import PeopleSearchScreen from '../screens/PeopleSearchScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import constants from '../helpers/constants';
import AuthenticationView from '../screens/AuthenticationScreen';
import CaseScreen from '../screens/CaseScreen';
import RelationshipScreen from '../screens/RelationshipScreen';
import AddDocumentForm from '../components/family-connections/AddDocumentForm';
import logoImg from '../../assets/logo.png';
import CustomDrawer from './CustomDrawer';
import AddEngagementForm from '../components/family-connections/AddEngagementForm/AddEngagementForm';

// This is the primary NAVIGATION file. Everything in this file determines how to navigate around through the Bottom Navbar and "More" Drawer.
// If you add new screens into the app, you'll need to add them into the appropriate stacks below in order for React Navigation to know how to route the user.
// refer to React navigation docs for more details: https://reactnavigation.org/docs/en/bottom-tab-navigator.html
// Custom drawer code can be found in navigation > CustomDrawer.js

const leftArrow = '\u2190';

// Following StackNavigators are in BottomNav:
const FamilyConnectionsNavigator = createStackNavigator({
    FamilyConnections: {
        screen: FamilyConnectionsScreen,
        initialRouteName: 'FamilyConnections',
        defaultNavigationOptions: {
            headerStyle: {
                height: constants.headerHeight,
                backgroundColor: constants.highlightColor,
            },
        },
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'white',
                height: 52,
                color: 'black',
            },
            headerLeft: (
                <Image
                    source={logoImg}
                    style={{ width: 225, height: 90 }}
                    resizeMode="contain"
                />
            ),
        },
    },
    CaseView: {
        screen: CaseScreen,
        initialRouteName: 'FamilyConnections',
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: 'white',
                    height: 52,
                },
                headerLeft: (
                    <TouchableOpacity
                        style={{ padding: 7.5 }}
                        onPressIn={() => {
                            navigation.goBack();
                        }}
                    >
                        <Text
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10,
                                marginLeft: 5,
                                fontSize: 20,
                                color: '#0F6580',
                            }}
                        >
                            {leftArrow} Back to cases
                        </Text>
                    </TouchableOpacity>
                ),
            };
        },
    },
    RelationshipScreen: {
        screen: RelationshipScreen,
        initialRouteName: 'FamilyConnections',
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: 'white',
                    height: 52,
                },
                headerLeft: (
                    <TouchableOpacity
                        style={{ padding: 7.5 }}
                        onPressIn={() => {
                            navigation.goBack();
                        }}
                    >
                        <Text
                            style={{
                                paddingTop: 10,
                                paddingBottom: 10,
                                marginLeft: 5,
                                fontSize: 20,
                                color: '#0F6580',
                            }}
                        >
                            {leftArrow} Back to case
                        </Text>
                    </TouchableOpacity>
                ),
            };
        },
    },
    AddEngagementForm: {
        screen: AddEngagementForm,
        initialRouteName: 'FamilyConnections',
        defaultNavigationOptions: {
            headerStyle: {
                height: constants.headerHeight,
                backgroundColor: constants.highlightColor,
            },
        },
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: 'white',
                    height: 52,
                },
                headerLeft: (
                    <TouchableOpacity
                        style={{
                            width: 64,
                            height: 64,
                            marginLeft: 10,
                            marginBottom: 15,
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Ionicons
                            name="md-arrow-back"
                            size={32}
                            color="#AAA9AD"
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />
                    </TouchableOpacity>
                ),
            };
        },
    },
    DocumentForm: {
        screen: AddDocumentForm,
        initialRouteName: 'FamilyConnections',
        defaultNavigationOptions: {
            headerStyle: {
                height: constants.headerHeight,
                backgroundColor: constants.highlightColor,
            },
        },
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: 'white',
                    height: 52,
                },
                headerLeft: (
                    <TouchableOpacity
                        style={{
                            width: 64,
                            height: 64,
                            marginLeft: 10,
                            marginBottom: 15,
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Ionicons
                            name="md-arrow-back"
                            size={32}
                            color="#AAA9AD"
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />
                    </TouchableOpacity>
                ),
            };
        },
    },
});

const PeopleSearchNavigator = createStackNavigator({
    PeopleSearch: {
        screen: PeopleSearchScreen,
        initialRouteName: 'PeopleSearch',
        defaultNavigationOptions: {
            headerStyle: {
                height: constants.headerHeight,
                backgroundColor: constants.highlightColor,
            },
        },
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'white',
                height: 52,
            },
            headerLeft: (
                <Image
                    source={logoImg}
                    style={{ width: 225, height: 90 }}
                    resizeMode="contain"
                />
            ),
        },
    },
    SearchResult: {
        screen: SearchResultScreen,
        initialRouteName: 'PeopleSearch',
        defaultNavigationOptions: {
            headerStyle: {
                height: constants.headerHeight,
                backgroundColor: constants.highlightColor,
            },
        },
    },
});

// Following StackNavigators are inside "More" drawer:

const CustomDrawerNavigator = createStackNavigator({
    More: {
        screen: CustomDrawer,
        defaultNavigationOptions: {
            headerStyle: {
                height: constants.headerHeight,
                backgroundColor: constants.highlightColor,
            },
        },
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'white',
                height: 52,
            },
            headerLeft: (
                <Image
                    source={logoImg}
                    style={{ width: 225, height: 90 }}
                    resizeMode="contain"
                />
            ),
        },
    },
    MyAccount: {
        screen: AuthenticationView,
        initialRouteName: 'MyAccount',
        defaultNavigationOptions: {
            headerStyle: {
                height: constants.headerHeight,
                backgroundColor: constants.highlightColor,
            },
        },
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: 'white',
                    height: 52,
                },
                headerLeft: (
                    <TouchableOpacity
                        style={{
                            width: 64,
                            height: 64,
                            marginLeft: 10,
                            marginBottom: 15,
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Ionicons
                            name="md-arrow-back"
                            size={32}
                            color="#AAA9AD"
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />
                    </TouchableOpacity>
                ),
                headerTitle: (
                    <Image
                        source={logoImg}
                        style={{ width: 225, height: 90 }}
                        resizeMode="contain"
                    />
                ),
            };
        },
    },
    About: {
        screen: AboutScreen,
        // initialRouteName: 'About',
        defaultNavigationOptions: {
            headerStyle: {
                height: constants.headerHeight,
                backgroundColor: constants.highlightColor,
            },
        },
        navigationOptions: ({ navigation }) => {
            return {
                headerStyle: {
                    backgroundColor: 'white',
                    height: 52,
                },
                headerLeft: (
                    <TouchableOpacity
                        style={{
                            width: 64,
                            height: 64,
                            marginLeft: 10,
                            marginBottom: 15,
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Ionicons
                            name="md-arrow-back"
                            size={32}
                            color="#AAA9AD"
                            onPress={() => {
                                navigation.goBack();
                            }}
                        />
                    </TouchableOpacity>
                ),
                headerTitle: (
                    <Image
                        source={logoImg}
                        style={{ width: 225, height: 90 }}
                        resizeMode="contain"
                    />
                ),
            };
        },
    },
});

// BottomNavigator determines the items/icons that show on the very bottom of the app.
// 'People Search', 'Family Connections', and 'More'
const BottomNavigator = createBottomTabNavigator(
    {
        PeopleSearchNavigator: {
            screen: PeopleSearchNavigator,
            navigationOptions: {
                tabBarLabel: 'PEOPLE SEARCH',
                // eslint-disable-next-line react/display-name
                tabBarIcon: ({ tintColor }) => (
                    <View
                        style={{
                            borderTop: 1,
                            borderColor: 'blue',
                        }}
                    >
                        <Ionicons
                            name="md-search"
                            size={36}
                            color={tintColor}
                        />
                    </View>
                ),
            },
        },

        FamilyConnections: {
            screen: FamilyConnectionsNavigator,
            navigationOptions: {
                tabBarLabel: 'FAMILY CONNECTIONS',
                // eslint-disable-next-line react/display-name
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="md-people" size={36} color={tintColor} />
                ),
            },
        },

        MoreNavigator: {
            screen: CustomDrawerNavigator,
            navigationOptions: {
                tabBarLabel: 'MORE',
                // eslint-disable-next-line react/display-name
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-menu" size={36} color={tintColor} />
                ),
            },
        },
    },

    {
        initialRouteName: 'PeopleSearchNavigator',
        tabBarOptions: {
            inactiveTintColor: 'rgba(24, 23, 21, 0.5)',
            activeTintColor: '#0279AC',
            style: {
                backgroundColor: '#FFFFFF',
                height: 55,
                paddingTop: 3,
                paddingBottom: 3,
                justifyContent: 'space-between',
                width: '100%',
            },
        },
    }
);

const AppBottomSwitchNavigator = createSwitchNavigator({
    FamilyConnections: { screen: BottomNavigator },
    PeopleSearch: { screen: BottomNavigator },
    More: { screen: CustomDrawerNavigator },
});

const AppContainer = createAppContainer(AppBottomSwitchNavigator);

// const mapStateToProps = state => ({
//  detailsTab: state.connection.detailsTab
// });

// export default connect(mapStateToProps,{})(AppContainer);
export default AppContainer;
