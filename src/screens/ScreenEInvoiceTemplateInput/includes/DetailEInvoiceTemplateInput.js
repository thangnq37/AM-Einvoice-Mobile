import React from 'react';
import { connect } from "react-redux";
import { Facebook } from 'react-content-loader/native';
import { ScrollView, Dimensions } from "react-native";
import { Content } from 'native-base';
import { WebView } from "react-native-webview";
import HTML from "react-native-render-html";
import { getByID_EInvoiceTemplate } from "../../../redux/actions/eInvoiceTemplateInputAction";

const DetailEInvoiceTemplateInput = (props) => {
    const [templateID, setTemplateID] = React.useState("");
    React.useEffect(() => {
        async function getTemplateByID() {
            await props.getByID_EInvoiceTemplate(props.route.params.TEMPLATE_CD, props.route.params.FORM_NM, props.route.params.LOGO_NM, props.route.params.BACKGROUND_NM);
        }
        getTemplateByID();
    }, []);
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
            {props.loading ? (
                <>
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
                </>
            ) :
                <>
                    <HTML
                        html={htmlContent}
                        staticContentMaxWidth={Dimensions.get("window").width}
                    />
                </>
            }
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
export default connect(mapStateToProps, mapDispatchToProps)(DetailEInvoiceTemplateInput);
