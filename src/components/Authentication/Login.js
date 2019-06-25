import React from 'react';
import { View, Text, StyleSheet, Linking, Platform } from 'react-native';
import { Button } from 'native-base';
import constants from '../../helpers/constants';

const Login = props => {
  return (
    <View style={styles.logInBtns}>
      {props.isLoggedIn ? (
        <View style={{ width: '100%' }}>
          <Button
            style={[styles.button, { backgroundColor: 'red' }]}
            onPress={props.logOut}
            block
          >
            <Text style={styles.logOutText}>Log Out</Text>
          </Button>
          <Button
            style={[styles.button, styles.primaryBtn]}
            block
            onPress={() => props.navigation.navigate('PeopleSearch')}
          >
            <Text style={[styles.primaryBtnText, styles.lightBtn]}>
              People Search
            </Text>
            <Text style={[styles.buttonText, styles.lightBtn]}>
              Find Contact Information for Anyone
            </Text>
          </Button>
          <Button
            style={styles.button}
            bordered
            block
            onPress={() => props.navigation.navigate('FamilyConnections')}
          >
            <Text style={styles.primaryBtnText}>Family Connections</Text>
            <Text style={styles.buttonText}>Family Trees for Permanency</Text>
          </Button>
          <Button
            style={[styles.button, styles.lastBtn]}
            bordered
            block
            onPress={() => Linking.openURL('https://connectourkids.org')}
          >
            <Text style={styles.primaryBtnText}>Resources</Text>
            <Text style={styles.buttonText}>
              Useful Materials and Information
            </Text>
          </Button>
        </View>
      ) : (
        <View style={styles.logInBtns}>
          <Button style={styles.buttonStyle} block onPress={props.onLogin}>
            <Text style={styles.btnText}>Login </Text>
          </Button>
          <Button
            style={styles.buttonStyle}
            block
            onPress={() => {
              props.setModalVisible(true);
            }}
          >
            <Text style={styles.btnText}>Register</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  logInBtns: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    marginTop: 20
  },
  logOutText: {
    color: '#fff'
  },
  buttonStyle: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: constants.highlightColor
  },
  btnText: {
    color: '#fff'
  },
  container: {
    backgroundColor: '#fff',
    padding: 20
  },
  mainText: {
    fontFamily: constants.fontFamily,
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 5
  },
  videoText: {
    color: constants.highlightColor,
    fontWeight: 'bold',
    marginBottom: 5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25
  },

  button: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 10
  },
  primaryBtn: {
    backgroundColor: constants.highlightColor
  },
  primaryBtnText: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: constants.highlightColor,
    flex: 1
  },
  buttonText: {
    color: constants.highlightColor,
    fontSize: 12,
    textTransform: 'uppercase'
  },
  lightBtn: {
    color: '#fff'
  },
  lastBtn: {
    marginBottom: 50
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  },

  red: {
    backgroundColor: 'red'
  },
  videoContainer: {
    justifyContent: 'center',
    height: 300,
    marginBottom: 30
  },
  WebViewContainer: {
    marginTop: Platform.OS == 'ios' ? 20 : 0
  }
});

export default Login;
