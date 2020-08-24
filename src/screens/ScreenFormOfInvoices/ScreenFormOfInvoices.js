import React, { useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, StatusBar } from 'react-native';
import { connect } from "react-redux";

import { getAll_EInvoiceTemplate, getReportTemplate } from "../../redux/actions/formOfInvoicesAction";
const ScreenFormOfInvoices = (props, { navigation }) => {
    useEffect(() => {
        props.getAll_EInvoiceTemplate();
        props.getReportTemplate();
    }, []);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <FlatList
                keyExtractor={(item) => item.FORM_NM}
                data={props.eInvoiceReportTemplate}
                renderItem={({ item }) => (
                    <Text>{item.FORM_NM}</Text>
                )}
            />
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        eInvoiceTemplateAll: state.formOfInvoice.templatesAll,
        eInvoiceReportTemplate: state.formOfInvoice.reportTemplate
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
