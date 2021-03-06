import React, { useEffect } from 'react';
import { TouchableOpacity, View, Linking, Animated } from 'react-native';
import { Divider } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { logOut, authChecker, clearUserCases } from '../store/actions';
import { connect } from 'react-redux';

const CustomDrawer = (props) => {
    useEffect(() => {
        // if (props.loadingUser) {
        props.authChecker();
        // }
    }, [props.loadingUser]);

    return (
        <Animated.View style={styles.container}>
            <View style={styles.half}>
                <TouchableOpacity
                    style={[styles.linkBox, styles.withBorder]}
                    onPress={() => props.navigation.navigate('MyAccount')}
                >
                    <Text style={[styles.text]}>My Account</Text>
                    <Text style={styles.arrow}>❯</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.linkBox, styles.withBorder]}
                    onPress={() => props.navigation.navigate('About')}
                >
                    <Text style={[styles.text]}>About</Text>
                    <Text style={styles.arrow}>❯</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.linkBox, styles.withBorder]}
                    onPress={() =>
                        Linking.openURL(
                            'https://www.connectourkids.org/contact'
                        )
                    }
                >
                    <Text style={[styles.text]}>Support</Text>
                    <Text style={styles.arrow}>❯</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.linkBox, styles.withBorder]}
                    onPress={() =>
                        Linking.openURL(
                            'https://www.connectourkids.org/privacy'
                        )
                    }
                >
                    <Text style={[styles.text]}>Privacy Policy</Text>
                    <Text style={styles.arrow}>❯</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.linkBox}
                    onPress={() =>
                        Linking.openURL('https://www.connectourkids.org/terms')
                    }
                >
                    <Text style={styles.text}>Terms of Service</Text>
                    <Text style={styles.arrow}>❯</Text>
                </TouchableOpacity>

                <Divider style={styles.divider} />
            </View>

            <View
                style={[
                    styles.half,
                    { justifyContent: 'center', alignItems: 'center' },
                ]}
            >
                {/* // conditional based on whether user is logged in */}
                {props.isLoggedIn && props.idToken ? (
                    <>
                        <TouchableOpacity
                            onPress={() => {
                                props.logOut();
                                props.clearUserCases();
                            }}
                        >
                            <View style={styles.logout}>
                                <Text style={styles.logoutText}>Log Out</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                ) : null}
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        justifyContent: 'flex-start',
    },
    half: {
        height: '50%',
    },
    linkBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 30,
    },
    arrow: {
        color: 'rgba(24, 23, 21, 0.3)',
        marginRight: 40,
    },
    text: {
        color: '#444444',
        fontSize: 18,
        paddingBottom: 15,
        paddingTop: 15,
    },
    withBorder: {
        borderColor: 'rgba(24, 23, 21, 0.1)',
        borderBottomWidth: 1,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'rgba(24, 23, 21, 0.1)',
    },
    logout: {
        borderColor: '#0279AC',
        borderWidth: 1,
        borderRadius: 10,
        width: 160,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutText: {
        color: '#0279AC',
    },
});

const mapStateToProps = (state) => {
    const { user, isLoggedIn, authToken, idToken, loadingUser } = state.auth;

    return {
        user,
        isLoggedIn,
        authToken,
        idToken,
        loadingUser,
    };
};

export default connect(mapStateToProps, {
    logOut,
    authChecker,
    clearUserCases,
})(CustomDrawer);
