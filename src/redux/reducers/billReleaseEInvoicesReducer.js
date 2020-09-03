import {billReleaseEInvoicesType} from '../types/billReleaseEInvoicesType';

const INITIAL_STATE = {
  dataAll: null,
  dataBillKind:null,
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case billReleaseEInvoicesType.GET_ALL:
      return {
        ...state,
        dataAll: action.result,
        loading: action.loading,
      };
    case billReleaseEInvoicesType.BILL_KIND:
      return {
        ...state,
        dataBillKind: action.result,
        loading: action.loading,
      };
    case billReleaseEInvoicesType.INSERT:
      return {
        ...state,
        dataBillKind: action.result,
        // loading: action.loading,
      };
    case billReleaseEInvoicesType.UPDATE:
      return {
        ...state,
        dataBillKind: action.result,
        // loading: action.loading,
      };
    case billReleaseEInvoicesType.DELETE:
      return {
        ...state,
        dataBillKind: action.result,
        // loading: action.loading,
      };
    case billReleaseEInvoicesType.LOADING:
      return {
        ...state,
        dataAll: null,
        loading: action.loading,
      };
    default:
      return state;
  }
};
