const api = {
    root: 'http://118.69.170.50/API/api/',
    login: 'login',
    BillInfoEinvoice: {
        getAll: 'BillInfoEinvoice/getAll',
        getBillInfo: 'BillInfoEinvoice/getBillInfo',
        getBillCount: 'BillInfoEinvoice/getBillCount',
    },
    EInvoiceTemplateInput: {
        getAll: "EinvoiceTemplateInput/getAll",
        getByID: "EinvoiceTemplateInput/getByID",
        getComboBox: "EinvoiceTemplateInput/getCombobox",
        getReportTemplate: "EinvoiceTemplateInput/getReportTemplate",
    }
};
export default api;

