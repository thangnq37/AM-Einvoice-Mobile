import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Facebook } from 'react-content-loader/native';
import { ScrollView, Dimensions } from "react-native";
import HTML from "react-native-render-html";
import { Container, Header, Content, Footer, Text, Left, Body, Right, Button, Icon, Title, Label, Item, Input, Form, Picker } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { getByID_EInvoiceTemplate, getCompanyInfo } from "../../../redux/actions/eInvoiceTemplateInputAction";

const DetailEInvoiceTemplateView = (props) => {
    const navigation = useNavigation();
    useEffect(() => {
        async function getTemplateByID() {
            console.log("props in view ", props);
            await props.getByID_EInvoiceTemplate(props.TEMPLATE_CD, props.FORM_NM, props.LOGO_NM, props.BACKGROUND_NM);
        }
        getTemplateByID();
    }, [props.TEMPLATE_CD]);
    const htmlContent = `
        <!DOCTYPE html>
            <html>
                <head>
                <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
                </head>
                <body>
                    <div id="baseDiv">
                        <iframe srcdoc ="${props.eInvoiceTemplateID}"  height="500" referrerpolicy="unsafe-url" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>
                    </div>
                </body>
            </html>`;
    return (
        <ScrollView style={{ width: "100%", flex: 1 }}>
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => navigation.navigate("ScreenEInvoiceTemplateInput")}>
                            <Icon type="AntDesign" name="left" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Thêm phát hành hóa đơn</Title>
                    </Body>
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
                        <Content padder>
                            <HTML
                                html={htmlContent}
                                staticContentMaxWidth={Dimensions.get("window").width}
                            />
                        </Content>
                    )}
            </Container>
        </ScrollView>
    );
}

const mapStateToProps = (state) => {
    return {
        eInvoiceTemplateID: state.eInvoiceTemplateInput.templateByID,
        loading: state.eInvoiceTemplateInput.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getByID_EInvoiceTemplate: (templateCD, formName, logoName, backgroundName) => dispatch(getByID_EInvoiceTemplate(templateCD, formName, logoName, backgroundName)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailEInvoiceTemplateView);
