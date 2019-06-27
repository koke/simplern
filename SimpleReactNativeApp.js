import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function SimpleReactNativeApp() {
  return (
    <View style={styles.container}>
      <Button
        title='Crash me!'
        onPress={ () => {
          throw new Error('crashed');
        } }
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
