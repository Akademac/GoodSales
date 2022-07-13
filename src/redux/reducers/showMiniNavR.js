const initialState = false;

let miniNavVisibility = (state=initialState, {type, payload}) => {
  switch (type) {
    case 'SHOW_MINI_NAV':
      return payload;
      break;
  
    default:
      return state;
      break;
  }
}

export default miniNavVisibility;