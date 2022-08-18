let initialState = {
  data: [],
  fetching: true,
}

const getDataR = (state = initialState, { type, payload }) => {
  switch (type) {

    case "ALL_DATA_FETCHING":
      return { ...state, data: [], fetching: true };
      break;

    case 'ALL_DATA_FETCHED':
        return {
          ...state,
          data: [...payload.goodSales[0].mans,  ...payload.goodSales[1].women], 
          fetching: false, 
      }
      break;
    case 'ALL_DATA_FAILED':
      return { ...state, data: [], fetching: true }

    default:
      return state;
      break;
  }
}

export default getDataR;