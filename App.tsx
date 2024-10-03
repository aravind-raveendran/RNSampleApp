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
    const logger = new Logger('App');
    logger.print();
  }, []);

  return (
    <SafeAreaView>
      <Text style={styles.baseText}>
        Text is bold
        <Text style={styles.innerText}> and red</Text>
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default App;
