import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { ScrollView, ActivityIndicator } from "react-native";
import { Container, Input, Card, CardItem, Header, Content, Left, Right, Body, Button, Icon, Title, Label, Item, Textarea, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { updateEInvoiceTemplate } from "../../../redux/actions/eInvoiceTemplateInputAction";

const DetailEInvoiceTemplateInput = (props) => {
    const navigation = useNavigation();
    const [data, setData] = useState({});
    useEffect(() => {
        console.log("props in onInputChange", props);
        setData(props.TEMPLATE_NAME);
    }, [props.TEMPLATE_NAME]);
    const onInputChange = (value, colName) => {
        setData({ ...data, [colName]: value });
        console.log("data in onInputChange", data);
    };
    const onSubmit = () => {
        console.log("props", props);
        props.updateEInvoiceTemplate(data, props.TEMPLATE_CD, props.FORM_NM);
    }
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
                    <Right>
                        <Button transparent onPress={() => onSubmit()}>
                            <Icon type="FontAwesome" name="save" />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    {props.loading ? (<><ActivityIndicator /></>) : (
                        <>
                            <Card>
                                <CardItem header bordered>
                                    <Text>Thông tin công ty</Text>
                                </CardItem>
                                <Item stackedLabel>
                                    <Label>Mã số thuế</Label>
                                    <Input value={props.companyInfo.TAX_CD} editable={false} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Tên công ty</Label>
                                    <Input value={props.companyInfo.COMPANY_NM} editable={false} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Địa chỉ</Label>
                                    <Textarea rowSpan={3} value={props.companyInfo.ADDRESS} editable={false} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Điện thoại</Label>
                                    <Input value={props.companyInfo.TEL} editable={false} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Fax</Label>
                                    <Input value={props.companyInfo.FAX} editable={false} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Số tài khoản</Label>
                                    <Input value={props.companyInfo.ACCOUNT_NUM} editable={false} />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Tên ngân hàng</Label>
                                    <Textarea rowSpan={3} value={props.companyInfo.BANK_NM} editable={false} />
                                </Item>
                            </Card>
                            <Card>
                                <CardItem header bordered>
                                    <Text>Thông tin mẫu</Text>
                                </CardItem>

                                <Item stackedLabel>
                                    <Label>Tên mẫu tiếng Việt</Label>
                                    <Input
                                        value={data.TEMPLATE_NM_VIET}
                                        onChangeText={(e) => {
                                            onInputChange(e, 'TEMPLATE_NM_VIET');
                                        }}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Tên mẫu tiếng Anh</Label>
                                    <Input
                                        value={data.TEMPLATE_NM_ENG}
                                        onChangeText={(value) => {
                                            onInputChange(value, 'TEMPLATE_NM_ENG');
                                        }}
                                    />
                                </Item>
                                <Item stackedLabel>
                                    <Label>Tên mẫu tiếng Hàn</Label>
                                    <Input
                                        value={data.TEMPLATE_NM_KOR}
                                        onChangeText={(value) => {
                                            onInputChange(value, 'TEMPLATE_NM_KOR');
                                        }}
                                    />
                                </Item>
                            </Card>
                        </>)}

                </Content>
            </Container>
        </ScrollView >
    );
}
const mapStateToProps = (state) => {
    return {
        companyInfo: state.user.companyInfo,
        loading: state.eInvoiceTemplateInput.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateEInvoiceTemplate: (data, TEMPLATE_CD, FORM_NM) => dispatch(updateEInvoiceTemplate(data, TEMPLATE_CD, FORM_NM)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DetailEInvoiceTemplateInput);
