import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Facebook } from 'react-content-loader/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { View, Icon, Container, Header, Body, Button, Title, Left, Right, Footer, FooterTab, Input, Item, Text, Content, Badge } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import { getAll_EInvoiceTemplate, getReportTemplate } from "../../redux/actions/eInvoiceTemplateInputAction";
import ListEInvoiceTemplateInput from "./includes/ListEInvoiceTemplateInput";
import styles from './styles/style';

const ScreenEInvoiceTemplateInput = (props) => {
    useEffect(() => {
        props.getAll_EInvoiceTemplate();
    }, []);
    const onRefresh = () => {
        props.getAll_EInvoiceTemplate();
    }
    return (

        <Container>
            <Header style={styles.header} searchBar rounded>
                <Item>
                    <Icon type="FontAwesome" name="search" />
                    <Input onChangeText={(keySearch) => { _onChangeTextSearch(keySearch) }} placeholder="Tìm kiếm" />
                    <Icon style={styles.ionClose} type="FontAwesome" onPress={() => _showInputSearch()} name="close" />
                </Item>
            </Header>
            {props.loading ? (
                <Content style={{ padding: 25 }}>
                    <Facebook />
                    <Facebook />
                    <Facebook />
                    <Facebook />
                    <Facebook />
                    <Facebook />
                    <Facebook />
                    <Facebook />
                </Content>
            ) : (
                    <Content>
                        <SwipeListView
                            keyExtractor={(item) => item.TEMPLATE_CD}
                            data={props.eInvoiceTemplateAll}
                            renderItem={({ item }) => (
                                <ListEInvoiceTemplateInput TEMPLATE_CD={item.TEMPLATE_CD} FORM_NM={item.FORM_NM} TEMPLATE_NM_VIET={item.TEMPLATE_NM_VIET} TEMPLATE_YMD_ADD={item.TEMPLATE_YMD_ADD}
                                    TEMPLATE_YMD_EDIT={item.TEMPLATE_YMD_EDIT} USERID_ADD={item.USERID_ADD} USERID_EDIT={item.USERID_EDIT} />
                            )}
                            renderHiddenItem={(data, rowMap) => (
                                <View style={styles.rowBack}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate("DetailEInvoiceTemplateInput",
                                        { TEMPLATE_CD: data.item.TEMPLATE_CD, LOGO_NM: data.item.LOGO_NM, BACKGROUND_NM: data.item.BACKGROUND_NM, FORM_NM: data.item.FORM_NM }
                                    )} style={[styles.backLeftBtn, styles.backLeftBtnLeft]}>
                                        <Text style={styles.backTextWhite}>Sửa</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
                                        <Text style={styles.backTextWhite}>Xóa</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            leftOpenValue={75}
                            rightOpenValue={-75}
                        />
                    </Content>
                )}
            <Footer >
                <FooterTab style={styles.footer}>
                    <Button onPress={() => props.navigation.goBack()} vertical>
                        <Icon style={styles.icon} type="Ionicons" name="ios-arrow-back" />
                        <Text style={styles.textIconFooter}>Quay lại</Text>
                    </Button>
                    <Button badge vertical onPress={() => _showBillCount()}>
                        <Badge ><Text>{props.billCount}</Text></Badge>
                        <Icon style={styles.icon} type="FontAwesome" name="file-text" />
                        <Text style={styles.textIconFooter}>Hóa đơn</Text>
                    </Button>
                    <Button vertical>
                        <Icon style={styles.icon} type="MaterialIcons" name="add-box" />
                        <Text style={styles.textIconFooter}>Thêm mới</Text>
                    </Button>
                    <Button vertical onPress={() => onRefresh()}>
                        <Icon style={styles.colorIconRefresh} type="FontAwesome" name="refresh" />
                        <Text style={styles.textIconFooter}>Làm mới</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container >
    );
}

const mapStateToProps = (state) => {
    return {
        eInvoiceTemplateAll: state.eInvoiceTemplateInput.templatesAll,
        eInvoiceReportTemplate: state.eInvoiceTemplateInput.reportTemplate,
        loading: state.eInvoiceTemplateInput.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAll_EInvoiceTemplate: () => dispatch(getAll_EInvoiceTemplate()),
        getReportTemplate: () => dispatch(getReportTemplate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenEInvoiceTemplateInput);