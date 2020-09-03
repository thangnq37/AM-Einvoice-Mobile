import React, { useState } from 'react';
import {
    SafeAreaView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    
    TouchableOpacity,
    Image,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    ActivityIndicator
} from 'react-native';
import { Container, Header, Content,Button, Spinner,Text } from 'native-base';
import { connect } from "react-redux";
import * as Animatable from 'react-native-animatable';
import { login } from "../../redux//actions/userAction";
const ScreenAuth = (props, { navigation }) => {
    const [error, setError] = useState("");
    const [data, setData] = React.useState({
        companyID: '1483',
        username: 'admin',
        password: '123456',
        isValidCompanyID: true,
        isValidUsername: true,
        isValidPassword: true,
        secureTextEntry: true,
    });
    const textInputChangeCompanyID = (val) => {
        if (val != '') {
            setData({
                ...data,
                companyID: val,
                isValidCompanyID: true
            });
        } else {
            setData({
                ...data,
                companyID: val,
            });
        }
    }
    const textInputChangeUsername = (val) => {
        if (val != '') {
            setData({
                ...data,
                userName: val,
                isValidUsername: true
            });
        } else {
            setData({
                ...data,
                username: val,
            });
        }
    }
    const textInputChangePassword = (val) => {
        if (val != '') {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
            });
        }
    }
    const loginHandle = async (companyID, username, password) => {
        if (companyID.length == 0) {
            setData({
                ...data,
                isValidCompanyID: false
            });
            return;
        }
        if (username.length == 0) {
            setData({
                ...data,
                isValidUsername: false
            });
            return;
        }
        if (password.length == 0) {
            setData({
                ...data,
                isValidPassword: false
            });
            return;
        }
        setError(null);
        try {
            await props.loginAction(username, password, companyID);
        } catch (error) {
            setError(error);
        }
    }
    return (
        <SafeAreaView style={styles.Container}>
            <KeyboardAvoidingView style={styles.Container}>
                <TouchableWithoutFeedback style={styles.Container} onPress={Keyboard.dismiss}>
                    <View style={styles.Container}>
                        <StatusBar barStyle="light-content" />
                        <View style={styles.ContainerLogo}>
                            <Image style={styles.Logo} source={require('../../assets/logo/NC9.png')} />
                        </View>
                        <View >
                            <TextInput style={styles.inputBox}
                                placeholder="CompanyID"
                                placeholderTextColor="#999999"
                                keyboardType="numeric"
                                returnKeyType="next"
                                autoCorrect={false}
                                onChangeText={(val) => textInputChangeCompanyID(val)}
                                value={data.companyID}
                            />
                            {data.isValidCompanyID ? null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.errorMsg}>Mã công ty không được rỗng.</Text>
                                </Animatable.View>
                            }
                            <TextInput style={styles.inputBox}
                                placeholder="Username"
                                placeholderTextColor="#999999"
                                keyboardType="email-address"
                                returnKeyType="next"
                                autoCorrect={false}
                                onChangeText={(val) => textInputChangeUsername(val)}
                                value={data.username}

                            />
                            {data.isValidUsername ? null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.errorMsg}>Tài khoản không được rổng.</Text>
                                </Animatable.View>
                            }
                            <TextInput style={styles.inputBox}
                                placeholder="Password"
                                placeholderTextColor="#999999"
                                returnKeyType="go"
                                secureTextEntry={true}
                                autoCorrect={false}
                                onChangeText={(val) => textInputChangePassword(val)}
                                value={data.password}
                            />
                            {data.isValidPassword ? null :
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.errorMsg}>Mật khẩu không được rỗng.</Text>
                                </Animatable.View>
                            }
                            <Button onPress={() => { loginHandle(data.companyID, data.username, data.password) }} block dark>
                                    {props.loading?<Spinner color='red' />:<></>}
                                    <Text> Đăng nhập </Text>
                             </Button>
                        </View>
                        <View style={styles.footer}></View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (username, password, companyID) => dispatch(login(username, password, companyID))
    }
}
function mapStateToProps(state) {
    return {
        loading: state.user.loading,
    }    
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenAuth);
const styles = StyleSheet.create({
    Container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff'
    },
    ContainerLogo: {
        flexGrow: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    Logo: {
        width: 380,
        height: 155,
    },
    inputBox: {
        width: 380,
        backgroundColor: '#dee2e6',
        borderRadius: 5,
        paddingHorizontal: 18,
        fontSize: 20,
        color: "#006666",
        marginVertical: 10
    },
    button: {
        width: 380,
        borderRadius: 5,
        color: '#ffffff',
        backgroundColor: '#881921',
        marginVertical: 10,
        paddingVertical: 16
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: "center",
        fontWeight: 'bold'
    },
    footer: {
        flexGrow: 1,
    },
    errorMsg: {
        marginTop: -5,
        marginBottom: -5,
        left: 5,
        color: '#FF0000',
        fontSize: 11,
    },
});
