import React from 'react';
import { Body, Left, Right, Thumbnail, ListItem, List, Text } from 'native-base';
import styles from '../styles/style';
import { createStackNavigator } from "@react-navigation/stack";
const _stack = createStackNavigator();
const ListEInvoiceTemplateInput = (props) => {
    return (
        <List style={styles.ListItem}>
            <ListItem avatar>
                <Left>
                    <Thumbnail source={require('../../../assets/images/list.png')} />
                </Left>
                <Body>
                    <Text style={styles.textListNameCompany}>{props.TEMPLATE_NM_VIET} </Text>
                    <Text style={styles.textListVat}>{props.TEMPLATE_YMD_ADD}</Text>
                    <Text style={styles.textListVat}>{props.TEMPLATE_YMD_EDIT}</Text>
                </Body>
                <Right>
                    <Text style={styles.textListVat}></Text>
                    <Text style={styles.textListVat}>{props.USERID_ADD}</Text>
                    <Text style={styles.textListVat}>{props.USERID_EDIT}</Text>
                </Right>
            </ListItem>
        </List>
    );
}
export default ListEInvoiceTemplateInput;
