import React from 'react';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "native-base";
import DetailEInvoiceTemplateInput from "./includes/DetailEInvoiceTemplateInput";
import DetailEInvoiceTemplateView from "./includes/DetailEInvoiceTemplateView";
const Tab = createMaterialBottomTabNavigator();
const TabEInvoiceTemplateInputDetail = ({ route }) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="TemplateInput"
                options={{
                    tabBarLabel: 'Input',
                    tabBarColor: '#0b0937',
                    tabBarIcon: ({ color }) => (
                        // <Icon type="MaterialCommunityIcons" name="file-document-edit-outline" />
                        <Icon type="AntDesign" name="left" />
                    ),
                }}
                children={() => <DetailEInvoiceTemplateInput TEMPLATE_CD={route.params.TEMPLATE_CD} FORM_NM={route.params.FORM_NM}
                    TEMPLATE_NAME={{
                        TEMPLATE_NM_VIET: route.params.TEMPLATE_NM_VIET,
                        TEMPLATE_NM_ENG: route.params.TEMPLATE_NM_ENG, TEMPLATE_NM_KOR: route.params.TEMPLATE_NM_KOR
                    }}
                />} />
            <Tab.Screen name="TemplateView"
                options={{
                    tabBarLabel: 'Template View',
                    tabBarColor: '#0b0937',
                    tabBarIcon: ({ color }) => (
                        <Icon type="MaterialCommunityIcons" name="file-document-outline" />
                    ),
                }}
                children={() => <DetailEInvoiceTemplateView TEMPLATE_CD={route.params.TEMPLATE_CD} FORM_NM={route.params.FORM_NM}
                    BACKGROUND_NM={route.params.BACKGROUND_NM} LOGO_NM={route.params.LOGO_NM} />} />
        </Tab.Navigator>
    );
}
export default TabEInvoiceTemplateInputDetail;