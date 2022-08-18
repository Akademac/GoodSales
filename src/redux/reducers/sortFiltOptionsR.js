const initialState = {
  visibility: false, 
  sortFilt: ''
}

const sortFiltOptions = (state=initialState, {type, payload}) => {
  switch (type) {
    case "SHOW_SORT_FILT_OPTIONS":
      return payload;
      break;
  
    default:
      return state;
      break;
  }
}

export default sortFiltOptions;