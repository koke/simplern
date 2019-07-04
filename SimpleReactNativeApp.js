import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import CrashButton from '@wordpress-mobile/crash-button';

export default function SimpleReactNativeApp() {
  return (
    <View style={styles.container}>
      <CrashButton
        title='🙈 Crash me'
        errorMessage='🙊 I crashed!'
      />
      <Button
        title='🙈 Crash me in the App'
        onPress={ () => { throw new Error( '🙊 I crashed!' ) } }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
