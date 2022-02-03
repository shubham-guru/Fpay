import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text>This is sign up page..</Text>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
