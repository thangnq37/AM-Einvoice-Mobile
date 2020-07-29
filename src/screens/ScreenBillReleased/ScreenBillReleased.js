import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
const ScreenBillReleased = ({navigation}) => {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={{color: "red"}}>Home Screen</Text>
      <Button
        title="HELLO PHÁT HÀNH HÓA ĐƠN"
        onPress={() => alert('PHÁT HÀNH HÓA ĐƠN')}
      />
      </View>
    );
};
export default ScreenBillReleased;
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});