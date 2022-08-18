let initialState = {
  data: [],
  fetching: true,
}

const getSingleProductR = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SINGLE_PRODUCT_FETCHING":
      return { ...state, data: [], fetching: true };
      break;

    case 'SINGLE_PRODUCT_FETCHED':
      return {
        ...state,
        data: payload,
        fetching: false,
      }
      break;
    case 'SINGLE_PROUCT_FAILED':
      return { ...state, data: [], fetching: true }
      break;
    default:
      return state;
      break;
  }
}


export default getSingleProductR;