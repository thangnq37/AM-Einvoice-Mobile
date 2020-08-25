import {billReleaseEInvoicesType} from '../types/billReleaseEInvoicesType';

const INITIAL_STATE = {
  dataAll: null,
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
