import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import { Icon, Container, Header, Body, Button, Title, Left, Right, Footer, FooterTab, Input, Item, Text, Content, Badge } from 'native-base';

import { getAll_EInvoiceTemplate, getReportTemplate } from "../../redux/actions/eInvoiceTemplateInputAction";

import ListReportTemplate from "./includes/ListReportTemplate";
const ScreenFormOfInvoices = (props, { navigation }) => {
    useEffect(() => {
        props.getAll_EInvoiceTemplate();
        props.getReportTemplate();
    }, []);
    return (
        <Container>
            <Header style={styles.header} searchBar rounded>
                <Item>
                    <Icon type="FontAwesome" name="search" />
                    <Input onChangeText={(keySearch) => { _onChangeTextSearch(keySearch) }} placeholder="Tìm kiếm" />
                    <Icon style={styles.ionClose} type="FontAwesome" onPress={() => _showInputSearch()} name="close" />
                </Item>
            </Header>
            <Content>
                <FlatList
                    keyExtractor={(item) => item.TEMPLATE_CD}
                    data={props.eInvoiceTemplateAll}
                    renderItem={({ item }) => (
                        <ListReportTemplate TEMPLATE_CD={item.TEMPLATE_CD} TEMPLATE_NM_VIET={item.TEMPLATE_NM_VIET} TEMPLATE_YMD_EDIT={item.TEMPLATE_YMD_EDIT} />
                    )}
                />
            </Content>
            <Footer >
                <FooterTab style={styles.footer}>
                    <Button onPress={() => navigation.goBack()} vertical>
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
                    <Button vertical onPress={() => _onRefresh()}>
                        <Icon style={styles.colorIconRefresh} type="FontAwesome" name="refresh" />
                        <Text style={styles.textIconFooter}>Làm mới</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
}
const mapStateToProps = (state) => {
    return {
        eInvoiceTemplateAll: state.eInvoiceTemplateInput.templatesAll,
        eInvoiceReportTemplate: state.eInvoiceTemplateInput.reportTemplate
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getAll_EInvoiceTemplate: () => dispatch(getAll_EInvoiceTemplate()),
        getReportTemplate: () => dispatch(getReportTemplate())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenFormOfInvoices);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
