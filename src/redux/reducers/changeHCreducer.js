const initialState = {
  isMenColor: true
}

const changeHeaderColorR = (state={initialState}, {type, payload}) => {
  switch (type) {
    case "CHANGE_HEADER_COLOR":
        return {...state, payload};
      break;
  
    default:
      return state;
      break;
  }
}

export default changeHeaderColorR;