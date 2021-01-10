/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import store from './src/redux/store'
import { color } from './src/constants';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar translucent={true} barStyle={'dark-content'} backgroundColor={color.transparent} />
        <View style={{ flex: 1,justifyContent:'center',alignItems:'center' }}>
        <Text>با سلام</Text>
        </View>
      </Provider>
    </>
  );
};



export default App;
