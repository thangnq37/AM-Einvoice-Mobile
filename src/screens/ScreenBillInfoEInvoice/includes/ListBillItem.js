import React ,{useState} from 'react';
import { Body,Left,Right,Thumbnail,Button,Icon,ListItem,List,Text} from 'native-base';
import styles from '../styles/style';
export default function ListBillItem (props) {
    return(
      <List  style={styles.ListItem}>
        <ListItem  avatar>
              <Left>
                <Thumbnail source={require('../../../assets/images/list.png')} />
              </Left>
              <Body>
                <Text style={styles.textListNameCompany}>{props.CUSTOMER_NM} </Text>
                <Text style={styles.textListVat}>{props.COMPANY_TAX_CD}</Text>
                <Text style={styles.textListVat}>{props.FORM_SYMBOL}</Text>
                <Text style={styles.textCurrencyType}>{props.CURRENCY_TYPE}</Text>
              </Body>
              <Right>
                <Text style={styles.textListBillDate}>{props.BILL_YMD}</Text>
                <Text style={styles.textListBillNumber}>{props.BILL_NO}</Text>
                <Text style={styles.textListVat}>{props.BILL_SYMBOL}</Text>
                <Text style={styles.textPayMent}>{props.PAYMENT_AMOUNT_AND_FC}</Text>
              </Right>
        </ListItem>
        </List>
    );

}
