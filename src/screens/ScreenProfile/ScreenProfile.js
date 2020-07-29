import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
const ScreenProfile = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={{color: "red"}}>Screen Profile </Text>
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate("ScreenHome")}
      />
      </View>
    );
};
export default ScreenProfile;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
