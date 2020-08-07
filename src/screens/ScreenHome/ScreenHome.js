import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ScreenHome = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={{ color: "red" }}>Home Screen</Text>
            <Button
                title="HELLO HOME"
                onPress={() => alert('HOME')}
            />
        </View>
    );
};
export default ScreenHome;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
