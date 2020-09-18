import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Facebook } from 'react-content-loader/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { View, Icon, Container, Header, Body, Button, Title, Left, Right, Footer, FooterTab, Input, Item, Text, Content, Badge } from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import styles from './styles/style';
import ListEInvoiceTemplateInput from "./includes/ListEInvoiceTemplateInput";

import { getAll_EInvoiceTemplate, searchData } from "../../redux/actions/eInvoiceTemplateInputAction";

const ScreenEInvoiceTemplateInput = (props) => {
    const [textSearch, setTextSearch] = useState('');
    const [showInputSeach, setShowInputSeach] = useState(true);
    useEffect(() => {
        props.getAll_EInvoiceTemplate();
    }, []);
    const onRefresh = () => {
        props.getAll_EInvoiceTemplate();
    }
    const showInputSearch = () => {
        setShowInputSeach(!showInputSeach);
        props.searchData(props.templatesAllDefault, '');
    }
    const onChangeSearch = (text) => {
        console.log("text in onChangeSearch", text);
        setTextSearch(text);
        props.searchData(props.templatesAllDefault, text);
    }
    return (
        <Container>
            {showInputSeach ? (
                <Header searchBar style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon type="FontAwesome" name="file-text" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>MẪU HÓA ĐƠN</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => showInputSearch()} >
                            <Icon style={styles.iconSearch} type="FontAwesome" name="search" />
                        </Button>
                        <Button transparent onPress={() => myRefSort.current._toggleModalSort()}>
                            <Icon style={styles.colorIconEllipsis} type="MaterialCommunityIcons" name='sort' />
                        </Button>

                        <Button transparent onPress={() => myRefSearch.current._toggleModalSearch()}>
                            <Icon style={styles.colorIconEllipsis} type="FontAwesome" name='gears' />
                        </Button>
                    </Right>
                </Header >
            ) : (
                    <Header searchBar rounded>
                        <Item>
                            <Icon style={styles.ionClose} type="FontAwesome" onPress={() => showInputSearch()} name="close" />
                            <Input onChangeText={(text) => { onChangeSearch(text) }} placeholder="Tìm kiếm" />
                            <Icon type="FontAwesome" name="search" />
                        </Item>
                    </Header>
                )}
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
                            data={props.templatesAll ? (props.templatesAll) : (props.templatesAllDefault)}
                            renderItem={({ item }) => (
                                <ListEInvoiceTemplateInput TEMPLATE_CD={item.TEMPLATE_CD} FORM_NM={item.FORM_NM} TEMPLATE_NM_VIET={item.TEMPLATE_NM_VIET} TEMPLATE_YMD_ADD={item.TEMPLATE_YMD_ADD}
                                    TEMPLATE_YMD_EDIT={item.TEMPLATE_YMD_EDIT} USERID_ADD={item.USERID_ADD} USERID_EDIT={item.USERID_EDIT} />
                            )}
                            renderHiddenItem={(data, rowMap) => (
                                <View style={styles.rowBack}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate("TabEInvoiceTemplateInputDetail",
                                        {
                                            TEMPLATE_CD: data.item.TEMPLATE_CD, LOGO_NM: data.item.LOGO_NM, BACKGROUND_NM: data.item.BACKGROUND_NM, FORM_NM: data.item.FORM_NM,
                                            TEMPLATE_NM_VIET: data.item.TEMPLATE_NM_VIET, TEMPLATE_NM_ENG: data.item.TEMPLATE_NM_ENG, TEMPLATE_NM_KOR: data.item.TEMPLATE_NM_KOR
                                        }
                                    )} style={[styles.backLeftBtn, styles.backLeftBtnLeft]}>
                                        <Icon type="FontAwesome" name="edit" style={{ color: 'white' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]}>
                                        <Icon type="FontAwesome" name="close" style={{ color: 'white' }} />
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
                        <Icon type="AntDesign" name="left" />
                    </Button>
                    <Button vertical onPress={() => onRefresh()}>
                        <Icon style={styles.colorIconRefresh} type="FontAwesome" name="refresh" />
                    </Button>
                </FooterTab>
            </Footer>
        </Container >
    );
}

const mapStateToProps = (state) => {
    return {
        templatesAllDefault: state.eInvoiceTemplateInput.templatesAllDefault,
        templatesAll: state.eInvoiceTemplateInput.templatesAll,
        loading: state.eInvoiceTemplateInput.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAll_EInvoiceTemplate: () => dispatch(getAll_EInvoiceTemplate()),
        searchData: (data, text) => dispatch(searchData(data, text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenEInvoiceTemplateInput);