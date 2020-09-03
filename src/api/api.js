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
    formOfInvoices: "EinvoiceTemplateInput",

};
export default api;

