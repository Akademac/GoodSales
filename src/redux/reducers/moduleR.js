const initialState = {
  visibility: false, 
  type: ''
}

const moduleShowHide = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SHOW_HIDE_MODULE":
      return payload;
      break;

    default:
      return state
      break;
  }
};

export default moduleShowHide;
