/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Logger from './Logger.js';

function App(): React.JSX.Element {
  useEffect(() => {
    console.log(
      'Logger init reads a DRM environment which hangs up the execution; check whether the log after the initialiser is printed on console',
    );
    const logger = new Logger('App');
    console.log('Logger init completed successfully and no hang has occured');
    logger.print();
  }, []);

  // Check whether the text `Successfully loaded the app screen` is loaded on screen.
  return (
    <SafeAreaView>
      <Text style={styles.innerText}>
        Successfully loaded the app screen !!!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  innerText: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default App;
