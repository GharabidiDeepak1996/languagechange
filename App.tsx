/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, useColorScheme, Text} from 'react-native';
import remoteConfig, {
  FirebaseRemoteConfigTypes,
} from '@react-native-firebase/remote-config';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  useEffect(() => {
    remoteConfig()
      .fetchAndActivate()
      .then(() => {
        remoteConfigAllObj = remoteConfig().getAll();

        var remoteConfigValues = {};

        //remoteConfigValues["english_language"] = remoteConfigAllObj['english_language']._value;
        remoteConfigValues = remoteConfigAllObj['hindi_language']._value;

        console.log('remoteConfigAllObj12', remoteConfigValues);
      });
    // remoteConfig()
    //   // .setDefaults({
    //   //   isSubscribed1: '546566',
    //   // })
    //   .then(() => remoteConfig().fetchAndActivate())
    //   .then(fetchedRemotely => {});
    //  const isSubscribed = remoteConfig().getValue('isSubscribed1');
    //console.log('isSubscribed12', isSubscribed);
    // remoteConfig.
    // remoteConfig.fetch().then(() => {
    //   remoteConfig.activate();
    // });
  }, []);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text>hhf</Text>
    </SafeAreaView>
  );
}

export default App;
