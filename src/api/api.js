const api = {
    root: 'http://118.69.170.50/API/api/',
    login: 'login',
    billReleaseEIvoices:{
        getAll:'billReleaseEinvoice/getAll',
        getBillKind:'billReleaseEinvoice/getBillKind',
        insert:'billReleaseEinvoice/insert',
        update:'billReleaseEinvoice/update',
        delete:'billReleaseEinvoice/delete',
    },
    BillInfoEinvoice: {
        getAll: 'BillInfoEinvoice/getAll',
        getBillInfo: 'BillInfoEinvoice/getBillInfo',
        getBillCount: 'BillInfoEinvoice/getBillCount',
    },
    EInvoiceTemplateInput: {
        getAll: "EinvoiceTemplateInput/getAll",
        getByID: "EinvoiceTemplateInput/getByID",
        getComboBox: "EinvoiceTemplateInput/getCombobox",
        update:"EinvoiceTemplateInput/update",
        getReportTemplate: "EinvoiceTemplateInput/getReportTemplate",
    }
};
export default api;

