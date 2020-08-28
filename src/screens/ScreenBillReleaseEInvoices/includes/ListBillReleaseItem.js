/**
 * Auth : Đinh Văn Lành
 * ID : 073
 * Email : 073@amnote.com.vn
 */
import React, {useState} from 'react';
import {
  Body,
  Left,
  Right,
  Thumbnail,
  Button,
  Icon,
  ListItem,
  List,
  Text,
} from 'native-base';
import styles from '../styles/style';
export default function ListBillItem(props) {
  return (
    <List style={styles.ListItem}>
      <ListItem avatar>
        <Left>
          {/* <Text>{props.IS_CANCEL_RELEASE}</Text>
          <Text>{props.CANCEL_RELEASE_YMD}</Text> */}
          {props.IS_CANCEL_RELEASE + '' == '1' &&
          props.CANCEL_RELEASE_YMD + '' != '' ? (
            <Thumbnail
              source={require('../../../assets/images/cancelInvoice.png')}
            />
          ) : (
            <Thumbnail
              source={require('../../../assets/images/einvoice.png')}
            />
          )}
        </Left>
        <Body>
          <Text style={styles.textBlack}>{props.BILLKIND_NM_VIET} </Text>
          <Text style={styles.textBlack}>{props.FORM_SYMBOL} </Text>
          <Text style={styles.textBlack}>{props.BILL_SYMBOL} </Text>
          <Text style={styles.textPurple}>{props.TEMPLATE_NM_VIET} </Text>
          {props.IS_CANCEL_RELEASE + '' == '1' &&
          props.CANCEL_RELEASE_YMD + '' != '' ? (
            <Text style={styles.textRed}>{props.CANCEL_RELEASE_YMD} </Text>
          ) : (
            <Text style={styles.textRed}></Text>
          )}
          {/* <Text style={styles.textListBillNumber}>{props.DATE_CANCEL} </Text> */}

          {/* <Text style={styles.textListVat}>{props.COMPANY_TAX_CD}</Text>
          <Text style={styles.textListVat}>{props.FORM_SYMBOL}</Text>
          <Text style={styles.textCurrencyType}>{props.CURRENCY_TYPE}</Text> */}
        </Body>
        <Right>
          <Text style={styles.textBlue}>{props.FROM_NUM}</Text>
          <Text style={styles.textBlue}>{props.TO_NUM}</Text>
          <Text style={styles.textBlack}>{props.USE_YMD}</Text>
          <Text style={styles.textBlue}>{props.RELEASE_COUNT}</Text>
        </Right>
      </ListItem>
    </List>
  );
}
