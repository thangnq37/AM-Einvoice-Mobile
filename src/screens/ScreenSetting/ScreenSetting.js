import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
const ScreenSetting = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={{color: "red"}}>Screen Setting </Text>
      <Button
        title="Go to home screen"
        onPress={() => navigation.navigate("ScreenHome")}
      />
      </View>
    );
};
export default ScreenSetting;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
